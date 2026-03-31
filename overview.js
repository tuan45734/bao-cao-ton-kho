// ======================= TAB TỔNG QUAN =======================
const Overview = {
    statsElement: null,
    chartElement: null,
    categoryChartElement: null,
    topNPPChartElement: null,
    bottomNPPChartElement: null,
    topImportCardsElement: null,
    
    init: function() {
        this.statsElement = document.getElementById('statsOverview');
        this.chartElement = document.getElementById('chartContainer');
        this.categoryChartElement = document.getElementById('categoryChartContainer');
        this.topNPPChartElement = document.getElementById('topNPPChartContainer');
        this.bottomNPPChartElement = document.getElementById('bottomNPPChartContainer');
        this.topImportCardsElement = document.getElementById('topImportCardsContainer');
    },
    
    formatNumber: function(num) {
        // Format số nguyên, không có phần thập phân
        return Math.round(num).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    },
    
    formatCurrency: function(num) {
        // Format tiền tệ, không có phần thập phân
        return Math.round(num).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
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
    
    getCategorySummaryForNPP: function(products) {
        const categorySummary = {
            'Chân Gà': { quantity: 0, value: 0, products: [] },
            'Bim Quẩy': { quantity: 0, value: 0, products: [] },
            'Hàng Ướt': { quantity: 0, value: 0, products: [] },
            'Cá Cơm': { quantity: 0, value: 0, products: [] },
            'Khác': { quantity: 0, value: 0, products: [] }
        };
        
        for (const product of products) {
            const category = this.getNganhHang(product.ten_sp);
            categorySummary[category].quantity += product.so_luong;
            categorySummary[category].value += product.thanh_tien;
            categorySummary[category].products.push({
                ma_sp: product.ma_sp,
                ten_sp: product.ten_sp,
                so_luong: product.so_luong,
                thanh_tien: product.thanh_tien
            });
        }
        
        for (const category of Object.keys(categorySummary)) {
            categorySummary[category].products = this.mergeProductsByCode(categorySummary[category].products);
        }
        
        return categorySummary;
    },
    
    createNPPTooltipHTML: function(nppName, categorySummary, totalValue, totalQuantity) {
        let html = `<div class="tooltip-content">
            <div class="tooltip-title">📊 ${nppName}</div>
            <div class="tooltip-subtitle">Tổng: ${this.formatCurrency(totalValue)} VNĐ (${this.formatNumber(totalQuantity)} Thùng)</div>
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
    
   renderTopImportCards: function(topChickenNPP, topBimQuayNPP) {
    if (!this.topImportCardsElement) return;
    
    let html = `
        <div class="top-import-cards">
            <div class="top-import-card">
                <div class="card-header">🍗 NPP tồn Chân Gà nhiều nhất</div>
                <div class="card-content">
    `;
    
    if (!topChickenNPP || topChickenNPP.length === 0) {
        html += `<div class="empty-state">Không có dữ liệu</div>`;
    } else {
        for (let i = 0; i < Math.min(topChickenNPP.length, 5); i++) {
            const npp = topChickenNPP[i];
            const percent = i === 0 ? 100 : (npp.value / topChickenNPP[0].value) * 100;
            const region = getRegionByNPP(npp.npp);
            const displayName = region ? `${npp.npp} - ${region}` : npp.npp;
            
            html += `
                <div class="npp-rank-item">
                    <div class="rank-number">${i + 1}</div>
                    <div class="npp-info">
                        <div class="npp-name">${displayName}</div>
                        <div class="npp-value">${this.formatCurrency(npp.value)} VNĐ</div>
                        <div class="npp-quantity">(${this.formatNumber(npp.quantity)} Thùng)</div>
                        <div class="progress-bar-rank">
                            <div class="progress-fill" style="width: ${percent}%"></div>
                        </div>
                    </div>
                </div>
            `;
        }
    }
    
    html += `
                </div>
            </div>
            <div class="top-import-card">
                <div class="card-header">🍿 NPP tồn Bim Quẩy nhiều nhất</div>
                <div class="card-content">
    `;
    
    if (!topBimQuayNPP || topBimQuayNPP.length === 0) {
        html += `<div class="empty-state">Không có dữ liệu</div>`;
    } else {
        for (let i = 0; i < Math.min(topBimQuayNPP.length, 5); i++) {
            const npp = topBimQuayNPP[i];
            const percent = i === 0 ? 100 : (npp.value / topBimQuayNPP[0].value) * 100;
            const region = getRegionByNPP(npp.npp);
            const displayName = region ? `${npp.npp} - ${region}` : npp.npp;
            
            html += `
                <div class="npp-rank-item">
                    <div class="rank-number">${i + 1}</div>
                    <div class="npp-info">
                        <div class="npp-name">${displayName}</div>
                        <div class="npp-value">${this.formatCurrency(npp.value)} VNĐ</div>
                        <div class="npp-quantity">(${this.formatNumber(npp.quantity)} Thùng)</div>
                        <div class="progress-bar-rank">
                            <div class="progress-fill" style="width: ${percent}%"></div>
                        </div>
                    </div>
                </div>
            `;
        }
    }
    
    html += `
                </div>
            </div>
        </div>
    `;
    
    this.topImportCardsElement.innerHTML = html;
},
    
    renderStats: function(totalQuantity, totalValue, totalNPP) {
        if (!this.statsElement) return;
        this.statsElement.innerHTML = `
            <div class="stat-card">
                <div class="label">Tổng số NPP</div>
                <div class="value">${totalNPP}</div>
            </div>
            <div class="stat-card">
                <div class="label">Tổng số lượng tồn</div>
                <div class="value">${this.formatNumber(totalQuantity)} Thùng</div>
            </div>
            <div class="stat-card">
                <div class="label">Tổng giá trị tồn</div>
                <div class="value">${Math.round(totalValue).toLocaleString()} VNĐ</div>
            </div>
        `;
    },
    
    renderTopNPPChart: function(nppSummary) {
    if (!this.topNPPChartElement) return;
    
    const nppArray = Object.entries(nppSummary).map(([name, data]) => ({
        name: name,
        total_value: data.total_value,
        total_quantity: data.total_quantity,
        products: data.products,
        region: getRegionByNPP(name) // Thêm region
    }));
    
    const top10 = nppArray.sort((a, b) => b.total_value - a.total_value).slice(0, 10);
    const maxValue = top10.length > 0 ? top10[0].total_value : 1;
    
    if (top10.length === 0) {
        this.topNPPChartElement.innerHTML = `
            <div class="chart-container">
                <div class="chart-title">🏆 Top 10 NPP tồn kho nhiều nhất (theo giá trị)</div>
                <div class="empty-state">Không có dữ liệu</div>
            </div>
        `;
        return;
    }
    
    let chartHtml = `
        <div class="chart-container">
            <div class="chart-title">🏆 Top 10 NPP tồn kho nhiều nhất (theo giá trị)</div>
            <div class="chart-bars">
    `;
    
    for (const npp of top10) {
        const percent = (npp.total_value / maxValue) * 100;
        const categorySummary = this.getCategorySummaryForNPP(npp.products);
        const tooltipHTML = this.createNPPTooltipHTML(npp.name, categorySummary, npp.total_value, npp.total_quantity);
        
        // Thêm KV vào tên hiển thị
        const displayName = npp.region ? `${npp.name} - ${npp.region}` : npp.name;
        
        chartHtml += `
            <div class="chart-bar-item tooltip-trigger" data-tooltip='${tooltipHTML.replace(/'/g, "\\'").replace(/\n/g, ' ')}'>
                <div class="chart-label">${displayName}</div>
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
    this.topNPPChartElement.innerHTML = chartHtml;
},
    
   renderBottomNPPChart: function(nppSummary) {
    if (!this.bottomNPPChartElement) return;
    
    const nppArray = Object.entries(nppSummary)
        .map(([name, data]) => ({
            name: name,
            total_value: data.total_value,
            total_quantity: data.total_quantity,
            products: data.products,
            region: getRegionByNPP(name) // Thêm region
        }))
        .filter(npp => npp.total_value > 0);
    
    const bottom10 = nppArray.sort((a, b) => a.total_value - b.total_value).slice(0, 10);
    
    if (bottom10.length === 0) {
        this.bottomNPPChartElement.innerHTML = `
            <div class="chart-container">
                <div class="chart-title">📉 Top 10 NPP tồn kho ít nhất (theo giá trị)</div>
                <div class="empty-state">Không có dữ liệu</div>
            </div>
        `;
        return;
    }
    
    const maxValue = bottom10[bottom10.length - 1].total_value;
    
    let chartHtml = `
        <div class="chart-container">
            <div class="chart-title">📉 Top 10 NPP tồn kho ít nhất (theo giá trị)</div>
            <div class="chart-bars">
    `;
    
    for (const npp of bottom10) {
        const percent = (npp.total_value / maxValue) * 100;
        const categorySummary = this.getCategorySummaryForNPP(npp.products);
        const tooltipHTML = this.createNPPTooltipHTML(npp.name, categorySummary, npp.total_value, npp.total_quantity);
        
        // Thêm KV vào tên hiển thị
        const displayName = npp.region ? `${npp.name} - ${npp.region}` : npp.name;
        
        chartHtml += `
            <div class="chart-bar-item tooltip-trigger" data-tooltip='${tooltipHTML.replace(/'/g, "\\'").replace(/\n/g, ' ')}'>
                <div class="chart-label">${displayName}</div>
                <div class="chart-bar-wrapper">
                    <div class="chart-bar chart-bar-bottom" style="width: ${percent}%; background: linear-gradient(90deg, #ffc107, #fd7e14);">
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
    this.bottomNPPChartElement.innerHTML = chartHtml;
},
    
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
                categorySummary[category].products.push({
                    ma_sp: product.ma_sp,
                    ten_sp: product.ten_sp,
                    so_luong: product.so_luong,
                    thanh_tien: product.thanh_tien
                });
            }
        }
        
        for (const category of Object.keys(categorySummary)) {
            categorySummary[category].products = this.mergeProductsByCode(categorySummary[category].products);
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
    
    createProductTooltipHTML: function(categoryName, products) {
    let html = `<div class="tooltip-content product-tooltip">
        <div class="tooltip-title">📦 ${categoryName} - Danh sách sản phẩm (đã gộp mã)</div>
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
    
    update: function(summary, topChickenNPP, topBimQuayNPP) {
        this.renderStats(summary.totalQuantity, summary.totalValue, summary.totalNPP);
        this.renderChart(summary.regionSummary, summary.regionValueSummary, summary.regionProducts);
        
        const categorySummary = this.getCategorySummary(summary.nppSummary);
        this.renderCategoryChart(categorySummary);
        
        this.renderTopNPPChart(summary.nppSummary);
        this.renderBottomNPPChart(summary.nppSummary);
        this.renderTopImportCards(topChickenNPP, topBimQuayNPP);
        
        this.initTooltips();
    },
    
    clear: function() {
        if (this.statsElement) this.statsElement.innerHTML = '';
        if (this.chartElement) this.chartElement.innerHTML = '';
        if (this.categoryChartElement) this.categoryChartElement.innerHTML = '';
        if (this.topNPPChartElement) this.topNPPChartElement.innerHTML = '';
        if (this.bottomNPPChartElement) this.bottomNPPChartElement.innerHTML = '';
        if (this.topImportCardsElement) this.topImportCardsElement.innerHTML = '';
        document.querySelectorAll('.custom-tooltip').forEach(t => t.remove());
    }
};