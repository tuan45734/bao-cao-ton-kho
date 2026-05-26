// ======================= script.js (sửa đổi) =======================

// ======================= CẤU HÌNH =======================
const CONFIG = {
    API_URL: 'https://openapi.mobiwork.vn/OpenAPI/V1/Inventory',
    AUTH_TOKEN: 'Basic NjlhZTZlNmM4YTY0NjVmNDFlNTNhZmI0OjFuYzFnc3J1N2p2Ym10eTdncGV5NWk=',
    DELAY_MS: 1000,
    PAGE_SIZE: 10000,
    
    EXCLUDED_PRODUCTS: ['HH00101_T01_1', 'CCDC002','CCDC0001','HH00101_T1112','HH00071_T02'],
    EXCLUDED_WAREHOUSES: ['Kho chính'],
    
    getConversionRate: function(maSp) {
        if (typeof _hsqdCache !== 'undefined' && _hsqdCache) {
            return _hsqdCache[maSp] || null;
        }
        return null;
    },
    
    isExcludedProduct: (ma_sp) => CONFIG.EXCLUDED_PRODUCTS.includes(ma_sp),
    
    isExcludedWarehouse: (warehouseName) => {
        if (!warehouseName) return false;
        if (CONFIG.EXCLUDED_WAREHOUSES.includes(warehouseName)) return true;
        if (warehouseName.includes('- KM')) return true;
        return false;
    },
    
    formatDate: (date) => {
        const d = new Date(date);
        return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()}`;
    },
    sleep: (ms) => new Promise(resolve => setTimeout(resolve, ms))
};

// TÀI KHOẢN VÀ QUYỀN HẠN
const USER_ACCOUNTS = {
    '99': { role: 'admin', region: null },        // Admin - toàn quyền
    'KV1ADZ': { role: 'user', region: 'KV1' },                 // User KV1
    'KV2ZAC': { role: 'user', region: 'KV2' },                 // User KV2
    'KV3CCC': { role: 'user', region: 'KV3' },                 // User KV3
    'KV4YXY': { role: 'user', region: 'KV4' },                 // User KV4
    'KV5XXZ': { role: 'user', region: 'KV5' },                 // User KV5
    'KV6XBC': { role: 'user', region: 'KV6' },                 // User KV6
    'KV7XBC': { role: 'user', region: 'KV7' },                 // User KV7
    'KV7ZZA': { role: 'user', region: 'KV7' }                  // User KV7 (alias)
};

let currentUser = null;

// ======================= CHUYỂN ĐỔI ĐƠN VỊ =======================
const UnitConverter = {
    convertToBox: (maSp, quantity, unit) => {
        if (unit === 'Thùng') return quantity;
        const rate = CONFIG.getConversionRate(maSp);
        return rate ? quantity / rate : quantity;
    },
    needsConversion: (unit) => unit !== 'Thùng'
};

// ======================= QUẢN LÝ TỒN KHO =======================
const InventoryManager = {
    map: new Map(),
    importMap: new Map(),
    exportMap: new Map(),
    importDetailMap: new Map(),
    exportDetailMap: new Map(),
    nppImportDetailMap: new Map(),
    
    getKey: function(npp, ma_sp) {
        return `${npp}|${ma_sp}`;
    },
    
    update: function(npp, ma_sp, ten_sp, so_luong, thanh_tien) {
        if (CONFIG.isExcludedProduct(ma_sp)) return;
        
        const normalizedNPP = normalizeNPP(npp);
        
        const key = this.getKey(normalizedNPP, ma_sp);
        if (!this.map.has(key)) {
            this.map.set(key, { npp: normalizedNPP, ma_sp, ten_sp: ten_sp || '', so_luong: 0, thanh_tien: 0 });
        }
        const item = this.map.get(key);
        item.so_luong += so_luong;
        item.thanh_tien += thanh_tien;
        if (ten_sp && !item.ten_sp) item.ten_sp = ten_sp;
    },
    
    addImport: function(npp, ma_sp, ten_sp, so_luong, thanh_tien) {
        if (CONFIG.isExcludedProduct(ma_sp)) return;
        if (CONFIG.isExcludedWarehouse(npp)) return;
        
        const normalizedNPP = normalizeNPP(npp);
        const region = getRegionByNPP(normalizedNPP);
        if (!region) return;
        
        const category = Overview.getNganhHang(ten_sp);
        
        if (!this.importMap.has(region)) {
            this.importMap.set(region, 0);
        }
        this.importMap.set(region, this.importMap.get(region) + thanh_tien);
        
        const key = `${region}|${category}`;
        if (!this.importDetailMap.has(key)) {
            this.importDetailMap.set(key, { quantity: 0, value: 0, products: [] });
        }
        const detail = this.importDetailMap.get(key);
        detail.quantity += so_luong;
        detail.value += thanh_tien;
        detail.products.push({ ma_sp, ten_sp, so_luong, thanh_tien, category, npp: normalizedNPP });
        this.importDetailMap.set(key, detail);
        
        const nppKey = `${normalizedNPP}|${category}`;
        if (!this.nppImportDetailMap.has(nppKey)) {
            this.nppImportDetailMap.set(nppKey, { quantity: 0, value: 0, products: [], npp: normalizedNPP, category });
        }
        const nppDetail = this.nppImportDetailMap.get(nppKey);
        nppDetail.quantity += so_luong;
        nppDetail.value += thanh_tien;
        nppDetail.products.push({ ma_sp, ten_sp, so_luong, thanh_tien });
        this.nppImportDetailMap.set(nppKey, nppDetail);
    },
    
    addExport: function(npp, ma_sp, ten_sp, so_luong, thanh_tien) {
        if (CONFIG.isExcludedProduct(ma_sp)) return;
        if (CONFIG.isExcludedWarehouse(npp)) return;
        
        const normalizedNPP = normalizeNPP(npp);
        const region = getRegionByNPP(normalizedNPP);
        if (!region) return;
        
        const category = Overview.getNganhHang(ten_sp);
        
        if (!this.exportMap.has(region)) {
            this.exportMap.set(region, 0);
        }
        this.exportMap.set(region, this.exportMap.get(region) + thanh_tien);
        
        const key = `${region}|${category}`;
        if (!this.exportDetailMap.has(key)) {
            this.exportDetailMap.set(key, { quantity: 0, value: 0, products: [] });
        }
        const detail = this.exportDetailMap.get(key);
        detail.quantity += so_luong;
        detail.value += thanh_tien;
        detail.products.push({ ma_sp, ten_sp, so_luong, thanh_tien, category, npp: normalizedNPP });
        this.exportDetailMap.set(key, detail);
    },
    
    getTopNPPByCategoryFromInventory: function(categoryName, limit = 5) {
        const nppInventoryMap = new Map();
        
        for (const [key, item] of this.map) {
            if (item.so_luong <= 0) continue;
            if (CONFIG.isExcludedWarehouse(item.npp)) continue;
            
            const productCategory = Overview.getNganhHang(item.ten_sp);
            
            if (productCategory === categoryName) {
                if (!nppInventoryMap.has(item.npp)) {
                    nppInventoryMap.set(item.npp, {
                        npp: item.npp,
                        value: 0,
                        quantity: 0,
                        products: []
                    });
                }
                const nppData = nppInventoryMap.get(item.npp);
                nppData.value += item.thanh_tien;
                nppData.quantity += item.so_luong;
                nppData.products.push({
                    ma_sp: item.ma_sp,
                    ten_sp: item.ten_sp,
                    so_luong: item.so_luong,
                    thanh_tien: item.thanh_tien
                });
                nppInventoryMap.set(item.npp, nppData);
            }
        }
        
        return Array.from(nppInventoryMap.values())
            .sort((a, b) => b.value - a.value)
            .slice(0, limit);
    },
    
    loadInitial: function() {
        for (const item of OPENING_STOCK_DATA) {
            let sl = item.so_luong;
            let tt = calculateThanhTien(item.ma_sp, sl);
            this.update(item.npp, item.ma_sp, item.ten_sp || '', sl, tt);
        }
    },
    
    clear: function() {
        this.map.clear();
        this.importMap.clear();
        this.exportMap.clear();
        this.importDetailMap.clear();
        this.exportDetailMap.clear();
        this.nppImportDetailMap.clear();
    },
    
    getSummary: function(userRegion = null) {
        const items = [];
        const uniqueNPP = new Set();
        
        for (const [_, item] of this.map) {
            if (Math.abs(item.so_luong) > 0.001 && !CONFIG.isExcludedWarehouse(item.npp)) {
                const region = getRegionByNPP(item.npp);
                if (!region) continue;
                
                // Nếu user chỉ có quyền xem 1 khu vực, lọc theo khu vực đó
                if (userRegion && region !== userRegion) continue;
                
                items.push(item);
                uniqueNPP.add(item.npp);
            }
        }
        
        const nppSummary = {};
        const regionSummary = {};
        const regionValueSummary = {};
        const regionProducts = {};
        
        for (const item of items) {
            const region = getRegionByNPP(item.npp);
            if (!region) continue;
            
            if (!nppSummary[item.npp]) {
                nppSummary[item.npp] = { total_quantity: 0, total_value: 0, products: [] };
            }
            nppSummary[item.npp].total_quantity += item.so_luong;
            nppSummary[item.npp].total_value += item.thanh_tien;
            nppSummary[item.npp].products.push(item);
            
            if (!regionSummary[region]) regionSummary[region] = 0;
            regionSummary[region] += item.so_luong;
            
            if (!regionValueSummary[region]) regionValueSummary[region] = 0;
            regionValueSummary[region] += item.thanh_tien;
            
            if (!regionProducts[region]) regionProducts[region] = {};
            if (!regionProducts[region][item.npp]) regionProducts[region][item.npp] = [];
            regionProducts[region][item.npp].push(item);
        }
        
        return {
            nppSummary,
            regionSummary,
            regionValueSummary,
            regionProducts,
            totalNPP: uniqueNPP.size,
            totalQuantity: items.reduce((s, i) => s + i.so_luong, 0),
            totalValue: items.reduce((s, i) => s + i.thanh_tien, 0)
        };
    }
};

// ======================= XỬ LÝ API =======================
const API = {
    fetchUnconfirmedTransferIds: async (tu_ngay, den_ngay) => {
        const fmtTu = CONFIG.formatDate(tu_ngay);
        const fmtDen = CONFIG.formatDate(den_ngay);
        const unconfirmedIds = new Set();
        let page = 1;
        let hasMore = true;
        
        try {
            while (hasMore) {
                const url = `${CONFIG.API_URL}?loai_xuat_nhap=Chuy%E1%BB%83n%20kho%20ch%C6%B0a%20duy%E1%BB%87t&tu_ngay=${encodeURIComponent(fmtTu)}&den_ngay=${encodeURIComponent(fmtDen)}&kieu_ngay=%20&page_size=${CONFIG.PAGE_SIZE}&page_number=${page}`;
                
                const response = await fetch(url, { headers: { 'Authorization': CONFIG.AUTH_TOKEN } });
                
                if (response.status === 429) {
                    console.warn('API rate limit, waiting 2 seconds...');
                    await CONFIG.sleep(2000);
                    continue;
                }
                
                if (!response.ok) {
                    console.warn(`Không thể lấy danh sách phiếu chưa duyệt: ${response.status}`);
                    break;
                }
                
                const data = await response.json();
                
                if (data.status && data.data && data.data.length > 0) {
                    for (const record of data.data) {
                        if (record.ma_phieu) {
                            unconfirmedIds.add(record.ma_phieu);
                        }
                    }
                    page++;
                    hasMore = data.data.length === CONFIG.PAGE_SIZE;
                    if (hasMore) {
                        await CONFIG.sleep(CONFIG.DELAY_MS);
                    }
                } else {
                    hasMore = false;
                }
            }
        } catch (error) {
            console.warn('Lỗi khi lấy danh sách phiếu chưa duyệt:', error.message);
        }
        
        return unconfirmedIds;
    },
    
    fetchAll: async (tu_ngay, den_ngay, onProgress, excludedPhiếuIds = new Set()) => {
        let allData = [], page = 1, hasMore = true;
        const fmtTu = CONFIG.formatDate(tu_ngay), fmtDen = CONFIG.formatDate(den_ngay);
        
        onProgress(0);
        
        let fetched = 0;
        
        while (hasMore) {
            const url = `${CONFIG.API_URL}?tu_ngay=${encodeURIComponent(fmtTu)}&den_ngay=${encodeURIComponent(fmtDen)}&kieu_ngay=%20&page_size=${CONFIG.PAGE_SIZE}&page_number=${page}`;
            onProgress(fetched > 0 ? 50 : 5);
            
            let response;
            let retryCount = 0;
            const maxRetries = 3;
            
            while (retryCount < maxRetries) {
                response = await fetch(url, { headers: { 'Authorization': CONFIG.AUTH_TOKEN } });
                
                if (response.status === 429) {
                    retryCount++;
                    const waitTime = 2000 * retryCount;
                    console.warn(`API rate limit (429), waiting ${waitTime/1000}s... (retry ${retryCount}/${maxRetries})`);
                    await CONFIG.sleep(waitTime);
                    continue;
                }
                break;
            }
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            
            const data = await response.json();
            
            if (data.status && data.data && data.data.length) {
                const filteredData = data.data.filter(record => {
                    return !excludedPhiếuIds.has(record.ma_phieu);
                });
                
                allData.push(...filteredData);
                fetched += data.data.length;
                page++;
                hasMore = data.data.length === CONFIG.PAGE_SIZE;
                if (hasMore) {
                    await CONFIG.sleep(CONFIG.DELAY_MS);
                }
            } else {
                hasMore = false;
            }
        }
        
        onProgress(100);
        return allData;
    },
    
    processTransactions: function(data) {
        for (const record of data) {
            const { xuat_tu, nhap_vao, loai_xuat_nhap, data_san_pham = [] } = record;
            for (const sp of data_san_pham) {
                if (sp.is_km === true || sp.is_km === 'true') continue;
                if (CONFIG.isExcludedProduct(sp.ma_sp)) continue;
                
                const unit = sp.dvt || sp.ma_dvt || 'Gói';
                let sl = parseFloat(sp.so_luong) || 0;
                if (sl === 0) continue;
                
                if (UnitConverter.needsConversion(unit)) {
                    sl = UnitConverter.convertToBox(sp.ma_sp, sl, unit);
                }
                
                const tt = calculateThanhTien(sp.ma_sp, sl);
                
                if (loai_xuat_nhap === 'Xuất kho' && xuat_tu) {
                    InventoryManager.update(xuat_tu, sp.ma_sp, sp.ten_sp, -sl, -tt);
                    InventoryManager.addExport(xuat_tu, sp.ma_sp, sp.ten_sp, sl, tt);
                } else if (loai_xuat_nhap === 'Nhập kho' && nhap_vao) {
                    InventoryManager.update(nhap_vao, sp.ma_sp, sp.ten_sp, sl, tt);
                    InventoryManager.addImport(nhap_vao, sp.ma_sp, sp.ten_sp, sl, tt);
                } else if (loai_xuat_nhap === 'Chuyển kho') {
                    if (xuat_tu) {
                        InventoryManager.update(xuat_tu, sp.ma_sp, sp.ten_sp, -sl, -tt);
                        InventoryManager.addExport(xuat_tu, sp.ma_sp, sp.ten_sp, sl, tt);
                    }
                    if (nhap_vao) {
                        InventoryManager.update(nhap_vao, sp.ma_sp, sp.ten_sp, sl, tt);
                        InventoryManager.addImport(nhap_vao, sp.ma_sp, sp.ten_sp, sl, tt);
                    }
                }
            }
        }
    }
};

// ======================= GIAO DIỆN CHÍNH =======================
const UI = {
    elements: {},
    
    init: function() {
        this.elements = {
            loading: document.getElementById('loading'),
            btnOverview: document.getElementById('btnOverview'),
            btnDetail: document.getElementById('btnDetail'),
            tabOverview: document.getElementById('tabOverview'),
            tabDetail: document.getElementById('tabDetail'),
            fetchBtn: document.getElementById('fetchBtn'),
            progressBar: document.getElementById('progressBar'),
            tuNgay: document.getElementById('tu_ngay'),
            denNgay: document.getElementById('den_ngay'),
            error: document.getElementById('error'),
            authModal: document.getElementById('authModal'),
            accessCode: document.getElementById('accessCode'),
            submitAuthBtn: document.getElementById('submitAuthBtn'),
            authError: document.getElementById('authError')
        };
        
        this.initAuth();
        
        Overview.init();
        Detail.init();
        
        // Gắn sự kiện click cho các tab
        this.elements.btnOverview.addEventListener('click', () => this.switchTab('overview'));
        this.elements.btnDetail.addEventListener('click', () => this.switchTab('detail'));
    },
    
    initAuth: function() {
        this.elements.submitAuthBtn.onclick = () => {
            const code = this.elements.accessCode.value;
            const userInfo = USER_ACCOUNTS[code];
            
            if (userInfo) {
                currentUser = {
                    code: code,
                    role: userInfo.role,
                    region: userInfo.region
                };
                
                this.hideAuthModal();
                this.elements.fetchBtn.disabled = false;
                this.elements.authError.textContent = '';
                this.elements.accessCode.value = '';
                
                // Cấu hình giao diện theo quyền
                this.configureUIByUser();
            } else {
                this.elements.authError.textContent = '❌ Mã không đúng! Vui lòng thử lại.';
                this.elements.accessCode.value = '';
                this.elements.accessCode.focus();
            }
        };
        
        this.elements.accessCode.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.elements.submitAuthBtn.click();
            }
        });
        
        this.showAuthModal();
    },
    
    configureUIByUser: function() {
        if (!currentUser) return;
        
        if (currentUser.role === 'admin') {
            // Admin: hiển thị cả 2 tab
            this.elements.btnOverview.style.display = 'inline-block';
            this.elements.btnDetail.style.display = 'inline-block';
            
            // Hiển thị tất cả khu vực trong filter của Detail
            const regionGroupSelect = document.getElementById('regionGroupSelect');
            const regionSelect = document.getElementById('regionSelect');
            if (regionGroupSelect) {
                regionGroupSelect.innerHTML = `
                    <option value="">-- Tất cả miền --</option>
                    <option value="MB">Miền Bắc</option>
                    <option value="MT">Miền Trung</option>
                `;
                regionGroupSelect.disabled = false;
            }
            if (regionSelect) {
                regionSelect.innerHTML = `
                    <option value="">-- Tất cả khu vực --</option>
                    <option value="KV1">KV1</option>
                    <option value="KV2">KV2</option>
                    <option value="KV3">KV3</option>
                    <option value="KV4">KV4</option>
                    <option value="KV5">KV5</option>
                    <option value="KV6">KV6</option>
                    <option value="KV7">KV7</option>
                `;
                regionSelect.disabled = false;
            }
        } else if (currentUser.role === 'user') {
            // User thường: ẩn tab Tổng quan, chỉ hiện Chi tiết
            this.elements.btnOverview.style.display = 'none';
            this.elements.btnDetail.style.display = 'inline-block';
            
            // Chuyển sang tab Chi tiết
            if (this.elements.btnDetail.classList.contains('active')) {
                this.switchTab('detail');
            } else {
                this.elements.btnDetail.click();
            }
            
            // Cấu hình filter khu vực: chỉ hiển thị khu vực của user
            const regionGroupSelect = document.getElementById('regionGroupSelect');
            const regionSelect = document.getElementById('regionSelect');
            if (regionGroupSelect) {
                regionGroupSelect.innerHTML = `
                    <option value="${currentUser.region === 'KV7' ? 'MT' : 'MB'}">${currentUser.region === 'KV7' ? 'Miền Trung' : 'Miền Bắc'}</option>
                `;
                regionGroupSelect.value = currentUser.region === 'KV7' ? 'MT' : 'MB';
                regionGroupSelect.disabled = true;
            }
            if (regionSelect) {
                regionSelect.innerHTML = `
                    <option value="${currentUser.region}">${currentUser.region}</option>
                `;
                regionSelect.value = currentUser.region;
                regionSelect.disabled = true; // Không cho đổi khu vực
            }
            
            // Kích hoạt sự kiện change cho region để load NPP trong khu vực
            setTimeout(() => {
                if (Detail.onRegionChange) {
                    Detail.onRegionChange();
                }
            }, 100);
        }
    },
    
    showAuthModal: function() {
        if (this.elements.authModal) {
            this.elements.authModal.classList.add('active');
        }
    },
    
    hideAuthModal: function() {
        if (this.elements.authModal) {
            this.elements.authModal.classList.remove('active');
        }
    },
    
    switchTab: function(tab) {
        if (tab === 'overview') {
            this.elements.btnOverview.classList.add('active');
            this.elements.btnDetail.classList.remove('active');
            this.elements.tabOverview.classList.add('active');
            this.elements.tabDetail.classList.remove('active');
        } else {
            this.elements.btnOverview.classList.remove('active');
            this.elements.btnDetail.classList.add('active');
            this.elements.tabOverview.classList.remove('active');
            this.elements.tabDetail.classList.add('active');
        }
    },
    
    showLoading: function(show) {
        this.elements.loading.classList.toggle('active', show);
    },
    
    updateProgress: function(percent) {
        const p = Math.min(100, Math.max(0, percent));
        this.elements.progressBar.style.width = `${p}%`;
        this.elements.progressBar.textContent = `${Math.round(p)}%`;
    },
    
    displayResults: function(summary) {
        const topChickenNPP = InventoryManager.getTopNPPByCategoryFromInventory('Chân Gà', 5);
        const topBimQuayNPP = InventoryManager.getTopNPPByCategoryFromInventory('Bim Quẩy', 5);
        
        Overview.update(summary, topChickenNPP, topBimQuayNPP);
        Detail.update(summary.nppSummary);
        
        // Nếu là user thường, luôn ở tab chi tiết
        if (currentUser && currentUser.role === 'user') {
            this.switchTab('detail');
        } else {
            this.switchTab('overview');
        }
    },
    
    hideResults: function() {
        Overview.clear();
        Detail.clear();
    },
    
    showError: function(msg) {
        this.elements.error.textContent = `❌ Lỗi: ${msg}`;
        this.elements.error.style.display = 'block';
    },
    
    getDateRange: function() {
        return { tu_ngay: this.elements.tuNgay.value, den_ngay: this.elements.denNgay.value };
    },
    
    validate: function() {
        const { tu_ngay, den_ngay } = this.getDateRange();
        if (!tu_ngay || !den_ngay) { 
            alert('Vui lòng chọn khoảng thời gian'); 
            return false; 
        }
        return true;
    }
};

// ======================= MAIN =======================
async function fetchAndCalculate() {
    if (!UI.validate()) return;
    
    InventoryManager.clear();
    UI.showLoading(true);
    UI.hideResults();
    UI.elements.fetchBtn.disabled = true;
    UI.elements.error.style.display = 'none';
    
    const { tu_ngay, den_ngay } = UI.getDateRange();
    
    try {
        UI.updateProgress(0);
        InventoryManager.loadInitial();
        
        UI.updateProgress(3);
        UI.updateProgress(4);
        const unconfirmedIds = await API.fetchUnconfirmedTransferIds(tu_ngay, den_ngay);
        UI.updateProgress(5);
        
        const data = await API.fetchAll(tu_ngay, den_ngay, (p) => UI.updateProgress(p), unconfirmedIds);
        
        UI.updateProgress(90);
        API.processTransactions(data);
        
        UI.updateProgress(100);
        await CONFIG.sleep(300);
        
        // Lấy summary với filter theo khu vực của user (nếu có)
        const userRegion = (currentUser && currentUser.role === 'user') ? currentUser.region : null;
        const summary = InventoryManager.getSummary(userRegion);
        
        UI.displayResults(summary);
        
    } catch (err) {
        console.error(err);
        UI.showError(err.message);
    } finally {
        UI.showLoading(false);
        UI.elements.fetchBtn.disabled = false;
    }
}

// Khởi tạo
document.addEventListener('DOMContentLoaded', function() {
    UI.init();
    UI.elements.fetchBtn.onclick = fetchAndCalculate;
});