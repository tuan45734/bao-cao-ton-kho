// Quản lý biểu đồ
const ChartManager = {
    pieChart: null,
    
    // Vẽ biểu đồ tròn tỷ lệ tồn kho theo NPP
    renderPieChart(inventory) {
        const ctx = document.getElementById('inventoryPieChart').getContext('2d');
        
        if (this.pieChart) {
            this.pieChart.destroy();
        }
        
        const khoData = Object.values(inventory).map(kho => ({
            label: kho.kho,
            value: kho.tong_ton
        })).filter(item => item.value > 0);
        
        this.pieChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: khoData.map(d => d.label),
                datasets: [{
                    data: khoData.map(d => d.value),
                    backgroundColor: [
                        '#4f46e5', '#f97316', '#10b981', '#ef4444', '#8b5cf6',
                        '#ec4899', '#14b8a6', '#f59e0b', '#6366f1', '#6b7280'
                    ],
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            boxWidth: 12,
                            padding: 15,
                            font: { size: 11 }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: (context) => {
                                const value = context.raw;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = ((value / total) * 100).toFixed(1);
                                return `${context.label}: ${value.toLocaleString('vi-VN')} (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    },
    
    // Render top sản phẩm dạng list
    renderTopProducts(products) {
        const container = document.getElementById('topProductsList');
        if (!container) return;
        
        let html = '<div class="space-y-2">';
        products.forEach((product, index) => {
            const percentage = (product.ton_cuoi / products[0].ton_cuoi * 100).toFixed(1);
            html += `
                <div class="product-item p-3 rounded-lg border border-slate-100 bg-white hover:bg-slate-50 transition">
                    <div class="flex justify-between items-start">
                        <div class="flex-1">
                            <div class="font-medium text-sm">${index + 1}. ${product.ten_sp.split('(')[0]}</div>
                            <div class="text-xs text-slate-500 mt-1">${product.kho} | ĐVT: ${product.dvt}</div>
                        </div>
                        <div class="text-right">
                            <div class="font-bold text-indigo-600">${product.ton_cuoi.toLocaleString('vi-VN')}</div>
                            <div class="text-xs text-slate-400">${percentage}%</div>
                        </div>
                    </div>
                    <div class="w-full bg-slate-100 h-1.5 rounded-full mt-2">
                        <div class="bg-indigo-500 h-1.5 rounded-full" style="width: ${percentage}%"></div>
                    </div>
                </div>
            `;
        });
        html += '</div>';
        
        container.innerHTML = html;
    }
};