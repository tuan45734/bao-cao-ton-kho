// ======================= TAB CHI TIẾT =======================
const Detail = {
    regionSelect: null,
    nppSelect: null,
    chartContainer: null,
    categoryContainer: null,
    allNPPData: null,
    nppProductsMap: null,
    
    init: function() {
        this.regionSelect = document.getElementById('regionSelect');
        this.nppSelect = document.getElementById('nppSelect');
        this.chartContainer = document.getElementById('detailChartContainer');
        this.categoryContainer = document.getElementById('detailCategoryContainer');
        
        this.regionSelect.addEventListener('change', () => this.onRegionChange());
        this.nppSelect.addEventListener('change', () => this.onNPPChange());
    },
    
    formatNumber: function(num) {
        let formatted = num.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 3 });
        formatted = formatted.replace(/\.000$/, '');
        return formatted;
    },
    
    formatCurrency: function(num) {
        return num.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    },
    
    getNganhHang: function(tenSanPham) {
        const lowerName = tenSanPham.toLowerCase();
        
        if (lowerName.includes('chân gà')) {
            return 'Chân Gà';
        }
        if (lowerName.includes('bim bim') || lowerName.includes('bim quẩy') || 
            lowerName.includes('đùi gà') || lowerName.includes('hũ bim') || 
            lowerName.includes('hũ đùi')) {
            return 'Bim Quẩy';
        }
        if (lowerName.includes('snack')) {
            return 'Hàng Ướt';
        }
        if (lowerName.includes('cá cơm')) {
            return 'Cá Cơm';
        }
        return 'Khác';
    },
    
    mergeProductsByCode: function(products) {
        const mergedMap = new Map();
        
        for (const product of products) {
            const key = product.ma_sp;
            if (mergedMap.has(key)) {
                const existing = mergedMap.get(key);
                existing.so_luong += product.so_luong;
                existing.thanh_tien += product.thanh_tien;
            } else {
                mergedMap.set(key, {
                    ma_sp: product.ma_sp,
                    ten_sp: product.ten_sp,
                    so_luong: product.so_luong,
                    thanh_tien: product.thanh_tien
                });
            }
        }
        
        return Array.from(mergedMap.values()).sort((a, b) => a.ma_sp.localeCompare(b.ma_sp));
    },
    
    // Tạo tooltip cho biểu đồ NPP theo khu vực (CHỈ HIỂN THỊ NGÀNH HÀNG, không hiển thị sản phẩm chi tiết)
    createRegionTooltipHTML: function(nppName, nppProducts) {
        // Gom nhóm sản phẩm theo ngành hàng (chỉ lấy tổng, không lấy sản phẩm chi tiết)
        const categorySummary = {
            'Chân Gà': { quantity: 0, value: 0 },
            'Bim Quẩy': { quantity: 0, value: 0 },
            'Hàng Ướt': { quantity: 0, value: 0 },
            'Cá Cơm': { quantity: 0, value: 0 },
            'Khác': { quantity: 0, value: 0 }
        };
        
        for (const product of nppProducts) {
            const category = this.getNganhHang(product.ten_sp);
            categorySummary[category].quantity += product.so_luong;
            categorySummary[category].value += product.thanh_tien;
        }
        
        let html = `<div class="tooltip-content">
            <div class="tooltip-title">📊 ${nppName}</div>
            <div class="tooltip-table">
                <div class="tooltip-header">
                    <span>Ngành hàng</span>
                    <span>Số lượng (Thùng)</span>
                    <span>Giá trị (VNĐ)</span>
                </div>`;
        
        const categories = ['Chân Gà', 'Bim Quẩy', 'Hàng Ướt', 'Cá Cơm', 'Khác'];
        for (const cat of categories) {
            const data = categorySummary[cat];
            if (data.quantity > 0 || data.value > 0) {
                html += `
                    <div class="tooltip-row">
                        <span class="category-name">${cat}</span>
                        <span>${this.formatNumber(data.quantity)}</span>
                        <span>${this.formatCurrency(data.value)}</span>
                    </div>
                `;
            }
        }
        
        html += `</div></div>`;
        return html;
    },
    
    // Tạo tooltip cho biểu đồ ngành hàng của NPP (HIỂN THỊ TẤT CẢ SẢN PHẨM, không ẩn bớt)
    createCategoryTooltipHTML: function(categoryName, products) {
        let html = `<div class="tooltip-content product-tooltip">
            <div class="tooltip-title">📦 ${categoryName} - Danh sách sản phẩm</div>
            <div class="tooltip-table">
                <div class="tooltip-header">
                    <span>Mã SP</span>
                    <span>Tên sản phẩm</span>
                    <span>Số lượng</span>
                    <span>Giá trị</span>
                </div>`;
        
        // Hiển thị TẤT CẢ sản phẩm, không giới hạn
        for (const product of products) {
            html += `
                <div class="tooltip-row product-row">
                    <span class="product-code">${product.ma_sp}</span>
                    <span class="product-name">${product.ten_sp || '-'}</span>
                    <span>${this.formatNumber(product.so_luong)}</span>
                    <span>${this.formatCurrency(product.thanh_tien)}</span>
                </div>
            `;
        }
        
        html += `</div></div>`;
        return html;
    },
    
    // Render biểu đồ các NPP trong khu vực
    renderRegionChart: function(nppList, nppProductsMap) {
        if (!this.chartContainer) return;
        
        if (!nppList || nppList.length === 0) {
            this.chartContainer.innerHTML = `
                <div class="chart-container">
                    <div class="chart-title">📍 Tồn kho theo NPP trong khu vực (theo giá trị)</div>
                    <div class="empty-state">Không có dữ liệu</div>
                </div>
            `;
            return;
        }
        
        const maxValue = Math.max(...nppList.map(npp => npp.total_value), 1);
        
        let chartHtml = `
            <div class="chart-container">
                <div class="chart-title">📍 Tồn kho theo NPP trong khu vực (theo giá trị)</div>
                <div class="chart-bars">
        `;
        
        for (const npp of nppList) {
            const percent = (npp.total_value / maxValue) * 100;
            const products = nppProductsMap[npp.name] || [];
            const tooltipHTML = this.createRegionTooltipHTML(npp.name, products);
            
            chartHtml += `
                <div class="chart-bar-item tooltip-trigger" data-tooltip='${tooltipHTML.replace(/'/g, "\\'").replace(/\n/g, ' ')}'>
                    <div class="chart-label">${npp.name}</div>
                    <div class="chart-bar-wrapper">
                        <div class="chart-bar" style="width: ${percent}%">
                            ${percent > 20 ? this.formatCurrency(npp.total_value) + ' VNĐ' : ''}
                        </div>
                    </div>
                    <div class="chart-value">
                        <span class="value-money">${this.formatCurrency(npp.total_value)} VNĐ</span>
                        <span class="value-quantity">(${this.formatNumber(npp.total_quantity)} Thùng)</span>
                    </div>
                </div>
            `;
        }
        
        chartHtml += `</div></div>`;
        this.chartContainer.innerHTML = chartHtml;
        this.initTooltips();
    },
    
    // Render biểu đồ ngành hàng của NPP
    renderCategoryChart: function(nppName, nppProducts) {
        if (!this.categoryContainer) return;
        
        if (!nppProducts || nppProducts.length === 0) {
            this.categoryContainer.innerHTML = `
                <div class="chart-container">
                    <div class="chart-title">🏷️ Phân bố theo ngành hàng - ${nppName}</div>
                    <div class="empty-state">Không có dữ liệu</div>
                </div>
            `;
            return;
        }
        
        // Gom nhóm theo ngành hàng
        const categorySummary = {
            'Chân Gà': { quantity: 0, value: 0, products: [] },
            'Bim Quẩy': { quantity: 0, value: 0, products: [] },
            'Hàng Ướt': { quantity: 0, value: 0, products: [] },
            'Cá Cơm': { quantity: 0, value: 0, products: [] },
            'Khác': { quantity: 0, value: 0, products: [] }
        };
        
        for (const product of nppProducts) {
            const category = this.getNganhHang(product.ten_sp);
            categorySummary[category].quantity += product.so_luong;
            categorySummary[category].value += product.thanh_tien;
            categorySummary[category].products.push(product);
        }
        
        // Gộp sản phẩm trùng mã trong từng ngành
        for (const cat of Object.keys(categorySummary)) {
            categorySummary[cat].products = this.mergeProductsByCode(categorySummary[cat].products);
        }
        
        const categories = ['Chân Gà', 'Bim Quẩy', 'Hàng Ướt', 'Cá Cơm', 'Khác'];
        const maxValue = Math.max(...Object.values(categorySummary).map(c => c.value), 1);
        
        let chartHtml = `
            <div class="chart-container">
                <div class="chart-title">🏷️ Phân bố theo ngành hàng - ${nppName}</div>
                <div class="chart-bars">
        `;
        
        for (const cat of categories) {
            const data = categorySummary[cat];
            if (data.quantity === 0 && data.value === 0) continue;
            
            const percent = (data.value / maxValue) * 100;
            const tooltipHTML = this.createCategoryTooltipHTML(cat, data.products);
            
            chartHtml += `
                <div class="chart-bar-item tooltip-trigger" data-tooltip='${tooltipHTML.replace(/'/g, "\\'").replace(/\n/g, ' ')}'>
                    <div class="chart-label">${cat}</div>
                    <div class="chart-bar-wrapper">
                        <div class="chart-bar category-${cat.replace(/ /g, '-')}" style="width: ${percent}%">
                            ${percent > 15 ? this.formatCurrency(data.value) + ' VNĐ' : ''}
                        </div>
                    </div>
                    <div class="chart-value">
                        <span class="value-money">${this.formatCurrency(data.value)} VNĐ</span>
                        <span class="value-quantity">(${this.formatNumber(data.quantity)} Thùng)</span>
                    </div>
                </div>
            `;
        }
        
        chartHtml += `</div></div>`;
        this.categoryContainer.innerHTML = chartHtml;
        this.initTooltips();
    },
    
    initTooltips: function() {
        const triggers = document.querySelectorAll('.tooltip-trigger');
        
        for (const trigger of triggers) {
            let tooltipElement = null;
            let hideTimeout = null;
            
            const showTooltip = (e) => {
                if (hideTimeout) clearTimeout(hideTimeout);
                
                if (tooltipElement) {
                    tooltipElement.remove();
                    tooltipElement = null;
                }
                
                const tooltipHTML = trigger.getAttribute('data-tooltip');
                if (!tooltipHTML) return;
                
                tooltipElement = document.createElement('div');
                tooltipElement.className = 'custom-tooltip';
                tooltipElement.innerHTML = tooltipHTML;
                document.body.appendChild(tooltipElement);
                
                const rect = trigger.getBoundingClientRect();
                const tooltipRect = tooltipElement.getBoundingClientRect();
                
                let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
                let top = rect.top - tooltipRect.height - 10;
                
                if (left < 10) left = 10;
                if (left + tooltipRect.width > window.innerWidth - 10) {
                    left = window.innerWidth - tooltipRect.width - 10;
                }
                if (top < 10) {
                    top = rect.bottom + 10;
                }
                
                tooltipElement.style.left = `${left}px`;
                tooltipElement.style.top = `${top}px`;
                tooltipElement.style.opacity = '1';
            };
            
            const hideTooltip = () => {
                hideTimeout = setTimeout(() => {
                    if (tooltipElement) {
                        tooltipElement.remove();
                        tooltipElement = null;
                    }
                }, 200);
            };
            
            trigger.addEventListener('mouseenter', showTooltip);
            trigger.addEventListener('mouseleave', hideTooltip);
        }
    },
    
    onRegionChange: function() {
        const region = this.regionSelect.value;
        
        if (!region) {
            this.nppSelect.innerHTML = '<option value="">-- Chọn khu vực trước --</option>';
            this.nppSelect.disabled = true;
            this.chartContainer.innerHTML = '';
            this.categoryContainer.innerHTML = '';
            return;
        }
        
        // Lấy danh sách NPP trong khu vực
        const nppInRegion = [];
        const nppProductsMap = {};
        
        for (const [npp, data] of Object.entries(this.allNPPData)) {
            const nppRegion = getRegionByNPP(npp);
            if (nppRegion === region) {
                nppInRegion.push({
                    name: npp,
                    total_value: data.total_value,
                    total_quantity: data.total_quantity
                });
                nppProductsMap[npp] = data.products;
            }
        }
        
        // Sắp xếp theo giá trị giảm dần
        nppInRegion.sort((a, b) => b.total_value - a.total_value);
        
        // Cập nhật combobox NPP
        let nppOptions = '<option value="">-- Chọn NPP --</option>';
        for (const npp of nppInRegion) {
            nppOptions += `<option value="${npp.name}">${npp.name}</option>`;
        }
        this.nppSelect.innerHTML = nppOptions;
        this.nppSelect.disabled = false;
        
        // Render biểu đồ NPP trong khu vực
        this.renderRegionChart(nppInRegion, nppProductsMap);
        
        // Reset biểu đồ ngành hàng
        this.categoryContainer.innerHTML = '';
    },
    
    onNPPChange: function() {
        const nppName = this.nppSelect.value;
        
        if (!nppName) {
            this.categoryContainer.innerHTML = '';
            return;
        }
        
        // Lấy sản phẩm của NPP
        const nppData = this.allNPPData[nppName];
        if (nppData && nppData.products) {
            this.renderCategoryChart(nppName, nppData.products);
        } else {
            this.categoryContainer.innerHTML = `
                <div class="chart-container">
                    <div class="chart-title">🏷️ Phân bố theo ngành hàng - ${nppName}</div>
                    <div class="empty-state">Không có dữ liệu</div>
                </div>
            `;
        }
    },
    
    update: function(nppSummary) {
        this.allNPPData = nppSummary;
        
        // Reset các combobox
        this.regionSelect.value = '';
        this.nppSelect.innerHTML = '<option value="">-- Chọn khu vực trước --</option>';
        this.nppSelect.disabled = true;
        this.chartContainer.innerHTML = '';
        this.categoryContainer.innerHTML = '';
    },
    
    clear: function() {
        this.allNPPData = null;
        this.regionSelect.value = '';
        this.nppSelect.innerHTML = '<option value="">-- Chọn khu vực trước --</option>';
        this.nppSelect.disabled = true;
        this.chartContainer.innerHTML = '';
        this.categoryContainer.innerHTML = '';
    }
};