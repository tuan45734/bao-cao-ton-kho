// Cấu hình API
const CONFIG = {
    AUTH_TOKEN: 'Basic NjlhZTZlNmM4YTY0NjVmNDFlNTNhZmI0OjFuYzFnc3J1N2p2Ym10eTdncGV5NWk=',
    PAGE_SIZE: 1000, // Mỗi trang 1000 bản ghi
    
    // Cấu hình retry
    RETRY: {
        MAX_RETRIES: 3,           // Số lần thử lại tối đa
        DELAY_BETWEEN_PAGES: 1000,  // 1 giây giữa các trang
        DELAY_ON_429: 3000,        // 3 giây nếu bị 429
        DELAY_ON_ERROR: 5000       // 5 giây nếu lỗi mạng
    },
    
    // Lấy ngày đầu tháng và cuối tháng hiện tại
    getDateRange: function() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        
        // Ngày đầu tháng
        const firstDay = new Date(year, month - 1, 1);
        // Ngày cuối tháng
        const lastDay = new Date(year, month, 0);
        
        const formatDate = (date) => {
            const d = date.getDate();
            const m = date.getMonth() + 1;
            const y = date.getFullYear();
            return `${d.toString().padStart(2, '0')}/${m.toString().padStart(2, '0')}/${y}`;
        };
        
        return {
            tu_ngay: formatDate(firstDay),
            den_ngay: formatDate(lastDay),
            display: `${formatDate(firstDay)} - ${formatDate(lastDay)}`
        };
    },
    
    // Tạo URL cho từng trang
    getApiUrl: function(pageNumber = 1) {
        const range = this.getDateRange();
        return `https://openapi.mobiwork.vn/OpenAPI/V1/Inventory?tu_ngay=${encodeURIComponent(range.tu_ngay)}&den_ngay=${encodeURIComponent(range.den_ngay)}&kieu_ngay=&page_size=${this.PAGE_SIZE}&page_number=${pageNumber}`;
    }
};