// Xử lý gọi API đa trang
const API = {
    // Gọi tất cả các trang và gộp dữ liệu - tuần tự, delay 1 giây
    async fetchAllPages() {
        let allData = [];
        let currentPage = 1;
        let total = 0;
        let totalPages = 0;
        let retryCount = 0;
        
        // Cập nhật loading status
        const updateLoading = (page, totalPages, message = '') => {
            const statusEl = document.getElementById('loadingStatus');
            const progressEl = document.getElementById('loadingProgress');
            if (statusEl) {
                statusEl.textContent = message || `Đang gọi trang ${page}${totalPages ? `/${totalPages}` : ''}...`;
            }
            if (progressEl && totalPages) {
                const percent = (page / totalPages) * 100;
                progressEl.style.width = `${percent}%`;
            }
        };
        
        updateLoading(1, 0, 'Đang kết nối đến server...');
        
        try {
            // Gọi trang đầu tiên để lấy total
            console.log(`[${new Date().toLocaleTimeString()}] Đang gọi trang 1...`);
            const firstResponse = await this.fetchPageWithRetry(1);
            allData = [...firstResponse.data];
            total = firstResponse.total;
            
            // Tính tổng số trang
            totalPages = Math.ceil(total / CONFIG.PAGE_SIZE);
            updateLoading(1, totalPages, `Đã lấy trang 1/${totalPages}`);
            
            console.log(`📊 Tổng số: ${total} bản ghi, ${totalPages} trang`);
            
            // Nếu còn trang tiếp theo, gọi tuần tự với delay 1 giây
            if (totalPages > 1) {
                for (let page = 2; page <= totalPages; page++) {
                    // Đợi 1 giây trước khi gọi trang tiếp theo
                    const delayMessage = `Đã lấy ${page-1}/${totalPages} trang, đợi 1 giây...`;
                    updateLoading(page-1, totalPages, delayMessage);
                    console.log(`⏳ Trang ${page-1} xong, đợi 1s trước khi gọi trang ${page}...`);
                    
                    await this.sleep(CONFIG.RETRY.DELAY_BETWEEN_PAGES);
                    
                    // Gọi trang tiếp theo
                    console.log(`[${new Date().toLocaleTimeString()}] Đang gọi trang ${page}/${totalPages}...`);
                    updateLoading(page, totalPages, `Đang gọi trang ${page}/${totalPages}...`);
                    
                    const response = await this.fetchPageWithRetry(page);
                    allData = [...allData, ...response.data];
                    
                    console.log(`✅ Đã lấy trang ${page}/${totalPages} (${response.data.length} bản ghi)`);
                }
            }
            
            console.log(`🎉 Hoàn tất! Đã lấy ${allData.length}/${total} bản ghi từ ${totalPages} trang`);
            return allData;
            
        } catch (error) {
            console.error('❌ Lỗi khi gọi API:', error);
            throw error;
        }
    },
    
    // Gọi một trang với cơ chế retry
    async fetchPageWithRetry(pageNumber, retryCount = 0) {
        try {
            return await this.fetchPage(pageNumber);
        } catch (error) {
            // Xử lý lỗi 429 - rate limit
            if (error.message.includes('429')) {
                if (retryCount < CONFIG.RETRY.MAX_RETRIES) {
                    const waitTime = CONFIG.RETRY.DELAY_ON_429;
                    console.warn(`⚠️ Bị rate limit ở trang ${pageNumber}, thử lại lần ${retryCount + 1}/${CONFIG.RETRY.MAX_RETRIES} sau ${waitTime/1000}s`);
                    
                    const statusEl = document.getElementById('loadingStatus');
                    if (statusEl) {
                        statusEl.textContent = `Bị giới hạn, đợi ${waitTime/1000}s rồi thử lại...`;
                    }
                    
                    await this.sleep(waitTime);
                    return this.fetchPageWithRetry(pageNumber, retryCount + 1);
                }
            }
            
            // Xử lý lỗi mạng
            if (error.name === 'TypeError' || error.message.includes('network') || error.message.includes('fetch')) {
                if (retryCount < CONFIG.RETRY.MAX_RETRIES) {
                    const waitTime = CONFIG.RETRY.DELAY_ON_ERROR;
                    console.warn(`⚠️ Lỗi mạng ở trang ${pageNumber}, thử lại lần ${retryCount + 1}/${CONFIG.RETRY.MAX_RETRIES} sau ${waitTime/1000}s`);
                    
                    const statusEl = document.getElementById('loadingStatus');
                    if (statusEl) {
                        statusEl.textContent = `Lỗi mạng, đợi ${waitTime/1000}s rồi thử lại...`;
                    }
                    
                    await this.sleep(waitTime);
                    return this.fetchPageWithRetry(pageNumber, retryCount + 1);
                }
            }
            
            // Nếu đã retry hết mà vẫn lỗi thì throw
            throw error;
        }
    },
    
    // Gọi một trang cụ thể
    async fetchPage(pageNumber) {
        const url = CONFIG.getApiUrl(pageNumber);
        
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'Authorization': CONFIG.AUTH_TOKEN
            }
        });
        
        if (response.status === 429) {
            throw new Error(`429 Too Many Requests at page ${pageNumber}`);
        }
        
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status} at page ${pageNumber}`);
        }
        
        const json = await response.json();
        if (!json.status || !Array.isArray(json.data)) {
            throw new Error(`Dữ liệu không hợp lệ tại trang ${pageNumber}`);
        }
        
        return {
            data: json.data,
            total: json.total || 0
        };
    },
    
    // Hàm sleep
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },
    
    // Tính tồn kho cuối kỳ (chỉ tính phiếu nhập - xuất, bỏ qua KM)
    calculateInventory(data) {
        const inventory = {};
        const khoList = new Set();
        
        data.forEach(record => {
            // Bỏ qua phiếu KM (tong_tien = 0)
            if (record.tong_tien === 0) return;
            
            const kho = record.loai_xuat_nhap === 'Chuyển kho' ? record.nhap_vao : record.xuat_tu;
            if (!kho) return;
            
            khoList.add(kho);
            
            if (!inventory[kho]) {
                inventory[kho] = {
                    kho: kho,
                    tong_nhap: 0,
                    tong_xuat: 0,
                    tong_ton: 0,
                    san_pham: {},
                    so_luong_nhap: 0,
                    so_luong_xuat: 0
                };
            }
            
            // Xử lý từng sản phẩm
            if (record.data_san_pham) {
                record.data_san_pham.forEach(sp => {
                    const maSP = sp.ma_sp;
                    const soLuong = parseFloat(sp.so_luong) || 0;
                    const thanhTien = parseFloat(sp.thanh_tien) || 0;
                    
                    if (!inventory[kho].san_pham[maSP]) {
                        inventory[kho].san_pham[maSP] = {
                            ma_sp: maSP,
                            ten_sp: sp.ten_sp,
                            dvt: sp.dvt,
                            nhap: 0,
                            xuat: 0,
                            ton_cuoi: 0
                        };
                    }
                    
                    if (record.loai_xuat_nhap === 'Chuyển kho') {
                        // Nhập kho
                        inventory[kho].san_pham[maSP].nhap += soLuong;
                        inventory[kho].tong_nhap += thanhTien;
                        inventory[kho].so_luong_nhap += soLuong;
                    } else if (record.loai_xuat_nhap === 'Xuất kho') {
                        // Xuất kho
                        inventory[kho].san_pham[maSP].xuat += soLuong;
                        inventory[kho].tong_xuat += thanhTien;
                        inventory[kho].so_luong_xuat += soLuong;
                    }
                });
            }
        });
        
        // Tính tồn cuối
        Object.keys(inventory).forEach(kho => {
            let tongTon = 0;
            Object.keys(inventory[kho].san_pham).forEach(maSP => {
                const sp = inventory[kho].san_pham[maSP];
                sp.ton_cuoi = sp.nhap - sp.xuat;
                tongTon += sp.ton_cuoi;
            });
            inventory[kho].tong_ton = tongTon;
        });
        
        return {
            inventory: inventory,
            khoList: Array.from(khoList)
        };
    },
    
    // Lấy top sản phẩm tồn nhiều nhất
    getTopProducts(inventory, limit = 10) {
        const products = [];
        
        Object.values(inventory).forEach(kho => {
            Object.values(kho.san_pham).forEach(sp => {
                if (sp.ton_cuoi > 0) {
                    products.push({
                        ...sp,
                        kho: kho.kho
                    });
                }
            });
        });
        
        return products
            .sort((a, b) => b.ton_cuoi - a.ton_cuoi)
            .slice(0, limit);
    }
};