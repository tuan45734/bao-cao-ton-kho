// Khởi tạo và xử lý chính
document.addEventListener('DOMContentLoaded', () => {
    // Hiển thị kỳ báo cáo
    const range = CONFIG.getDateRange();
    document.querySelector('#periodDisplay span').textContent = range.display;
    
    // Load dữ liệu
    loadData();
    
    // Refresh button
    document.getElementById('refreshBtn').addEventListener('click', loadData);
});

async function loadData() {
    const loading = document.getElementById('loadingOverlay');
    loading.classList.remove('hidden');
    
    // Reset progress
    const progressEl = document.getElementById('loadingProgress');
    const statusEl = document.getElementById('loadingStatus');
    const startTime = new Date();
    
    if (progressEl) progressEl.style.width = '0%';
    if (statusEl) statusEl.textContent = 'Đang khởi tạo...';
    
    try {
        // Ghi log thời gian bắt đầu
        console.log('🚀 Bắt đầu tải dữ liệu lúc:', startTime.toLocaleTimeString());
        
        // Gọi tất cả các trang (tuần tự, delay 1 giây)
        const allData = await API.fetchAllPages();
        
        if (statusEl) statusEl.textContent = 'Đang xử lý dữ liệu...';
        
        // Tính toán tồn kho
        const { inventory } = API.calculateInventory(allData);
        
        // Render giao diện
        renderSummaryCards(inventory);
        ChartManager.renderPieChart(inventory);
        
        const topProducts = API.getTopProducts(inventory, 10);
        ChartManager.renderTopProducts(topProducts);
        
        renderInventoryDetail(inventory);
        
        // Tính thời gian hoàn thành
        const endTime = new Date();
        const duration = ((endTime - startTime) / 1000).toFixed(1);
        
        console.log('✅ Hoàn tất lúc:', endTime.toLocaleTimeString());
        console.log(`⏱️ Tổng thời gian: ${duration} giây`);
        console.log('📦 Tổng số bản ghi:', allData.length);
        
        if (statusEl) statusEl.textContent = `Hoàn tất! ${allData.length} bản ghi (${duration}s)`;
        
    } catch (error) {
        console.error('❌ Lỗi:', error);
        alert('Có lỗi xảy ra khi tải dữ liệu: ' + error.message);
        if (statusEl) statusEl.textContent = 'Lỗi: ' + error.message;
    } finally {
        // Đợi 2 giây để người dùng thấy trạng thái hoàn tất
        setTimeout(() => {
            loading.classList.add('hidden');
        }, 2000);
    }
}

function renderSummaryCards(inventory) {
    const container = document.getElementById('summaryCards');
    const khoArray = Object.values(inventory);
    
    // Tính tổng toàn hệ thống
    const tongTon = khoArray.reduce((sum, k) => sum + (k.tong_ton || 0), 0);
    const tongNhap = khoArray.reduce((sum, k) => sum + (k.tong_nhap || 0), 0);
    const tongXuat = khoArray.reduce((sum, k) => sum + (k.tong_xuat || 0), 0);
    const soKho = khoArray.length;
    
    container.innerHTML = `
        <div class="bg-white shadow-sm border border-slate-100 rounded-2xl p-6">
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-xl">
                    <i class="fas fa-box"></i>
                </div>
                <div>
                    <p class="text-sm text-slate-500">Tổng tồn kho</p>
                    <p class="text-2xl font-bold">${tongTon.toLocaleString('vi-VN')}</p>
                    <p class="text-xs text-slate-400">sản phẩm</p>
                </div>
            </div>
        </div>
        
        <div class="bg-white shadow-sm border border-slate-100 rounded-2xl p-6">
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl">
                    <i class="fas fa-arrow-down"></i>
                </div>
                <div>
                    <p class="text-sm text-slate-500">Tổng nhập</p>
                    <p class="text-2xl font-bold">${(tongNhap / 1e6).toFixed(1)}tr</p>
                    <p class="text-xs text-slate-400">VNĐ</p>
                </div>
            </div>
        </div>
        
        <div class="bg-white shadow-sm border border-slate-100 rounded-2xl p-6">
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center text-xl">
                    <i class="fas fa-arrow-up"></i>
                </div>
                <div>
                    <p class="text-sm text-slate-500">Tổng xuất</p>
                    <p class="text-2xl font-bold">${(tongXuat / 1e6).toFixed(1)}tr</p>
                    <p class="text-xs text-slate-400">VNĐ</p>
                </div>
            </div>
        </div>
        
        <div class="bg-white shadow-sm border border-slate-100 rounded-2xl p-6">
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-xl">
                    <i class="fas fa-warehouse"></i>
                </div>
                <div>
                    <p class="text-sm text-slate-500">Số lượng kho</p>
                    <p class="text-2xl font-bold">${soKho}</p>
                    <p class="text-xs text-slate-400">NPP đang hoạt động</p>
                </div>
            </div>
        </div>
    `;
}

function renderInventoryDetail(inventory) {
    const container = document.getElementById('inventoryDetail');
    let html = '';
    
    // Sắp xếp kho theo tên
    const sortedKho = Object.values(inventory).sort((a, b) => a.kho.localeCompare(b.kho));
    
    sortedKho.forEach(kho => {
        const spArray = Object.values(kho.san_pham)
            .filter(sp => sp.ton_cuoi > 0)
            .sort((a, b) => b.ton_cuoi - a.ton_cuoi);
        
        if (spArray.length === 0) return;
        
        html += `
            <div class="inventory-card bg-slate-50 rounded-xl p-4">
                <div class="flex justify-between items-center mb-3">
                    <h3 class="font-semibold text-indigo-800">${kho.kho}</h3>
                    <span class="text-sm bg-white px-3 py-1 rounded-full">
                        <span class="font-medium">${kho.tong_ton}</span> sản phẩm
                    </span>
                </div>
                
                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="text-xs text-slate-500 border-b border-slate-200">
                                <th class="text-left py-2">Mã SP</th>
                                <th class="text-left">Tên sản phẩm</th>
                                <th class="text-right">ĐVT</th>
                                <th class="text-right">Nhập</th>
                                <th class="text-right">Xuất</th>
                                <th class="text-right">Tồn cuối</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
        `;
        
        spArray.forEach(sp => {
            html += `
                <tr class="hover:bg-white transition">
                    <td class="py-2 font-mono text-xs">${sp.ma_sp || 'N/A'}</td>
                    <td class="py-2">${sp.ten_sp ? sp.ten_sp.split('(')[0] : 'N/A'}</td>
                    <td class="py-2 text-right">${sp.dvt || 'N/A'}</td>
                    <td class="py-2 text-right text-emerald-600">${(sp.nhap || 0).toLocaleString('vi-VN')}</td>
                    <td class="py-2 text-right text-rose-600">${(sp.xuat || 0).toLocaleString('vi-VN')}</td>
                    <td class="py-2 text-right font-medium">${(sp.ton_cuoi || 0).toLocaleString('vi-VN')}</td>
                </tr>
            `;
        });
        
        html += `
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}