// ======================= TAB TỔNG QUAN =======================
const Overview = {
    statsElement: null,
    chartElement: null,
    categoryChartElement: null,
    
    init: function() {
        this.statsElement = document.getElementById('statsOverview');
        this.chartElement = document.getElementById('chartContainer');
        this.categoryChartElement = document.getElementById('categoryChartContainer');
    },
    
    formatNumber: function(num) {
        return num.toLocaleString(undefined, { minimumFractionDigits: 3, maximumFractionDigits: 3 });
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
    
    // Tính tổng theo ngành hàng toàn bộ
    getCategorySummary: function(allProducts) {
        const categorySummary = {
            'Chân Gà': { quantity: 0, value: 0, products: [] },
            'Bim Quẩy': { quantity: 0, value: 0, products: [] },
            'Hàng Ướt': { quantity: 0, value: 0, products: [] },
            'Cá Cơm': { quantity: 0, value: 0, products: [] },
            'Khác': { quantity: 0, value: 0, products: [] }
        };
        
        for (const [npp, data] of Object.entries(allProducts)) {
            for (const product of data.products) {
                const category = this.getNganhHang(product.ten_sp);
                categorySummary[category].quantity += product.so_luong;
                categorySummary[category].value += product.thanh_tien;
                categorySummary[category].products.push(product);
            }
        }
        
        return categorySummary;
    },
    
    getCategorySummaryByRegion: function(regionNPPs, allProducts) {
        const categorySummary = {
            'Chân Gà': { quantity: 0, value: 0 },
            'Bim Quẩy': { quantity: 0, value: 0 },
            'Hàng Ướt': { quantity: 0, value: 0 },
            'Cá Cơm': { quantity: 0, value: 0 },
            'Khác': { quantity: 0, value: 0 }
        };
        
        for (const npp in regionNPPs) {
            const products = regionNPPs[npp] || [];
            for (const product of products) {
                const category = this.getNganhHang(product.ten_sp);
                categorySummary[category].quantity += product.so_luong;
                categorySummary[category].value += product.thanh_tien;
            }
        }
        
        return categorySummary;
    },
    
    createTooltipHTML: function(regionName, categorySummary) {
        let html = `<div class="tooltip-content">
            <div class="tooltip-title">📊 ${regionName} - Phân bố theo ngành hàng</div>
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
    
    // Tạo tooltip cho ngành hàng (hiển thị sản phẩm)
    createProductTooltipHTML: function(categoryName, products) {
        let html = `<div class="tooltip-content product-tooltip">
            <div class="tooltip-title">📦 ${categoryName} - Danh sách sản phẩm</div>
            <div class="tooltip-table">
                <div class="tooltip-header">
                    <span>Mã SP</span>
                    <span>Tên sản phẩm</span>
                    <span>Số lượng</span>
                    <span>Giá trị</span>
                </div>`;
        
        // Giới hạn hiển thị tối đa 10 sản phẩm để tooltip không quá dài
        const displayProducts = products.slice(0, 15);
        for (const product of displayProducts) {
            html += `
                <div class="tooltip-row product-row">
                    <span class="product-code">${product.ma_sp}</span>
                    <span class="product-name">${product.ten_sp || '-'}</span>
                    <span>${this.formatNumber(product.so_luong)}</span>
                    <span>${this.formatCurrency(product.thanh_tien)}</span>
                </div>
            `;
        }
        
        if (products.length > 15) {
            html += `<div class="tooltip-more">... và ${products.length - 15} sản phẩm khác</div>`;
        }
        
        html += `</div></div>`;
        return html;
    },
    
    renderStats: function(totalQuantity, totalValue) {
        if (!this.statsElement) return;
        this.statsElement.innerHTML = `
            <div class="stat-card">
                <div class="label">Tổng số lượng tồn</div>
                <div class="value">${this.formatNumber(totalQuantity)} Thùng</div>
            </div>
            <div class="stat-card">
                <div class="label">Tổng giá trị tồn</div>
                <div class="value">${totalValue.toLocaleString()} VNĐ</div>
            </div>
        `;
    },
    
    renderChart: function(regionSummary, regionValueSummary, regionProducts) {
        if (!this.chartElement) return;
        
        const regions = ['KV1', 'KV2', 'KV3', 'KV4', 'KV5', 'KV6'];
        const maxValue = Math.max(...Object.values(regionValueSummary), 1);
        
        let chartHtml = `
            <div class="chart-container">
                <div class="chart-title">📍 Tồn kho theo khu vực (theo giá trị)</div>
                <div class="chart-bars">
        `;
        
        for (const region of regions) {
            const quantity = regionSummary[region] || 0;
            const value = regionValueSummary[region] || 0;
            const percent = (value / maxValue) * 100;
            const products = regionProducts[region] || {};
            
            const categorySummary = this.getCategorySummaryByRegion(products, regionProducts);
            const tooltipHTML = this.createTooltipHTML(region, categorySummary);
            
            chartHtml += `
                <div class="chart-bar-item tooltip-trigger" data-tooltip='${tooltipHTML.replace(/'/g, "\\'").replace(/\n/g, ' ')}'>
                    <div class="chart-label">${region}</div>
                    <div class="chart-bar-wrapper">
                        <div class="chart-bar" style="width: ${percent}%">
                            ${percent > 15 ? this.formatCurrency(value) + ' VNĐ' : ''}
                        </div>
                    </div>
                    <div class="chart-value">
                        <span class="value-money">${this.formatCurrency(value)} VNĐ</span>
                        <span class="value-quantity">(${this.formatNumber(quantity)} Thùng)</span>
                    </div>
                </div>
            `;
        }
        
        chartHtml += `</div></div>`;
        this.chartElement.innerHTML = chartHtml;
    },
    
    renderCategoryChart: function(categorySummary) {
        if (!this.categoryChartElement) return;
        
        const categories = ['Chân Gà', 'Bim Quẩy', 'Hàng Ướt', 'Cá Cơm', 'Khác'];
        const maxValue = Math.max(...Object.values(categorySummary).map(c => c.value), 1);
        
        let chartHtml = `
            <div class="chart-container">
                <div class="chart-title">🏷️ Tồn kho theo ngành hàng (theo giá trị)</div>
                <div class="chart-bars">
        `;
        
        for (const cat of categories) {
            const data = categorySummary[cat];
            const quantity = data.quantity;
            const value = data.value;
            const percent = (value / maxValue) * 100;
            const products = data.products;
            
            const tooltipHTML = this.createProductTooltipHTML(cat, products);
            
            chartHtml += `
                <div class="chart-bar-item tooltip-trigger" data-tooltip='${tooltipHTML.replace(/'/g, "\\'").replace(/\n/g, ' ')}'>
                    <div class="chart-label">${cat}</div>
                    <div class="chart-bar-wrapper">
                        <div class="chart-bar category-${cat.replace(/ /g, '-')}" style="width: ${percent}%">
                            ${percent > 15 ? this.formatCurrency(value) + ' VNĐ' : ''}
                        </div>
                    </div>
                    <div class="chart-value">
                        <span class="value-money">${this.formatCurrency(value)} VNĐ</span>
                        <span class="value-quantity">(${this.formatNumber(quantity)} Thùng)</span>
                    </div>
                </div>
            `;
        }
        
        chartHtml += `</div></div>`;
        this.categoryChartElement.innerHTML = chartHtml;
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
    
    update: function(summary) {
        this.renderStats(summary.totalQuantity, summary.totalValue);
        this.renderChart(summary.regionSummary, summary.regionValueSummary, summary.regionProducts);
        
        // Tính tổng theo ngành hàng
        const categorySummary = this.getCategorySummary(summary.nppSummary);
        this.renderCategoryChart(categorySummary);
    },
    
    clear: function() {
        if (this.statsElement) this.statsElement.innerHTML = '';
        if (this.chartElement) this.chartElement.innerHTML = '';
        if (this.categoryChartElement) this.categoryChartElement.innerHTML = '';
        document.querySelectorAll('.custom-tooltip').forEach(t => t.remove());
    }
};