// ======================= CẤU HÌNH =======================
const CONFIG = {
    API_URL: 'https://openapi.mobiwork.vn/OpenAPI/V1/Inventory',
    AUTH_TOKEN: 'Basic NjlhZTZlNmM4YTY0NjVmNDFlNTNhZmI0OjFuYzFnc3J1N2p2Ym10eTdncGV5NWk=',
    DELAY_MS: 1000,
    
    EXCLUDED_PRODUCTS: ['HH00101_T01_1'],
    EXCLUDED_WAREHOUSES: ['Kho chính'],
    
    CONVERSION_RATES: {
        "HH00029": 200, "HH00033": 200, "HH00015": 120, "HH00100": 40,
        "HH00062": 60, "HH00073": 60, "HH00072": 60, "HH00075": 60,
        "HH00082": 120, "HH00081": 120, "HH00071": 120, "HH00101": 120,
        "HH00069": 120, "HH00065": 120, "HH00063": 120, "HH00067": 120,
        "HH00058": 120, "HH00057": 120, "HH00056": 120, "HH00059": 120,
        "HH00055": 120, "HH00019": 200, "HH00083": 200, "HH00077": 300,
        "HH00079": 300, "HH00074": 300, "HH00078": 300, "HH00080": 300, "HH00099": 40, "HH00105": 100,
        "CCDC0001": 1, "CCDC002": 1
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

// ======================= CHUYỂN ĐỔI ĐƠN VỊ =======================
const UnitConverter = {
    convertToBox: (maSp, quantity, unit) => {
        if (unit === 'Thùng') return quantity;
        const rate = CONFIG.CONVERSION_RATES[maSp];
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
    
    getKey: (npp, ma_sp) => `${npp}|${ma_sp}`,
    
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
        // Duyệt qua tất cả sản phẩm tồn kho trong map
        const nppInventoryMap = new Map(); // key: npp, value: { value, quantity, products }
        
        for (const [key, item] of this.map) {
            // Bỏ qua sản phẩm có số lượng <= 0
            if (item.so_luong <= 0) continue;
            if (CONFIG.isExcludedWarehouse(item.npp)) continue;
            
            // Lấy ngành hàng của sản phẩm
            const productCategory = Overview.getNganhHang(item.ten_sp);
            
            // Chỉ tính nếu đúng ngành hàng cần tìm
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
        
        // Chuyển thành mảng và sắp xếp theo giá trị giảm dần
        return Array.from(nppInventoryMap.values())
            .sort((a, b) => b.value - a.value)
            .slice(0, limit);
    },
    getTopNPPByCategory: function(categoryName, limit = 5) {
        if (!this.nppImportDetailMap) return [];
        
        const nppData = new Map();
        
        for (const [key, detail] of this.nppImportDetailMap) {
            const [npp, category] = key.split('|');
            if (category === categoryName) {
                if (!nppData.has(npp)) {
                    nppData.set(npp, { value: 0, quantity: 0 });
                }
                const current = nppData.get(npp);
                current.value += detail.value;
                current.quantity += detail.quantity;
                nppData.set(npp, current);
            }
        }
        
        return Array.from(nppData.entries())
            .map(([npp, data]) => ({ npp, ...data }))
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
    
  getSummary: function() {
    const items = [];
    const uniqueNPP = new Set();
    
    for (const [_, item] of this.map) {
        if (Math.abs(item.so_luong) > 0.001 && !CONFIG.isExcludedWarehouse(item.npp)) {
            // KIỂM TRA NPP CÓ THUỘC 6 KV KHÔNG
            const region = getRegionByNPP(item.npp);
            if (!region) continue; // Bỏ qua NPP không thuộc KV nào
            
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
        totalQuantity: items.reduce((s, i) => s + i.so_luong, 0),   // Chỉ tính NPP thuộc KV
        totalValue: items.reduce((s, i) => s + i.thanh_tien, 0)    // Chỉ tính NPP thuộc KV
    };
},
};

// ======================= XỬ LÝ API =======================
const API = {
    fetchAll: async (tu_ngay, den_ngay, onProgress) => {
        let allData = [], page = 1, hasMore = true, total = 0;
        const fmtTu = CONFIG.formatDate(tu_ngay), fmtDen = CONFIG.formatDate(den_ngay);
        
        onProgress(0);
        try {
            const firstUrl = `${CONFIG.API_URL}?tu_ngay=${encodeURIComponent(fmtTu)}&den_ngay=${encodeURIComponent(fmtDen)}&kieu_ngay=%20&page_size=1&page_number=1`;
            const res = await fetch(firstUrl, { headers: { 'Authorization': CONFIG.AUTH_TOKEN } });
            const data = await res.json();
            total = data.total || 0;
        } catch (e) { console.warn(e); }
        
        let fetched = 0;
        
        while (hasMore) {
            const url = `${CONFIG.API_URL}?tu_ngay=${encodeURIComponent(fmtTu)}&den_ngay=${encodeURIComponent(fmtDen)}&kieu_ngay=%20&page_size=1000&page_number=${page}`;
            onProgress(total ? (fetched / total) * 100 : 0);
            
            const res = await fetch(url, { headers: { 'Authorization': CONFIG.AUTH_TOKEN } });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            
            if (data.status && data.data?.length) {
                allData.push(...data.data);
                fetched += data.data.length;
                page++;
                hasMore = data.data.length === 1000;
                if (hasMore) {
                    await CONFIG.sleep(CONFIG.DELAY_MS);
                }
            } else hasMore = false;
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
            error: document.getElementById('error')
        };
        
        this.elements.btnOverview.onclick = () => this.switchTab('overview');
        this.elements.btnDetail.onclick = () => this.switchTab('detail');
        
        Overview.init();
        Detail.init();
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
    // THAY ĐỔI: Lấy top NPP theo TỒN KHO (không phải theo nhập kho)
    const topChickenNPP = InventoryManager.getTopNPPByCategoryFromInventory('Chân Gà', 5);
    const topBimQuayNPP = InventoryManager.getTopNPPByCategoryFromInventory('Bim Quẩy', 5);
    
    Overview.update(summary, topChickenNPP, topBimQuayNPP);
    Detail.update(summary.nppSummary);
    this.switchTab('overview');
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
        
        UI.updateProgress(5);
        const data = await API.fetchAll(tu_ngay, den_ngay, (p) => UI.updateProgress(p));
        
        UI.updateProgress(90);
        API.processTransactions(data);
        
        UI.updateProgress(100);
        await CONFIG.sleep(300);
        
        const summary = InventoryManager.getSummary();
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
    InventoryManager.loadInitial();
});