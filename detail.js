// ======================= TAB CHI TIẾT =======================
const Detail = {
    statsElement: null,
    resultsElement: null,
    
    init: function() {
        this.statsElement = document.getElementById('statsDetail');
        this.resultsElement = document.getElementById('resultsDetail');
    },
    
    formatNumber: function(num) {
        return num.toLocaleString(undefined, { minimumFractionDigits: 3, maximumFractionDigits: 3 });
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
    
    renderTable: function(nppSummary) {
        if (!this.resultsElement) return;
        
        let html = `
            <div class="results">
                <table>
                    <thead>
                        <tr>
                            <th>STT</th><th>Nhà phân phối (NPP)</th><th>Mã sản phẩm</th><th>Tên sản phẩm</th><th>Số lượng tồn (Thùng)</th><th>Thành tiền (VNĐ)</th>
                        </tr>
                    </thead>
                    <tbody>
        `;
        
        let stt = 1;
        const sortedNPP = Object.entries(nppSummary).sort((a, b) => a[0].localeCompare(b[0]));
        
        for (const [name, data] of sortedNPP) {
            data.products.sort((a, b) => a.ma_sp.localeCompare(b.ma_sp));
            for (const p of data.products) {
                html += `
                    <tr>
                        <td style="text-align:center">${stt++}</td>
                        <td class="npp-name">${p.npp}</td>
                        <td>${p.ma_sp}</td>
                        <td>${p.ten_sp || '-'}</td>
                        <td>${this.formatNumber(p.so_luong)}</td>
                        <td class="total-money">${p.thanh_tien.toLocaleString()} VNĐ</td>
                    </tr>
                `;
            }
            html += `
                <tr style="background:#f0f0f0;font-weight:bold;">
                    <td colspan="4" style="text-align:right;">Tổng cộng (${name}):</td>
                    <td>${this.formatNumber(data.total_quantity)} Thùng</td>
                    <td class="total-money">${data.total_value.toLocaleString()} VNĐ</td>
                </tr>
            `;
        }
        html += '</tbody></table></div>';
        
        this.resultsElement.innerHTML = html;
    },
    
    update: function(summary) {
        this.renderStats(summary.totalQuantity, summary.totalValue);
        this.renderTable(summary.nppSummary);
    },
    
    clear: function() {
        if (this.statsElement) this.statsElement.innerHTML = '';
        if (this.resultsElement) this.resultsElement.innerHTML = '';
    }
};