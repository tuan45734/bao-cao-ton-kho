// ======================= DỮ LIỆU TỒN ĐẦU KỲ =======================
const OPENING_STOCK_DATA = [
 {
   "npp": "NPP Anh Minh HT",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.09,
   "thanh_tien": 127604
 },
 {
   "npp": "NPP Anh Minh HT",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.01,
   "thanh_tien": 1387
 },
 {
   "npp": "NPP Anh Minh HT",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.7,
   "thanh_tien": 1431541
 },
 {
   "npp": "NPP Anh Minh HT",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.12,
   "thanh_tien": 2210400
 },
 {
   "npp": "NPP Anh Minh HT",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.83,
   "thanh_tien": 2088000
 },
 {
   "npp": "NPP Anh Minh HT",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 47.67,
   "thanh_tien": 20592000
 },
 {
   "npp": "NPP Anh Minh HT",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 80,
   "thanh_tien": 34560000
 },
 {
   "npp": "NPP Anh Minh HT",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.04,
   "thanh_tien": 18
 },
 {
   "npp": "NPP Anh Minh HT",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 15.08,
   "thanh_tien": 6516000
 },
 {
   "npp": "NPP Anh Minh HT",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.16,
   "thanh_tien": 684
 },
 {
   "npp": "NPP Anh Minh HT",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10,
   "thanh_tien": 4320000
 },
 {
   "npp": "NPP Anh Minh HT",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10,
   "thanh_tien": 4320000
 },
 {
   "npp": "NPP Anh Minh HT",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.08,
   "thanh_tien": 36
 },
 {
   "npp": "NPP Anh Minh HT",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.02,
   "thanh_tien": 4327200
 },
 {
   "npp": "NPP Anh Minh HT",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 15,
   "thanh_tien": 6480000
 },
 {
   "npp": "NPP Anh Minh HT",
   "ma_sp": "HH00083",
   "ten_sp": "Cá cơm ngon ngọt bà Tuyết 18g (18g/gói *200gói/lốc)",
   "ma_dvt": "Thùng",
   "so_luong": 0.24,
   "thanh_tien": 18767
 },
 {
   "npp": "NPP Anh Minh HT",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 41.52,
   "thanh_tien": 17935200
 },
 {
   "npp": "NPP Anh Minh HT",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 14,
   "thanh_tien": 6048000
 },
 {
   "npp": "NPP Anh Minh HT",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 31.65,
   "thanh_tien": 13671360
 },
 {
   "npp": "NPP Anh Minh HT",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 15.28,
   "thanh_tien": 6600960
 },
 {
   "npp": "NPP Anh Minh HT",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 53.44,
   "thanh_tien": 23086080
 },
 {
   "npp": "NPP Anh Minh HT",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 83,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Anh Đức 1",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3,
   "thanh_tien": 4161000
 },
 {
   "npp": "NPP Anh Đức 1",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.86,
   "thanh_tien": 10901820
 },
 {
   "npp": "NPP Anh Đức 1",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 22.02,
   "thanh_tien": 18545048
 },
 {
   "npp": "NPP Anh Đức 1",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12,
   "thanh_tien": 5184000
 },
 {
   "npp": "NPP Anh Đức 1",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 18.43,
   "thanh_tien": 7963200
 },
 {
   "npp": "NPP Anh Đức 1",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 16,
   "thanh_tien": 6912000
 },
 {
   "npp": "NPP Anh Đức 1",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 14,
   "thanh_tien": 6048000
 },
 {
   "npp": "NPP Anh Đức 1",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.92,
   "thanh_tien": 5580000
 },
 {
   "npp": "NPP Anh Đức 1",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.17,
   "thanh_tien": 5256000
 },
 {
   "npp": "NPP Anh Đức 1",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.83,
   "thanh_tien": 1224000
 },
 {
   "npp": "NPP Anh Đức 1",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.17,
   "thanh_tien": 3528000
 },
 {
   "npp": "NPP Anh Đức 1",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.5,
   "thanh_tien": 5400000
 },
 {
   "npp": "NPP Anh Đức 1",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12,
   "thanh_tien": 5184000
 },
 {
   "npp": "NPP Anh Đức 1",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6,
   "thanh_tien": 2592000
 },
 {
   "npp": "NPP Anh Đức 1",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.5,
   "thanh_tien": 3240000
 },
 {
   "npp": "NPP Anh Đức 1",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3,
   "thanh_tien": 1296000
 },
 {
   "npp": "NPP Anh Đức 1",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3,
   "thanh_tien": 1296000
 },
 {
   "npp": "NPP Anh Đức 1",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.1,
   "thanh_tien": 432
 },
 {
   "npp": "NPP Anh Đức 1",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2,
   "thanh_tien": 864
 },
 {
   "npp": "NPP Anh Đức 1",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 1,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Anh Đức 1",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 100,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Bảo Cường",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 18.4,
   "thanh_tien": 25520800
 },
 {
   "npp": "NPP Bảo Cường",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 23.31,
   "thanh_tien": 19625623
 },
 {
   "npp": "NPP Bảo Cường",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 18.53,
   "thanh_tien": 8006400
 },
 {
   "npp": "NPP Bảo Cường",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 24.2,
   "thanh_tien": 10454400
 },
 {
   "npp": "NPP Bảo Cường",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 26.23,
   "thanh_tien": 11332800
 },
 {
   "npp": "NPP Bảo Cường",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 11.8,
   "thanh_tien": 5097600
 },
 {
   "npp": "NPP Bảo Cường",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 34.54,
   "thanh_tien": 14922000
 },
 {
   "npp": "NPP Bảo Cường",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 28.88,
   "thanh_tien": 12477600
 },
 {
   "npp": "NPP Bảo Cường",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.17,
   "thanh_tien": 3960000
 },
 {
   "npp": "NPP Bảo Cường",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.33,
   "thanh_tien": 3600000
 },
 {
   "npp": "NPP Bảo Cường",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.74,
   "thanh_tien": 2912400
 },
 {
   "npp": "NPP Bảo Cường",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.08,
   "thanh_tien": 2196000
 },
 {
   "npp": "NPP Bảo Cường",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.5,
   "thanh_tien": 1080000
 },
 {
   "npp": "NPP Bảo Cường",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.92,
   "thanh_tien": 828
 },
 {
   "npp": "NPP Bảo Cường",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.92,
   "thanh_tien": 828
 },
 {
   "npp": "NPP Bảo Cường",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.67,
   "thanh_tien": 1152000
 },
 {
   "npp": "NPP Bảo Cường",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.79,
   "thanh_tien": 774
 },
 {
   "npp": "NPP Bảo Cường",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 17.17,
   "thanh_tien": 7417440
 },
 {
   "npp": "NPP Bảo Cường",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 14.7,
   "thanh_tien": 6351840
 },
 {
   "npp": "NPP Bảo Cường",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.7,
   "thanh_tien": 3759840
 },
 {
   "npp": "NPP Bảo Cường",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 14.7,
   "thanh_tien": 6350400
 },
 {
   "npp": "NPP Bảo Cường",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 16.44,
   "thanh_tien": 7102080
 },
 {
   "npp": "NPP Bảo Cường",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 128,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Bảo Cường",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 119,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Bảo Lâm",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0,
   "thanh_tien": 2799
 },
 {
   "npp": "NPP Bảo Lâm",
   "ma_sp": "HH00100",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*120 gói/thùng kèm sốt",
   "ma_dvt": "Thùng",
   "so_luong": 9,
   "thanh_tien": 8190000
 },
 {
   "npp": "NPP Bảo Lâm",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 11.34,
   "thanh_tien": 4897440
 },
 {
   "npp": "NPP Bảo Lâm",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.95,
   "thanh_tien": 4730400
 },
 {
   "npp": "NPP Bảo Lâm",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 62.45,
   "thanh_tien": 26979840
 },
 {
   "npp": "NPP Bảo Lâm",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 14.42,
   "thanh_tien": 6228000
 },
 {
   "npp": "NPP Bảo Lâm",
   "ma_sp": "HH00082",
   "ten_sp": "Bim bim tăm cay lạc hồng vr1 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0,
   "thanh_tien": 144
 },
 {
   "npp": "NPP Bảo Lâm",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 130.76,
   "thanh_tien": 56486160
 },
 {
   "npp": "NPP Bảo Lâm",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 32.69,
   "thanh_tien": 14120640
 },
 {
   "npp": "NPP Bảo Lâm",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 20.75,
   "thanh_tien": 8965440
 },
 {
   "npp": "NPP Bảo Lâm",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 20.68,
   "thanh_tien": 8935200
 },
 {
   "npp": "NPP Bảo Lâm",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 19.27,
   "thanh_tien": 8324640
 },
 {
   "npp": "NPP Bảo Lâm",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 21.2,
   "thanh_tien": 9159840
 },
 {
   "npp": "NPP Bảo Lâm",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 20.22,
   "thanh_tien": 8735760
 },
 {
   "npp": "NPP Bảo Lâm",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 20.83,
   "thanh_tien": 8998560
 },
 {
   "npp": "NPP Bảo Lâm",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 22.65,
   "thanh_tien": 9786240
 },
 {
   "npp": "NPP Bảo Lâm",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 20.5,
   "thanh_tien": 8857440
 },
 {
   "npp": "NPP Bảo Lâm",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 19.57,
   "thanh_tien": 8452800
 },
 {
   "npp": "NPP Bảo Lâm",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 18.9,
   "thanh_tien": 8164800
 },
 {
   "npp": "NPP Bảo Lâm",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 11.93,
   "thanh_tien": 5153760
 },
 {
   "npp": "NPP Bảo Lâm",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3,
   "thanh_tien": 1296000
 },
 {
   "npp": "NPP Bảo Lâm",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 121,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Bảo Lâm",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 99,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Châu Anh",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0,
   "thanh_tien": -1
 },
 {
   "npp": "NPP Châu Anh",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 18,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Châu Anh",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 20,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Công Giang",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0,
   "thanh_tien": -14
 },
 {
   "npp": "NPP Công Giang",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.2,
   "thanh_tien": 9504
 },
 {
   "npp": "NPP Công Giang",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.6,
   "thanh_tien": 1555200
 },
 {
   "npp": "NPP Công Giang",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.17,
   "thanh_tien": 72
 },
 {
   "npp": "NPP Công Giang",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.91,
   "thanh_tien": 1256400
 },
 {
   "npp": "NPP Công Giang",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.21,
   "thanh_tien": 1386000
 },
 {
   "npp": "NPP Công Giang",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.48,
   "thanh_tien": 1501200
 },
 {
   "npp": "NPP Công Giang",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.45,
   "thanh_tien": 2354400
 },
 {
   "npp": "NPP Công Giang",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.58,
   "thanh_tien": 1976400
 },
 {
   "npp": "NPP Công Giang",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.73,
   "thanh_tien": 7452
 },
 {
   "npp": "NPP Công Giang",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.82,
   "thanh_tien": 1216800
 },
 {
   "npp": "NPP Công Giang",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.23,
   "thanh_tien": 9648
 },
 {
   "npp": "NPP Công Giang",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.3,
   "thanh_tien": 3153600
 },
 {
   "npp": "NPP Công Giang",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7,
   "thanh_tien": 3024000
 },
 {
   "npp": "NPP Công Giang",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8,
   "thanh_tien": 3456000
 },
 {
   "npp": "NPP Công Giang",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.5,
   "thanh_tien": 3240000
 },
 {
   "npp": "NPP Công Giang",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 102,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Cường Thịnh",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 35.5,
   "thanh_tien": 49238500
 },
 {
   "npp": "NPP Cường Thịnh",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.07,
   "thanh_tien": 8419090
 },
 {
   "npp": "NPP Cường Thịnh",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 43.08,
   "thanh_tien": 36276161
 },
 {
   "npp": "NPP Cường Thịnh",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.83,
   "thanh_tien": 2088000
 },
 {
   "npp": "NPP Cường Thịnh",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 18.53,
   "thanh_tien": 8006400
 },
 {
   "npp": "NPP Cường Thịnh",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.2,
   "thanh_tien": 5270400
 },
 {
   "npp": "NPP Cường Thịnh",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 15.5,
   "thanh_tien": 6696000
 },
 {
   "npp": "NPP Cường Thịnh",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.5,
   "thanh_tien": 648
 },
 {
   "npp": "NPP Cường Thịnh",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 16.42,
   "thanh_tien": 7092000
 },
 {
   "npp": "NPP Cường Thịnh",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.08,
   "thanh_tien": 5220000
 },
 {
   "npp": "NPP Cường Thịnh",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.17,
   "thanh_tien": 1800000
 },
 {
   "npp": "NPP Cường Thịnh",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.35,
   "thanh_tien": 2743200
 },
 {
   "npp": "NPP Cường Thịnh",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.25,
   "thanh_tien": 540
 },
 {
   "npp": "NPP Cường Thịnh",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.83,
   "thanh_tien": 2088000
 },
 {
   "npp": "NPP Cường Thịnh",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 11.67,
   "thanh_tien": 5040000
 },
 {
   "npp": "NPP Cường Thịnh",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.67,
   "thanh_tien": 2880000
 },
 {
   "npp": "NPP Cường Thịnh",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 11.08,
   "thanh_tien": 4788000
 },
 {
   "npp": "NPP Cường Thịnh",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.25,
   "thanh_tien": 2700000
 },
 {
   "npp": "NPP Cường Thịnh",
   "ma_sp": "HH00019",
   "ten_sp": "Cá cơm tê cay bà Tuyết 18g (18g/gói*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 28.65,
   "thanh_tien": 21945900
 },
 {
   "npp": "NPP Cường Thịnh",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.9,
   "thanh_tien": 3412800
 },
 {
   "npp": "NPP Cường Thịnh",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.33,
   "thanh_tien": 3168000
 },
 {
   "npp": "NPP Cường Thịnh",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5,
   "thanh_tien": 2160000
 },
 {
   "npp": "NPP Cường Thịnh",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 17.84,
   "thanh_tien": 7706880
 },
 {
   "npp": "NPP Cường Thịnh",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 16.54,
   "thanh_tien": 7145280
 },
 {
   "npp": "NPP Cường Thịnh",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 18,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Duy Anh",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.01,
   "thanh_tien": 20805
 },
 {
   "npp": "NPP Duy Anh",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.04,
   "thanh_tien": 5548
 },
 {
   "npp": "NPP Duy Anh",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.67,
   "thanh_tien": 561329
 },
 {
   "npp": "NPP Duy Anh",
   "ma_sp": "HH00100",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*120 gói/thùng kèm sốt",
   "ma_dvt": "Thùng",
   "so_luong": 0.1,
   "thanh_tien": 91
 },
 {
   "npp": "NPP Duy Anh",
   "ma_sp": "HH00099",
   "ten_sp": "Chân gà có xương bà Tuyết (40gram*90 gói/thùng) kèm sốt",
   "ma_dvt": "Thùng",
   "so_luong": 0.4,
   "thanh_tien": 276
 },
 {
   "npp": "NPP Duy Anh",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 34.83,
   "thanh_tien": 15048000
 },
 {
   "npp": "NPP Duy Anh",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.42,
   "thanh_tien": 180
 },
 {
   "npp": "NPP Duy Anh",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.52,
   "thanh_tien": 1087200
 },
 {
   "npp": "NPP Duy Anh",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.75,
   "thanh_tien": 1620000
 },
 {
   "npp": "NPP Duy Anh",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.33,
   "thanh_tien": 4032000
 },
 {
   "npp": "NPP Duy Anh",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 17.17,
   "thanh_tien": 7416000
 },
 {
   "npp": "NPP Duy Anh",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 17.25,
   "thanh_tien": 7452000
 },
 {
   "npp": "NPP Duy Anh",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.96,
   "thanh_tien": 2142000
 },
 {
   "npp": "NPP Duy Anh",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.62,
   "thanh_tien": 270
 },
 {
   "npp": "NPP Duy Anh",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.42,
   "thanh_tien": 1044000
 },
 {
   "npp": "NPP Duy Anh",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.06,
   "thanh_tien": 252
 },
 {
   "npp": "NPP Duy Anh",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10,
   "thanh_tien": 4320000
 },
 {
   "npp": "NPP Duy Anh",
   "ma_sp": "HH00019",
   "ten_sp": "Cá cơm tê cay bà Tuyết 18g (18g/gói*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.3,
   "thanh_tien": 7123800
 },
 {
   "npp": "NPP Duy Anh",
   "ma_sp": "HH00083",
   "ten_sp": "Cá cơm ngon ngọt bà Tuyết 18g (18g/gói *200gói/lốc)",
   "ma_dvt": "Thùng",
   "so_luong": 0.05,
   "thanh_tien": 383
 },
 {
   "npp": "NPP Duy Anh",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.5,
   "thanh_tien": 5400000
 },
 {
   "npp": "NPP Duy Anh",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 13.87,
   "thanh_tien": 5990400
 },
 {
   "npp": "NPP Duy Anh",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 14.14,
   "thanh_tien": 6107040
 },
 {
   "npp": "NPP Duy Anh",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12,
   "thanh_tien": 5184000
 },
 {
   "npp": "NPP Duy Anh",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.77,
   "thanh_tien": 5515200
 },
 {
   "npp": "NPP Duy Anh",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 135,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Duy Anh",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 100,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Dũng Béo",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0,
   "thanh_tien": 323
 },
 {
   "npp": "NPP Dũng Béo",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 40.9,
   "thanh_tien": 17668800
 },
 {
   "npp": "NPP Dũng Béo",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.42,
   "thanh_tien": 180
 },
 {
   "npp": "NPP Dũng Béo",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.01,
   "thanh_tien": 36
 },
 {
   "npp": "NPP Dũng Béo",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 57.62,
   "thanh_tien": 24894000
 },
 {
   "npp": "NPP Dũng Béo",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 17.18,
   "thanh_tien": 7419600
 },
 {
   "npp": "NPP Dũng Béo",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 14.61,
   "thanh_tien": 6310800
 },
 {
   "npp": "NPP Dũng Béo",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 26.18,
   "thanh_tien": 11307600
 },
 {
   "npp": "NPP Dũng Béo",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 50.8,
   "thanh_tien": 21945600
 },
 {
   "npp": "NPP Dũng Béo",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 33.63,
   "thanh_tien": 14529600
 },
 {
   "npp": "NPP Dũng Béo",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 22.63,
   "thanh_tien": 9774000
 },
 {
   "npp": "NPP Dũng Béo",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 23.92,
   "thanh_tien": 10332000
 },
 {
   "npp": "NPP Dũng Béo",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 26.52,
   "thanh_tien": 11455200
 },
 {
   "npp": "NPP Dũng Béo",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.54,
   "thanh_tien": 3690000
 },
 {
   "npp": "NPP Dũng Béo",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 43.84,
   "thanh_tien": 18939600
 },
 {
   "npp": "NPP Dũng Béo",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 56.17,
   "thanh_tien": 24265440
 },
 {
   "npp": "NPP Dũng Béo",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.68,
   "thanh_tien": 5476320
 },
 {
   "npp": "NPP Dũng Béo",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 15.48,
   "thanh_tien": 6688800
 },
 {
   "npp": "NPP Dũng Béo",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 17.96,
   "thanh_tien": 7758720
 },
 {
   "npp": "NPP Dũng Béo",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 11.86,
   "thanh_tien": 5122080
 },
 {
   "npp": "NPP Dũng Béo",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 205,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Dũng Béo",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 125,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Dũng Cúc",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.9,
   "thanh_tien": 6803235
 },
 {
   "npp": "NPP Dũng Cúc",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 18.2,
   "thanh_tien": 25243400
 },
 {
   "npp": "NPP Dũng Cúc",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 56.42,
   "thanh_tien": 47509851
 },
 {
   "npp": "NPP Dũng Cúc",
   "ma_sp": "HH00100",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*120 gói/thùng kèm sốt",
   "ma_dvt": "Thùng",
   "so_luong": 11.2,
   "thanh_tien": 10192000
 },
 {
   "npp": "NPP Dũng Cúc",
   "ma_sp": "HH00099",
   "ten_sp": "Chân gà có xương bà Tuyết (40gram*90 gói/thùng) kèm sốt",
   "ma_dvt": "Thùng",
   "so_luong": 0.07,
   "thanh_tien": 46
 },
 {
   "npp": "NPP Dũng Cúc",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.2,
   "thanh_tien": 9504
 },
 {
   "npp": "NPP Dũng Cúc",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 17.83,
   "thanh_tien": 7704000
 },
 {
   "npp": "NPP Dũng Cúc",
   "ma_sp": "HH00082",
   "ten_sp": "Bim bim tăm cay lạc hồng vr1 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.75,
   "thanh_tien": 1188000
 },
 {
   "npp": "NPP Dũng Cúc",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.75,
   "thanh_tien": 2052144
 },
 {
   "npp": "NPP Dũng Cúc",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 42.25,
   "thanh_tien": 18252144
 },
 {
   "npp": "NPP Dũng Cúc",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7,
   "thanh_tien": 3024000
 },
 {
   "npp": "NPP Dũng Cúc",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.42,
   "thanh_tien": 180
 },
 {
   "npp": "NPP Dũng Cúc",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.25,
   "thanh_tien": 108
 },
 {
   "npp": "NPP Dũng Cúc",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.08,
   "thanh_tien": 468
 },
 {
   "npp": "NPP Dũng Cúc",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.17,
   "thanh_tien": 2232000
 },
 {
   "npp": "NPP Dũng Cúc",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 11.67,
   "thanh_tien": 5040000
 },
 {
   "npp": "NPP Dũng Cúc",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.67,
   "thanh_tien": 1584000
 },
 {
   "npp": "NPP Dũng Cúc",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.42,
   "thanh_tien": 2340000
 },
 {
   "npp": "NPP Dũng Cúc",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.75,
   "thanh_tien": 3348000
 },
 {
   "npp": "NPP Dũng Cúc",
   "ma_sp": "HH00019",
   "ten_sp": "Cá cơm tê cay bà Tuyết 18g (18g/gói*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.9,
   "thanh_tien": 1455400
 },
 {
   "npp": "NPP Dũng Cúc",
   "ma_sp": "HH00083",
   "ten_sp": "Cá cơm ngon ngọt bà Tuyết 18g (18g/gói *200gói/lốc)",
   "ma_dvt": "Thùng",
   "so_luong": 2.8,
   "thanh_tien": 2144800
 },
 {
   "npp": "NPP Dũng Cúc",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.3,
   "thanh_tien": 129456
 },
 {
   "npp": "NPP Dũng Cúc",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.8,
   "thanh_tien": 1209456
 },
 {
   "npp": "NPP Dũng Cúc",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.6,
   "thanh_tien": 1987056
 },
 {
   "npp": "NPP Dũng Cúc",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.1,
   "thanh_tien": 4176
 },
 {
   "npp": "NPP Dũng Cúc",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 15,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Dương Minh",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 31.81,
   "thanh_tien": 44113535
 },
 {
   "npp": "NPP Dương Minh",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 78.88,
   "thanh_tien": 109399625
 },
 {
   "npp": "NPP Dương Minh",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.67,
   "thanh_tien": 10665321
 },
 {
   "npp": "NPP Dương Minh",
   "ma_sp": "HH00100",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*120 gói/thùng kèm sốt",
   "ma_dvt": "Thùng",
   "so_luong": 30,
   "thanh_tien": 27300000
 },
 {
   "npp": "NPP Dương Minh",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.62,
   "thanh_tien": 4586400
 },
 {
   "npp": "NPP Dương Minh",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 11.88,
   "thanh_tien": 5133600
 },
 {
   "npp": "NPP Dương Minh",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 41.88,
   "thanh_tien": 18093600
 },
 {
   "npp": "NPP Dương Minh",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7,
   "thanh_tien": 3024000
 },
 {
   "npp": "NPP Dương Minh",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 61.63,
   "thanh_tien": 26622000
 },
 {
   "npp": "NPP Dương Minh",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 16.25,
   "thanh_tien": 7020000
 },
 {
   "npp": "NPP Dương Minh",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.67,
   "thanh_tien": 2016000
 },
 {
   "npp": "NPP Dương Minh",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.72,
   "thanh_tien": 1177200
 },
 {
   "npp": "NPP Dương Minh",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 19.96,
   "thanh_tien": 8622000
 },
 {
   "npp": "NPP Dương Minh",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 22.79,
   "thanh_tien": 9846000
 },
 {
   "npp": "NPP Dương Minh",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.12,
   "thanh_tien": 2646000
 },
 {
   "npp": "NPP Dương Minh",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.17,
   "thanh_tien": 3528000
 },
 {
   "npp": "NPP Dương Minh",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.83,
   "thanh_tien": 3384000
 },
 {
   "npp": "NPP Dương Minh",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.04,
   "thanh_tien": 3906000
 },
 {
   "npp": "NPP Dương Minh",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.29,
   "thanh_tien": 4014000
 },
 {
   "npp": "NPP Dương Minh",
   "ma_sp": "HH00019",
   "ten_sp": "Cá cơm tê cay bà Tuyết 18g (18g/gói*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.5,
   "thanh_tien": 4213000
 },
 {
   "npp": "NPP Dương Minh",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 17.11,
   "thanh_tien": 7391520
 },
 {
   "npp": "NPP Dương Minh",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 24.1,
   "thanh_tien": 10411200
 },
 {
   "npp": "NPP Dương Minh",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 22.96,
   "thanh_tien": 9917280
 },
 {
   "npp": "NPP Dương Minh",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 26.03,
   "thanh_tien": 11244960
 },
 {
   "npp": "NPP Dương Minh",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 23,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Dương Minh",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 15,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Hikoji",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.78,
   "thanh_tien": 2468860
 },
 {
   "npp": "NPP Hikoji",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.87,
   "thanh_tien": 9521755
 },
 {
   "npp": "NPP Hikoji",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.42,
   "thanh_tien": 1195639
 },
 {
   "npp": "NPP Hikoji",
   "ma_sp": "HH00100",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*120 gói/thùng kèm sốt",
   "ma_dvt": "Thùng",
   "so_luong": 0.04,
   "thanh_tien": 364
 },
 {
   "npp": "NPP Hikoji",
   "ma_sp": "HH00099",
   "ten_sp": "Chân gà có xương bà Tuyết (40gram*90 gói/thùng) kèm sốt",
   "ma_dvt": "Thùng",
   "so_luong": 0.07,
   "thanh_tien": 483
 },
 {
   "npp": "NPP Hikoji",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.28,
   "thanh_tien": 4440960
 },
 {
   "npp": "NPP Hikoji",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.1,
   "thanh_tien": 3499200
 },
 {
   "npp": "NPP Hikoji",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 24.88,
   "thanh_tien": 10749600
 },
 {
   "npp": "NPP Hikoji",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.72,
   "thanh_tien": 2901600
 },
 {
   "npp": "NPP Hikoji",
   "ma_sp": "HH00082",
   "ten_sp": "Bim bim tăm cay lạc hồng vr1 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.41,
   "thanh_tien": 1472400
 },
 {
   "npp": "NPP Hikoji",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.55,
   "thanh_tien": 1535760
 },
 {
   "npp": "NPP Hikoji",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.19,
   "thanh_tien": 1811520
 },
 {
   "npp": "NPP Hikoji",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.7,
   "thanh_tien": 3758400
 },
 {
   "npp": "NPP Hikoji",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.91,
   "thanh_tien": 2552400
 },
 {
   "npp": "NPP Hikoji",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.49,
   "thanh_tien": 21024
 },
 {
   "npp": "NPP Hikoji",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 15.52,
   "thanh_tien": 6703200
 },
 {
   "npp": "NPP Hikoji",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 16.49,
   "thanh_tien": 7125480
 },
 {
   "npp": "NPP Hikoji",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.75,
   "thanh_tien": 324
 },
 {
   "npp": "NPP Hikoji",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.58,
   "thanh_tien": 68256
 },
 {
   "npp": "NPP Hikoji",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.33,
   "thanh_tien": 1008000
 },
 {
   "npp": "NPP Hikoji",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.29,
   "thanh_tien": 1420560
 },
 {
   "npp": "NPP Hikoji",
   "ma_sp": "HH00019",
   "ten_sp": "Cá cơm tê cay bà Tuyết 18g (18g/gói*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 11.09,
   "thanh_tien": 8498770
 },
 {
   "npp": "NPP Hikoji",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.33,
   "thanh_tien": 1437120
 },
 {
   "npp": "NPP Hikoji",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.23,
   "thanh_tien": 5281920
 },
 {
   "npp": "NPP Hikoji",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.9,
   "thanh_tien": 2115360
 },
 {
   "npp": "NPP Hikoji",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.67,
   "thanh_tien": 720
 },
 {
   "npp": "NPP Hikoji",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.93,
   "thanh_tien": 1697760
 },
 {
   "npp": "NPP Hikoji",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 213,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Hikoji",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 49,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Hiên Cường",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.06,
   "thanh_tien": 8322
 },
 {
   "npp": "NPP Hiên Cường",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 13.5,
   "thanh_tien": 11367054
 },
 {
   "npp": "NPP Hiên Cường",
   "ma_sp": "HH00100",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*120 gói/thùng kèm sốt",
   "ma_dvt": "Thùng",
   "so_luong": 9.4,
   "thanh_tien": 8554000
 },
 {
   "npp": "NPP Hiên Cường",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.07,
   "thanh_tien": 288
 },
 {
   "npp": "NPP Hiên Cường",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 22.8,
   "thanh_tien": 9849600
 },
 {
   "npp": "NPP Hiên Cường",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.67,
   "thanh_tien": 4176000
 },
 {
   "npp": "NPP Hiên Cường",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 122.67,
   "thanh_tien": 52992000
 },
 {
   "npp": "NPP Hiên Cường",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.08,
   "thanh_tien": 2196000
 },
 {
   "npp": "NPP Hiên Cường",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.33,
   "thanh_tien": 1872000
 },
 {
   "npp": "NPP Hiên Cường",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.33,
   "thanh_tien": 1008000
 },
 {
   "npp": "NPP Hiên Cường",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3,
   "thanh_tien": 1296000
 },
 {
   "npp": "NPP Hiên Cường",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5,
   "thanh_tien": 2160000
 },
 {
   "npp": "NPP Hiên Cường",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.08,
   "thanh_tien": 4356000
 },
 {
   "npp": "NPP Hiên Cường",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.58,
   "thanh_tien": 1116000
 },
 {
   "npp": "NPP Hiên Cường",
   "ma_sp": "HH00019",
   "ten_sp": "Cá cơm tê cay bà Tuyết 18g (18g/gói*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.01,
   "thanh_tien": 1149
 },
 {
   "npp": "NPP Hiên Cường",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.31,
   "thanh_tien": 4452480
 },
 {
   "npp": "NPP Hiên Cường",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 14.4,
   "thanh_tien": 6220800
 },
 {
   "npp": "NPP Hiên Cường",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.4,
   "thanh_tien": 5355360
 },
 {
   "npp": "NPP Hiên Cường",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.45,
   "thanh_tien": 5378400
 },
 {
   "npp": "NPP Hiên Cường",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.1,
   "thanh_tien": 4363200
 },
 {
   "npp": "NPP Hiên Cường",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 13,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Hiên Cường",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 52,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Hoa Việt",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0,
   "thanh_tien": 15
 },
 {
   "npp": "NPP Hoa Việt",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.64,
   "thanh_tien": 1141200
 },
 {
   "npp": "NPP Hoa Việt",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.02,
   "thanh_tien": 72
 },
 {
   "npp": "NPP Hoa Việt",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0,
   "thanh_tien": 144
 },
 {
   "npp": "NPP Hoa Việt",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.02,
   "thanh_tien": 1008
 },
 {
   "npp": "NPP Hoa Việt",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 156,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Hoàng Minh",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.07,
   "thanh_tien": 9709
 },
 {
   "npp": "NPP Hoàng Minh",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.8,
   "thanh_tien": 10818600
 },
 {
   "npp": "NPP Hoàng Minh",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.18,
   "thanh_tien": 154458
 },
 {
   "npp": "NPP Hoàng Minh",
   "ma_sp": "HH00100",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*120 gói/thùng kèm sốt",
   "ma_dvt": "Thùng",
   "so_luong": 0.53,
   "thanh_tien": 47775
 },
 {
   "npp": "NPP Hoàng Minh",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.5,
   "thanh_tien": 2808000
 },
 {
   "npp": "NPP Hoàng Minh",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.1,
   "thanh_tien": 432
 },
 {
   "npp": "NPP Hoàng Minh",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.23,
   "thanh_tien": 1008
 },
 {
   "npp": "NPP Hoàng Minh",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 22.42,
   "thanh_tien": 9684000
 },
 {
   "npp": "NPP Hoàng Minh",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.07,
   "thanh_tien": 288
 },
 {
   "npp": "NPP Hoàng Minh",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 32.99,
   "thanh_tien": 14252400
 },
 {
   "npp": "NPP Hoàng Minh",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.18,
   "thanh_tien": 4399200
 },
 {
   "npp": "NPP Hoàng Minh",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.33,
   "thanh_tien": 2736000
 },
 {
   "npp": "NPP Hoàng Minh",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.35,
   "thanh_tien": 2311200
 },
 {
   "npp": "NPP Hoàng Minh",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.73,
   "thanh_tien": 3769200
 },
 {
   "npp": "NPP Hoàng Minh",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.91,
   "thanh_tien": 2984400
 },
 {
   "npp": "NPP Hoàng Minh",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.33,
   "thanh_tien": 2304000
 },
 {
   "npp": "NPP Hoàng Minh",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.65,
   "thanh_tien": 3304800
 },
 {
   "npp": "NPP Hoàng Minh",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.37,
   "thanh_tien": 2750400
 },
 {
   "npp": "NPP Hoàng Minh",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.58,
   "thanh_tien": 3276000
 },
 {
   "npp": "NPP Hoàng Minh",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 15.92,
   "thanh_tien": 6876000
 },
 {
   "npp": "NPP Hoàng Minh",
   "ma_sp": "HH00019",
   "ten_sp": "Cá cơm tê cay bà Tuyết 18g (18g/gói*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 19.2,
   "thanh_tien": 14707200
 },
 {
   "npp": "NPP Hoàng Minh",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 49.92,
   "thanh_tien": 21565440
 },
 {
   "npp": "NPP Hoàng Minh",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 13.55,
   "thanh_tien": 5852160
 },
 {
   "npp": "NPP Hoàng Minh",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 21.67,
   "thanh_tien": 9362880
 },
 {
   "npp": "NPP Hoàng Minh",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 19.09,
   "thanh_tien": 8246880
 },
 {
   "npp": "NPP Hoàng Minh",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 26.87,
   "thanh_tien": 11606400
 },
 {
   "npp": "NPP Hoàng Minh",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 43,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Hoàng Minh",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 9,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Hoàng Thắng",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.01,
   "thanh_tien": 6948870
 },
 {
   "npp": "NPP Hoàng Thắng",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.85,
   "thanh_tien": 1178950
 },
 {
   "npp": "NPP Hoàng Thắng",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0,
   "thanh_tien": -1
 },
 {
   "npp": "NPP Hoàng Thắng",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.5,
   "thanh_tien": 648
 },
 {
   "npp": "NPP Hoàng Thắng",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4,
   "thanh_tien": 1728000
 },
 {
   "npp": "NPP Hoàng Thắng",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.33,
   "thanh_tien": 3168000
 },
 {
   "npp": "NPP Hoàng Thắng",
   "ma_sp": "HH00082",
   "ten_sp": "Bim bim tăm cay lạc hồng vr1 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.02,
   "thanh_tien": 72
 },
 {
   "npp": "NPP Hoàng Thắng",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.07,
   "thanh_tien": 324
 },
 {
   "npp": "NPP Hoàng Thắng",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.18,
   "thanh_tien": 792
 },
 {
   "npp": "NPP Hoàng Thắng",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.78,
   "thanh_tien": 7704
 },
 {
   "npp": "NPP Hoàng Thắng",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.32,
   "thanh_tien": 1368
 },
 {
   "npp": "NPP Hoàng Thắng",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.08,
   "thanh_tien": 36
 },
 {
   "npp": "NPP Hoàng Thắng",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.02,
   "thanh_tien": 72
 },
 {
   "npp": "NPP Hoàng Thắng",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.09,
   "thanh_tien": 396
 },
 {
   "npp": "NPP Hoàng Thắng",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.08,
   "thanh_tien": 324
 },
 {
   "npp": "NPP Hoàng Thắng",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.17,
   "thanh_tien": 72
 },
 {
   "npp": "NPP Hoàng Thắng",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.01,
   "thanh_tien": 36
 },
 {
   "npp": "NPP Hoàng Thắng",
   "ma_sp": "HH00019",
   "ten_sp": "Cá cơm tê cay bà Tuyết 18g (18g/gói*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.05,
   "thanh_tien": 383
 },
 {
   "npp": "NPP Hoàng Thắng",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.57,
   "thanh_tien": 2404800
 },
 {
   "npp": "NPP Hoàng Thắng",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.1,
   "thanh_tien": 1339200
 },
 {
   "npp": "NPP Hoàng Thắng",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.61,
   "thanh_tien": 26496
 },
 {
   "npp": "NPP Hoàng Thắng",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.4,
   "thanh_tien": 5356800
 },
 {
   "npp": "NPP Hoàng Thắng",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.55,
   "thanh_tien": 3692160
 },
 {
   "npp": "NPP Hoàng Thắng",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 37,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Hoàng Thắng",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 100,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Hà Thanh",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 11.04,
   "thanh_tien": 15312480
 },
 {
   "npp": "NPP Hà Thanh",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0,
   "thanh_tien": 51
 },
 {
   "npp": "NPP Hà Thanh",
   "ma_sp": "HH00082",
   "ten_sp": "Bim bim tăm cay lạc hồng vr1 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.58,
   "thanh_tien": 2844000
 },
 {
   "npp": "NPP Hà Thanh",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 49.77,
   "thanh_tien": 21499200
 },
 {
   "npp": "NPP Hà Thanh",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 21.42,
   "thanh_tien": 9252000
 },
 {
   "npp": "NPP Hà Thanh",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 18.09,
   "thanh_tien": 7815600
 },
 {
   "npp": "NPP Hà Thanh",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.33,
   "thanh_tien": 3600000
 },
 {
   "npp": "NPP Hà Thanh",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.56,
   "thanh_tien": 4561200
 },
 {
   "npp": "NPP Hà Thanh",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 15.54,
   "thanh_tien": 6714000
 },
 {
   "npp": "NPP Hà Thanh",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 27.34,
   "thanh_tien": 11811600
 },
 {
   "npp": "NPP Hà Thanh",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 15.52,
   "thanh_tien": 6703200
 },
 {
   "npp": "NPP Hà Thanh",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 23.74,
   "thanh_tien": 10256400
 },
 {
   "npp": "NPP Hà Thanh",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 17.65,
   "thanh_tien": 7626240
 },
 {
   "npp": "NPP Hà Thanh",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.76,
   "thanh_tien": 4648320
 },
 {
   "npp": "NPP Hà Thanh",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.44,
   "thanh_tien": 3215520
 },
 {
   "npp": "NPP Hà Thanh",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.96,
   "thanh_tien": 4736160
 },
 {
   "npp": "NPP Hà Thanh",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.93,
   "thanh_tien": 4288320
 },
 {
   "npp": "NPP Hà Thanh",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 76,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Hùng Huệ",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.92,
   "thanh_tien": 10985040
 },
 {
   "npp": "NPP Hùng Huệ",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 19,
   "thanh_tien": 26353000
 },
 {
   "npp": "NPP Hùng Huệ",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.17,
   "thanh_tien": 10244373
 },
 {
   "npp": "NPP Hùng Huệ",
   "ma_sp": "HH00100",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*120 gói/thùng kèm sốt",
   "ma_dvt": "Thùng",
   "so_luong": 0.5,
   "thanh_tien": 455
 },
 {
   "npp": "NPP Hùng Huệ",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.7,
   "thanh_tien": 3758400
 },
 {
   "npp": "NPP Hùng Huệ",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.6,
   "thanh_tien": 1555200
 },
 {
   "npp": "NPP Hùng Huệ",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 20.97,
   "thanh_tien": 9057600
 },
 {
   "npp": "NPP Hùng Huệ",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.17,
   "thanh_tien": 3096000
 },
 {
   "npp": "NPP Hùng Huệ",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 31.58,
   "thanh_tien": 13644000
 },
 {
   "npp": "NPP Hùng Huệ",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.42,
   "thanh_tien": 5364000
 },
 {
   "npp": "NPP Hùng Huệ",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7,
   "thanh_tien": 3024000
 },
 {
   "npp": "NPP Hùng Huệ",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.75,
   "thanh_tien": 4212000
 },
 {
   "npp": "NPP Hùng Huệ",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.92,
   "thanh_tien": 4716000
 },
 {
   "npp": "NPP Hùng Huệ",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.42,
   "thanh_tien": 3636000
 },
 {
   "npp": "NPP Hùng Huệ",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.5,
   "thanh_tien": 3672000
 },
 {
   "npp": "NPP Hùng Huệ",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.42,
   "thanh_tien": 5367600
 },
 {
   "npp": "NPP Hùng Huệ",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.83,
   "thanh_tien": 3816000
 },
 {
   "npp": "NPP Hùng Huệ",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.25,
   "thanh_tien": 2268000
 },
 {
   "npp": "NPP Hùng Huệ",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.42,
   "thanh_tien": 3636000
 },
 {
   "npp": "NPP Hùng Huệ",
   "ma_sp": "HH00019",
   "ten_sp": "Cá cơm tê cay bà Tuyết 18g (18g/gói*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12,
   "thanh_tien": 9192000
 },
 {
   "npp": "NPP Hùng Huệ",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 13,
   "thanh_tien": 5616000
 },
 {
   "npp": "NPP Hùng Huệ",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.3,
   "thanh_tien": 1857600
 },
 {
   "npp": "NPP Hùng Huệ",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8,
   "thanh_tien": 3456000
 },
 {
   "npp": "NPP Hùng Huệ",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.7,
   "thanh_tien": 3326400
 },
 {
   "npp": "NPP Hùng Huệ",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.8,
   "thanh_tien": 3369600
 },
 {
   "npp": "NPP Hùng Huệ",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 74,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Hùng Huệ",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 100,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Hưng Thịnh",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0,
   "thanh_tien": 16
 },
 {
   "npp": "NPP Hưng Thịnh",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.7,
   "thanh_tien": 3024
 },
 {
   "npp": "NPP Hưng Thịnh",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.75,
   "thanh_tien": 324
 },
 {
   "npp": "NPP Hưng Thịnh",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.78,
   "thanh_tien": 3384
 },
 {
   "npp": "NPP Hưng Thịnh",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.63,
   "thanh_tien": 7056
 },
 {
   "npp": "NPP Hưng Thịnh",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.27,
   "thanh_tien": 1152
 },
 {
   "npp": "NPP Hưng Thịnh",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 69,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Hưng Thịnh",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 66,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Hải Hằng",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.98,
   "thanh_tien": 11068260
 },
 {
   "npp": "NPP Hải Hằng",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0,
   "thanh_tien": 8
 },
 {
   "npp": "NPP Hải Hằng",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.5,
   "thanh_tien": 648
 },
 {
   "npp": "NPP Hải Hằng",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6,
   "thanh_tien": 2592000
 },
 {
   "npp": "NPP Hải Hằng",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.93,
   "thanh_tien": 1267200
 },
 {
   "npp": "NPP Hải Hằng",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.72,
   "thanh_tien": 3765600
 },
 {
   "npp": "NPP Hải Hằng",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.58,
   "thanh_tien": 1116000
 },
 {
   "npp": "NPP Hải Hằng",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.83,
   "thanh_tien": 5544000
 },
 {
   "npp": "NPP Hải Hằng",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.17,
   "thanh_tien": 3096000
 },
 {
   "npp": "NPP Hải Hằng",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.25,
   "thanh_tien": 2268000
 },
 {
   "npp": "NPP Hải Hằng",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.58,
   "thanh_tien": 1980000
 },
 {
   "npp": "NPP Hải Hằng",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.67,
   "thanh_tien": 3744000
 },
 {
   "npp": "NPP Hải Hằng",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.42,
   "thanh_tien": 2772000
 },
 {
   "npp": "NPP Hải Hằng",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.42,
   "thanh_tien": 2340000
 },
 {
   "npp": "NPP Hải Hằng",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4,
   "thanh_tien": 1728000
 },
 {
   "npp": "NPP Hải Hằng",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.74,
   "thanh_tien": 3344400
 },
 {
   "npp": "NPP Hải Hằng",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.42,
   "thanh_tien": 3204000
 },
 {
   "npp": "NPP Hải Hằng",
   "ma_sp": "HH00019",
   "ten_sp": "Cá cơm tê cay bà Tuyết 18g (18g/gói*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 29.95,
   "thanh_tien": 22941700
 },
 {
   "npp": "NPP Hải Hằng",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.6,
   "thanh_tien": 1987200
 },
 {
   "npp": "NPP Hải Hằng",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.28,
   "thanh_tien": 1847520
 },
 {
   "npp": "NPP Hải Hằng",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.94,
   "thanh_tien": 83664
 },
 {
   "npp": "NPP Hải Hằng",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.59,
   "thanh_tien": 68688
 },
 {
   "npp": "NPP Hải Hằng",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.19,
   "thanh_tien": 8208
 },
 {
   "npp": "NPP Hải Hằng",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 128,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Hải Hằng",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 50,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Linh Trang",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 40.75,
   "thanh_tien": 56520250
 },
 {
   "npp": "NPP Linh Trang",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12,
   "thanh_tien": 16644000
 },
 {
   "npp": "NPP Linh Trang",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 49.5,
   "thanh_tien": 41679011
 },
 {
   "npp": "NPP Linh Trang",
   "ma_sp": "HH00100",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*120 gói/thùng kèm sốt",
   "ma_dvt": "Thùng",
   "so_luong": 12,
   "thanh_tien": 10920000
 },
 {
   "npp": "NPP Linh Trang",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 18.73,
   "thanh_tien": 8092800
 },
 {
   "npp": "NPP Linh Trang",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.73,
   "thanh_tien": 2476800
 },
 {
   "npp": "NPP Linh Trang",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 19.77,
   "thanh_tien": 8539200
 },
 {
   "npp": "NPP Linh Trang",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.25,
   "thanh_tien": 3132000
 },
 {
   "npp": "NPP Linh Trang",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.67,
   "thanh_tien": 2448000
 },
 {
   "npp": "NPP Linh Trang",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 131.69,
   "thanh_tien": 56890800
 },
 {
   "npp": "NPP Linh Trang",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.25,
   "thanh_tien": 972
 },
 {
   "npp": "NPP Linh Trang",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 20,
   "thanh_tien": 8640000
 },
 {
   "npp": "NPP Linh Trang",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 19.5,
   "thanh_tien": 8424000
 },
 {
   "npp": "NPP Linh Trang",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 28.58,
   "thanh_tien": 12344400
 },
 {
   "npp": "NPP Linh Trang",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.17,
   "thanh_tien": 4392000
 },
 {
   "npp": "NPP Linh Trang",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 11.75,
   "thanh_tien": 5076000
 },
 {
   "npp": "NPP Linh Trang",
   "ma_sp": "HH00019",
   "ten_sp": "Cá cơm tê cay bà Tuyết 18g (18g/gói*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.75,
   "thanh_tien": 1340500
 },
 {
   "npp": "NPP Linh Trang",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.38,
   "thanh_tien": 1656
 },
 {
   "npp": "NPP Linh Trang",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 14.8,
   "thanh_tien": 6393600
 },
 {
   "npp": "NPP Linh Trang",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.43,
   "thanh_tien": 2347200
 },
 {
   "npp": "NPP Linh Trang",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 14.8,
   "thanh_tien": 6393600
 },
 {
   "npp": "NPP Linh Trang",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 148,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Linh Trang",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 47,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Long Châm",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.48,
   "thanh_tien": 10374760
 },
 {
   "npp": "NPP Long Châm",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0,
   "thanh_tien": -2
 },
 {
   "npp": "NPP Long Châm",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 14.28,
   "thanh_tien": 6170400
 },
 {
   "npp": "NPP Long Châm",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 14.42,
   "thanh_tien": 6228000
 },
 {
   "npp": "NPP Long Châm",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 41.95,
   "thanh_tien": 18122400
 },
 {
   "npp": "NPP Long Châm",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.12,
   "thanh_tien": 504
 },
 {
   "npp": "NPP Long Châm",
   "ma_sp": "HH00082",
   "ten_sp": "Bim bim tăm cay lạc hồng vr1 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 14.41,
   "thanh_tien": 6224400
 },
 {
   "npp": "NPP Long Châm",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 17.67,
   "thanh_tien": 7632000
 },
 {
   "npp": "NPP Long Châm",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 54.17,
   "thanh_tien": 23400000
 },
 {
   "npp": "NPP Long Châm",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 36.68,
   "thanh_tien": 15847200
 },
 {
   "npp": "NPP Long Châm",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 39,
   "thanh_tien": 16848000
 },
 {
   "npp": "NPP Long Châm",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 17.69,
   "thanh_tien": 7642800
 },
 {
   "npp": "NPP Long Châm",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 29.67,
   "thanh_tien": 12816000
 },
 {
   "npp": "NPP Long Châm",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 39.07,
   "thanh_tien": 16876800
 },
 {
   "npp": "NPP Long Châm",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 30,
   "thanh_tien": 12960000
 },
 {
   "npp": "NPP Long Châm",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 28.25,
   "thanh_tien": 12204000
 },
 {
   "npp": "NPP Long Châm",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 28.1,
   "thanh_tien": 12139200
 },
 {
   "npp": "NPP Long Châm",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 17.09,
   "thanh_tien": 7383600
 },
 {
   "npp": "NPP Long Châm",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 30.02,
   "thanh_tien": 12967200
 },
 {
   "npp": "NPP Long Châm",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.08,
   "thanh_tien": 4356000
 },
 {
   "npp": "NPP Long Châm",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.1,
   "thanh_tien": 5227200
 },
 {
   "npp": "NPP Long Châm",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 18.36,
   "thanh_tien": 7932960
 },
 {
   "npp": "NPP Long Châm",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.4,
   "thanh_tien": 5356800
 },
 {
   "npp": "NPP Long Châm",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 19.01,
   "thanh_tien": 8210880
 },
 {
   "npp": "NPP Long Châm",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 94,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Long Châm",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 80,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Long Hải",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 41.86,
   "thanh_tien": 58059820
 },
 {
   "npp": "NPP Long Hải",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 23.63,
   "thanh_tien": 32774810
 },
 {
   "npp": "NPP Long Hải",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 42.77,
   "thanh_tien": 36016587
 },
 {
   "npp": "NPP Long Hải",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.65,
   "thanh_tien": 4168800
 },
 {
   "npp": "NPP Long Hải",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.45,
   "thanh_tien": 4082400
 },
 {
   "npp": "NPP Long Hải",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.6,
   "thanh_tien": 4147200
 },
 {
   "npp": "NPP Long Hải",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.83,
   "thanh_tien": 4680000
 },
 {
   "npp": "NPP Long Hải",
   "ma_sp": "HH00082",
   "ten_sp": "Bim bim tăm cay lạc hồng vr1 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 16.42,
   "thanh_tien": 7092000
 },
 {
   "npp": "NPP Long Hải",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 16.58,
   "thanh_tien": 7164000
 },
 {
   "npp": "NPP Long Hải",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 42.73,
   "thanh_tien": 18460800
 },
 {
   "npp": "NPP Long Hải",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.42,
   "thanh_tien": 3204000
 },
 {
   "npp": "NPP Long Hải",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.82,
   "thanh_tien": 3376800
 },
 {
   "npp": "NPP Long Hải",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 26.25,
   "thanh_tien": 11340000
 },
 {
   "npp": "NPP Long Hải",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 23.12,
   "thanh_tien": 9986400
 },
 {
   "npp": "NPP Long Hải",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 26.66,
   "thanh_tien": 11516400
 },
 {
   "npp": "NPP Long Hải",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 11.5,
   "thanh_tien": 4968000
 },
 {
   "npp": "NPP Long Hải",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.75,
   "thanh_tien": 2916000
 },
 {
   "npp": "NPP Long Hải",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.24,
   "thanh_tien": 5288400
 },
 {
   "npp": "NPP Long Hải",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.5,
   "thanh_tien": 4104000
 },
 {
   "npp": "NPP Long Hải",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.08,
   "thanh_tien": 5220000
 },
 {
   "npp": "NPP Long Hải",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 15.63,
   "thanh_tien": 6753600
 },
 {
   "npp": "NPP Long Hải",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.77,
   "thanh_tien": 4651200
 },
 {
   "npp": "NPP Long Hải",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 13.07,
   "thanh_tien": 5644800
 },
 {
   "npp": "NPP Long Hải",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 11.61,
   "thanh_tien": 5014080
 },
 {
   "npp": "NPP Long Hải",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.13,
   "thanh_tien": 3081600
 },
 {
   "npp": "NPP Long Hải",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 201,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Long Hải",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 248,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Long Liên",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.64,
   "thanh_tien": 894615
 },
 {
   "npp": "NPP Long Liên",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0,
   "thanh_tien": 48
 },
 {
   "npp": "NPP Long Liên",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.93,
   "thanh_tien": 5587200
 },
 {
   "npp": "NPP Long Liên",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.5,
   "thanh_tien": 1080000
 },
 {
   "npp": "NPP Long Liên",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 80.75,
   "thanh_tien": 34884000
 },
 {
   "npp": "NPP Long Liên",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 44.34,
   "thanh_tien": 19155600
 },
 {
   "npp": "NPP Long Liên",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.04,
   "thanh_tien": 18
 },
 {
   "npp": "NPP Long Liên",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.54,
   "thanh_tien": 1962000
 },
 {
   "npp": "NPP Long Liên",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.95,
   "thanh_tien": 2570400
 },
 {
   "npp": "NPP Long Liên",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.59,
   "thanh_tien": 6876
 },
 {
   "npp": "NPP Long Liên",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.67,
   "thanh_tien": 720
 },
 {
   "npp": "NPP Long Liên",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.66,
   "thanh_tien": 4171680
 },
 {
   "npp": "NPP Long Liên",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 21.1,
   "thanh_tien": 9115200
 },
 {
   "npp": "NPP Long Liên",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.05,
   "thanh_tien": 3909600
 },
 {
   "npp": "NPP Long Liên",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.79,
   "thanh_tien": 3797280
 },
 {
   "npp": "NPP Long Liên",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 11.96,
   "thanh_tien": 5165280
 },
 {
   "npp": "NPP Long Liên",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 165,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Long Liên",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 100,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Lâm Hạ",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.04,
   "thanh_tien": 5548
 },
 {
   "npp": "NPP Lâm Hạ",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0,
   "thanh_tien": 4
 },
 {
   "npp": "NPP Lâm Hạ",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.47,
   "thanh_tien": 2361600
 },
 {
   "npp": "NPP Lâm Hạ",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.83,
   "thanh_tien": 360
 },
 {
   "npp": "NPP Lâm Hạ",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 29.5,
   "thanh_tien": 12744000
 },
 {
   "npp": "NPP Lâm Hạ",
   "ma_sp": "HH00082",
   "ten_sp": "Bim bim tăm cay lạc hồng vr1 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.07,
   "thanh_tien": 324
 },
 {
   "npp": "NPP Lâm Hạ",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.06,
   "thanh_tien": 252
 },
 {
   "npp": "NPP Lâm Hạ",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 28.54,
   "thanh_tien": 12330000
 },
 {
   "npp": "NPP Lâm Hạ",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.71,
   "thanh_tien": 1170000
 },
 {
   "npp": "NPP Lâm Hạ",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.92,
   "thanh_tien": 828
 },
 {
   "npp": "NPP Lâm Hạ",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.83,
   "thanh_tien": 360
 },
 {
   "npp": "NPP Lâm Hạ",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.75,
   "thanh_tien": 1188000
 },
 {
   "npp": "NPP Lâm Hạ",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.75,
   "thanh_tien": 2484000
 },
 {
   "npp": "NPP Lâm Hạ",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.67,
   "thanh_tien": 1584000
 },
 {
   "npp": "NPP Lâm Hạ",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.08,
   "thanh_tien": 2628000
 },
 {
   "npp": "NPP Lâm Hạ",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.75,
   "thanh_tien": 3348000
 },
 {
   "npp": "NPP Lâm Hạ",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.75,
   "thanh_tien": 2484000
 },
 {
   "npp": "NPP Lâm Hạ",
   "ma_sp": "HH00019",
   "ten_sp": "Cá cơm tê cay bà Tuyết 18g (18g/gói*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.6,
   "thanh_tien": 1225600
 },
 {
   "npp": "NPP Lâm Hạ",
   "ma_sp": "HH00083",
   "ten_sp": "Cá cơm ngon ngọt bà Tuyết 18g (18g/gói *200gói/lốc)",
   "ma_dvt": "Thùng",
   "so_luong": 0.05,
   "thanh_tien": 383
 },
 {
   "npp": "NPP Lâm Hạ",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 19.27,
   "thanh_tien": 8323200
 },
 {
   "npp": "NPP Lâm Hạ",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.2,
   "thanh_tien": 864
 },
 {
   "npp": "NPP Lâm Hạ",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.03,
   "thanh_tien": 144
 },
 {
   "npp": "NPP Lâm Hạ",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.1,
   "thanh_tien": 432
 },
 {
   "npp": "NPP Lâm Hạ",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 24.43,
   "thanh_tien": 10555200
 },
 {
   "npp": "NPP Lâm Hạ",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 61,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Lâm Hạ",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 42,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Minh Châu",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 24.8,
   "thanh_tien": 34397600
 },
 {
   "npp": "NPP Minh Châu",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 26.45,
   "thanh_tien": 36686150
 },
 {
   "npp": "NPP Minh Châu",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 25.35,
   "thanh_tien": 21344693
 },
 {
   "npp": "NPP Minh Châu",
   "ma_sp": "HH00100",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*120 gói/thùng kèm sốt",
   "ma_dvt": "Thùng",
   "so_luong": 0.65,
   "thanh_tien": 5915
 },
 {
   "npp": "NPP Minh Châu",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.18,
   "thanh_tien": 2671200
 },
 {
   "npp": "NPP Minh Châu",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.4,
   "thanh_tien": 2332800
 },
 {
   "npp": "NPP Minh Châu",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 86.27,
   "thanh_tien": 37267200
 },
 {
   "npp": "NPP Minh Châu",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 25.7,
   "thanh_tien": 11102400
 },
 {
   "npp": "NPP Minh Châu",
   "ma_sp": "HH00082",
   "ten_sp": "Bim bim tăm cay lạc hồng vr1 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 17.58,
   "thanh_tien": 7596000
 },
 {
   "npp": "NPP Minh Châu",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.33,
   "thanh_tien": 4032000
 },
 {
   "npp": "NPP Minh Châu",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 226.77,
   "thanh_tien": 97963200
 },
 {
   "npp": "NPP Minh Châu",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 14.48,
   "thanh_tien": 6253200
 },
 {
   "npp": "NPP Minh Châu",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 17.73,
   "thanh_tien": 7660800
 },
 {
   "npp": "NPP Minh Châu",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 11.57,
   "thanh_tien": 5000400
 },
 {
   "npp": "NPP Minh Châu",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 22.08,
   "thanh_tien": 9540000
 },
 {
   "npp": "NPP Minh Châu",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 31.58,
   "thanh_tien": 13644000
 },
 {
   "npp": "NPP Minh Châu",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 14.83,
   "thanh_tien": 6408000
 },
 {
   "npp": "NPP Minh Châu",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 14.41,
   "thanh_tien": 6224400
 },
 {
   "npp": "NPP Minh Châu",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 20.75,
   "thanh_tien": 8964000
 },
 {
   "npp": "NPP Minh Châu",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 16.5,
   "thanh_tien": 7128000
 },
 {
   "npp": "NPP Minh Châu",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 43.83,
   "thanh_tien": 18936000
 },
 {
   "npp": "NPP Minh Châu",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 15.1,
   "thanh_tien": 6523200
 },
 {
   "npp": "NPP Minh Châu",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 24.9,
   "thanh_tien": 10756800
 },
 {
   "npp": "NPP Minh Châu",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 23.23,
   "thanh_tien": 10036800
 },
 {
   "npp": "NPP Minh Châu",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 35.5,
   "thanh_tien": 15336000
 },
 {
   "npp": "NPP Minh Châu",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 118,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Minh Châu",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 95,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Minh Lộc",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 22.6,
   "thanh_tien": 31346200
 },
 {
   "npp": "NPP Minh Lộc",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.04,
   "thanh_tien": 48545
 },
 {
   "npp": "NPP Minh Lộc",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.2,
   "thanh_tien": 5220397
 },
 {
   "npp": "NPP Minh Lộc",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.63,
   "thanh_tien": 3297600
 },
 {
   "npp": "NPP Minh Lộc",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.58,
   "thanh_tien": 3708000
 },
 {
   "npp": "NPP Minh Lộc",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.63,
   "thanh_tien": 4161600
 },
 {
   "npp": "NPP Minh Lộc",
   "ma_sp": "HH00082",
   "ten_sp": "Bim bim tăm cay lạc hồng vr1 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.67,
   "thanh_tien": 3744000
 },
 {
   "npp": "NPP Minh Lộc",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.08,
   "thanh_tien": 1764000
 },
 {
   "npp": "NPP Minh Lộc",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 14.43,
   "thanh_tien": 6235200
 },
 {
   "npp": "NPP Minh Lộc",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.5,
   "thanh_tien": 1944000
 },
 {
   "npp": "NPP Minh Lộc",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.08,
   "thanh_tien": 324
 },
 {
   "npp": "NPP Minh Lộc",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.12,
   "thanh_tien": 1778400
 },
 {
   "npp": "NPP Minh Lộc",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.24,
   "thanh_tien": 1044
 },
 {
   "npp": "NPP Minh Lộc",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.75,
   "thanh_tien": 2052000
 },
 {
   "npp": "NPP Minh Lộc",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.33,
   "thanh_tien": 4464000
 },
 {
   "npp": "NPP Minh Lộc",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.92,
   "thanh_tien": 1260000
 },
 {
   "npp": "NPP Minh Lộc",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.98,
   "thanh_tien": 2584800
 },
 {
   "npp": "NPP Minh Lộc",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.67,
   "thanh_tien": 4608000
 },
 {
   "npp": "NPP Minh Lộc",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.75,
   "thanh_tien": 2052000
 },
 {
   "npp": "NPP Minh Lộc",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.77,
   "thanh_tien": 2059200
 },
 {
   "npp": "NPP Minh Lộc",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.27,
   "thanh_tien": 5472
 },
 {
   "npp": "NPP Minh Lộc",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.5,
   "thanh_tien": 216
 },
 {
   "npp": "NPP Minh Lộc",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.43,
   "thanh_tien": 1915200
 },
 {
   "npp": "NPP Minh Lộc",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 65,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Minh Lộc",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 64,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Mạnh Hà 1",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.28,
   "thanh_tien": 3162360
 },
 {
   "npp": "NPP Mạnh Hà 1",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0,
   "thanh_tien": -42
 },
 {
   "npp": "NPP Mạnh Hà 1",
   "ma_sp": "HH00100",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*120 gói/thùng kèm sốt",
   "ma_dvt": "Thùng",
   "so_luong": 1,
   "thanh_tien": 910
 },
 {
   "npp": "NPP Mạnh Hà 1",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.17,
   "thanh_tien": 3528000
 },
 {
   "npp": "NPP Mạnh Hà 1",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 13.2,
   "thanh_tien": 5702400
 },
 {
   "npp": "NPP Mạnh Hà 1",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 60.37,
   "thanh_tien": 26078400
 },
 {
   "npp": "NPP Mạnh Hà 1",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 45,
   "thanh_tien": 19440000
 },
 {
   "npp": "NPP Mạnh Hà 1",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 150.07,
   "thanh_tien": 64828800
 },
 {
   "npp": "NPP Mạnh Hà 1",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 34.83,
   "thanh_tien": 15048000
 },
 {
   "npp": "NPP Mạnh Hà 1",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.58,
   "thanh_tien": 2844000
 },
 {
   "npp": "NPP Mạnh Hà 1",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 17.94,
   "thanh_tien": 7750800
 },
 {
   "npp": "NPP Mạnh Hà 1",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.98,
   "thanh_tien": 3016800
 },
 {
   "npp": "NPP Mạnh Hà 1",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.32,
   "thanh_tien": 4456800
 },
 {
   "npp": "NPP Mạnh Hà 1",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.26,
   "thanh_tien": 3567600
 },
 {
   "npp": "NPP Mạnh Hà 1",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.93,
   "thanh_tien": 3859200
 },
 {
   "npp": "NPP Mạnh Hà 1",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.41,
   "thanh_tien": 2768400
 },
 {
   "npp": "NPP Mạnh Hà 1",
   "ma_sp": "HH00019",
   "ten_sp": "Cá cơm tê cay bà Tuyết 18g (18g/gói*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2,
   "thanh_tien": 1532000
 },
 {
   "npp": "NPP Mạnh Hà 1",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 18.33,
   "thanh_tien": 7920000
 },
 {
   "npp": "NPP Mạnh Hà 1",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 25.87,
   "thanh_tien": 11177280
 },
 {
   "npp": "NPP Mạnh Hà 1",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 22.77,
   "thanh_tien": 9838080
 },
 {
   "npp": "NPP Mạnh Hà 1",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 34.53,
   "thanh_tien": 14918400
 },
 {
   "npp": "NPP Mạnh Hà 1",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 15.03,
   "thanh_tien": 6494400
 },
 {
   "npp": "NPP Mạnh Hà 1",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 148,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Mạnh Hà 1",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 6,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Mạnh Hà 2",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 117.95,
   "thanh_tien": 163596650
 },
 {
   "npp": "NPP Mạnh Hà 2",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.1,
   "thanh_tien": 5686700
 },
 {
   "npp": "NPP Mạnh Hà 2",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 44.83,
   "thanh_tien": 37749674
 },
 {
   "npp": "NPP Mạnh Hà 2",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.87,
   "thanh_tien": 4694400
 },
 {
   "npp": "NPP Mạnh Hà 2",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 13.63,
   "thanh_tien": 5889600
 },
 {
   "npp": "NPP Mạnh Hà 2",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.33,
   "thanh_tien": 4464000
 },
 {
   "npp": "NPP Mạnh Hà 2",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.68,
   "thanh_tien": 1159200
 },
 {
   "npp": "NPP Mạnh Hà 2",
   "ma_sp": "HH00082",
   "ten_sp": "Bim bim tăm cay lạc hồng vr1 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.08,
   "thanh_tien": 1764000
 },
 {
   "npp": "NPP Mạnh Hà 2",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 100.5,
   "thanh_tien": 43416000
 },
 {
   "npp": "NPP Mạnh Hà 2",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.6,
   "thanh_tien": 3283200
 },
 {
   "npp": "NPP Mạnh Hà 2",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.67,
   "thanh_tien": 288
 },
 {
   "npp": "NPP Mạnh Hà 2",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.25,
   "thanh_tien": 3132000
 },
 {
   "npp": "NPP Mạnh Hà 2",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.67,
   "thanh_tien": 3744000
 },
 {
   "npp": "NPP Mạnh Hà 2",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.73,
   "thanh_tien": 2044800
 },
 {
   "npp": "NPP Mạnh Hà 2",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.75,
   "thanh_tien": 324
 },
 {
   "npp": "NPP Mạnh Hà 2",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.83,
   "thanh_tien": 2088000
 },
 {
   "npp": "NPP Mạnh Hà 2",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9,
   "thanh_tien": 3888000
 },
 {
   "npp": "NPP Mạnh Hà 2",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.33,
   "thanh_tien": 1872000
 },
 {
   "npp": "NPP Mạnh Hà 2",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 14.67,
   "thanh_tien": 6336000
 },
 {
   "npp": "NPP Mạnh Hà 2",
   "ma_sp": "HH00019",
   "ten_sp": "Cá cơm tê cay bà Tuyết 18g (18g/gói*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.3,
   "thanh_tien": 2298
 },
 {
   "npp": "NPP Mạnh Hà 2",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 40.9,
   "thanh_tien": 17668800
 },
 {
   "npp": "NPP Mạnh Hà 2",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 40.9,
   "thanh_tien": 17668800
 },
 {
   "npp": "NPP Mạnh Hà 2",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.9,
   "thanh_tien": 4708800
 },
 {
   "npp": "NPP Mạnh Hà 2",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 11.2,
   "thanh_tien": 4838400
 },
 {
   "npp": "NPP Mạnh Hà 2",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 41.2,
   "thanh_tien": 17798400
 },
 {
   "npp": "NPP Mạnh Hà 2",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 13,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Mạnh Hà 2",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 408,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Nam Thái",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.35,
   "thanh_tien": 11581450
 },
 {
   "npp": "NPP Nam Thái",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 37.2,
   "thanh_tien": 51596400
 },
 {
   "npp": "NPP Nam Thái",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 45.67,
   "thanh_tien": 38451341
 },
 {
   "npp": "NPP Nam Thái",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.4,
   "thanh_tien": 2764800
 },
 {
   "npp": "NPP Nam Thái",
   "ma_sp": "HH00082",
   "ten_sp": "Bim bim tăm cay lạc hồng vr1 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.92,
   "thanh_tien": 3420000
 },
 {
   "npp": "NPP Nam Thái",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.42,
   "thanh_tien": 2340000
 },
 {
   "npp": "NPP Nam Thái",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.33,
   "thanh_tien": 576
 },
 {
   "npp": "NPP Nam Thái",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.08,
   "thanh_tien": 2196000
 },
 {
   "npp": "NPP Nam Thái",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.75,
   "thanh_tien": 5508000
 },
 {
   "npp": "NPP Nam Thái",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.83,
   "thanh_tien": 2952000
 },
 {
   "npp": "NPP Nam Thái",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.33,
   "thanh_tien": 3168000
 },
 {
   "npp": "NPP Nam Thái",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.83,
   "thanh_tien": 2952000
 },
 {
   "npp": "NPP Nam Thái",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.25,
   "thanh_tien": 3132000
 },
 {
   "npp": "NPP Nam Thái",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.51,
   "thanh_tien": 1947600
 },
 {
   "npp": "NPP Nam Thái",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 13.58,
   "thanh_tien": 5868000
 },
 {
   "npp": "NPP Nam Thái",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10,
   "thanh_tien": 4320000
 },
 {
   "npp": "NPP Nam Thái",
   "ma_sp": "HH00019",
   "ten_sp": "Cá cơm tê cay bà Tuyết 18g (18g/gói*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.9,
   "thanh_tien": 8349400
 },
 {
   "npp": "NPP Nam Thái",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 19.9,
   "thanh_tien": 8596800
 },
 {
   "npp": "NPP Nam Thái",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 30,
   "thanh_tien": 12960000
 },
 {
   "npp": "NPP Nam Thái",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 24.9,
   "thanh_tien": 10756800
 },
 {
   "npp": "NPP Nam Thái",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 15,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Nguyên Vũ",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.02,
   "thanh_tien": 34675
 },
 {
   "npp": "NPP Nguyên Vũ",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.02,
   "thanh_tien": 21046
 },
 {
   "npp": "NPP Nguyên Vũ",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9,
   "thanh_tien": 3888000
 },
 {
   "npp": "NPP Nguyên Vũ",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.67,
   "thanh_tien": 3312000
 },
 {
   "npp": "NPP Nguyên Vũ",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.02,
   "thanh_tien": 72
 },
 {
   "npp": "NPP Nguyên Vũ",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.2,
   "thanh_tien": 864
 },
 {
   "npp": "NPP Nguyên Vũ",
   "ma_sp": "HH00082",
   "ten_sp": "Bim bim tăm cay lạc hồng vr1 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.67,
   "thanh_tien": 288
 },
 {
   "npp": "NPP Nguyên Vũ",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.02,
   "thanh_tien": 72
 },
 {
   "npp": "NPP Nguyên Vũ",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.07,
   "thanh_tien": 288
 },
 {
   "npp": "NPP Nguyên Vũ",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.03,
   "thanh_tien": 144
 },
 {
   "npp": "NPP Nguyên Vũ",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.92,
   "thanh_tien": 396
 },
 {
   "npp": "NPP Nguyên Vũ",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.08,
   "thanh_tien": 36
 },
 {
   "npp": "NPP Nguyên Vũ",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.58,
   "thanh_tien": 684
 },
 {
   "npp": "NPP Nguyên Vũ",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.08,
   "thanh_tien": 36
 },
 {
   "npp": "NPP Nguyên Vũ",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.42,
   "thanh_tien": 1044000
 },
 {
   "npp": "NPP Nguyên Vũ",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2,
   "thanh_tien": 864
 },
 {
   "npp": "NPP Nguyên Vũ",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.05,
   "thanh_tien": 2016
 },
 {
   "npp": "NPP Nguyên Vũ",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.05,
   "thanh_tien": 216
 },
 {
   "npp": "NPP Nguyên Vũ",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.05,
   "thanh_tien": 2016
 },
 {
   "npp": "NPP Nguyên Vũ",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.1,
   "thanh_tien": 432
 },
 {
   "npp": "NPP Nguyên Vũ",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 28,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Nguyễn Đình Hân",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.03,
   "thanh_tien": 4161
 },
 {
   "npp": "NPP Nguyễn Đình Hân",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 19.8,
   "thanh_tien": 27462600
 },
 {
   "npp": "NPP Nguyễn Đình Hân",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0,
   "thanh_tien": 4
 },
 {
   "npp": "NPP Nguyễn Đình Hân",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.05,
   "thanh_tien": 216
 },
 {
   "npp": "NPP Nguyễn Đình Hân",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 20.72,
   "thanh_tien": 8949600
 },
 {
   "npp": "NPP Nguyễn Đình Hân",
   "ma_sp": "HH00082",
   "ten_sp": "Bim bim tăm cay lạc hồng vr1 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.03,
   "thanh_tien": 144
 },
 {
   "npp": "NPP Nguyễn Đình Hân",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.77,
   "thanh_tien": 1627200
 },
 {
   "npp": "NPP Nguyễn Đình Hân",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 52.08,
   "thanh_tien": 22500000
 },
 {
   "npp": "NPP Nguyễn Đình Hân",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.94,
   "thanh_tien": 5590800
 },
 {
   "npp": "NPP Nguyễn Đình Hân",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3,
   "thanh_tien": 1296000
 },
 {
   "npp": "NPP Nguyễn Đình Hân",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.67,
   "thanh_tien": 720
 },
 {
   "npp": "NPP Nguyễn Đình Hân",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.25,
   "thanh_tien": 2268000
 },
 {
   "npp": "NPP Nguyễn Đình Hân",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.29,
   "thanh_tien": 3150000
 },
 {
   "npp": "NPP Nguyễn Đình Hân",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.96,
   "thanh_tien": 846
 },
 {
   "npp": "NPP Nguyễn Đình Hân",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.83,
   "thanh_tien": 792
 },
 {
   "npp": "NPP Nguyễn Đình Hân",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.13,
   "thanh_tien": 486
 },
 {
   "npp": "NPP Nguyễn Đình Hân",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.46,
   "thanh_tien": 1494000
 },
 {
   "npp": "NPP Nguyễn Đình Hân",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.63,
   "thanh_tien": 1134000
 },
 {
   "npp": "NPP Nguyễn Đình Hân",
   "ma_sp": "HH00019",
   "ten_sp": "Cá cơm tê cay bà Tuyết 18g (18g/gói*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.65,
   "thanh_tien": 5859900
 },
 {
   "npp": "NPP Nguyễn Đình Hân",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 34.85,
   "thanh_tien": 15055200
 },
 {
   "npp": "NPP Nguyễn Đình Hân",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.36,
   "thanh_tien": 1882080
 },
 {
   "npp": "NPP Nguyễn Đình Hân",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 14.87,
   "thanh_tien": 6425280
 },
 {
   "npp": "NPP Nguyễn Đình Hân",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.14,
   "thanh_tien": 2653920
 },
 {
   "npp": "NPP Nguyễn Đình Hân",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 11.64,
   "thanh_tien": 5029920
 },
 {
   "npp": "NPP Nguyễn Đình Hân",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 20,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Nguyễn Đình Hân",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 43,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Ngọc Kiên",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 13.04,
   "thanh_tien": 18086480
 },
 {
   "npp": "NPP Ngọc Kiên",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.02,
   "thanh_tien": 2774
 },
 {
   "npp": "NPP Ngọc Kiên",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 14.5,
   "thanh_tien": 12209011
 },
 {
   "npp": "NPP Ngọc Kiên",
   "ma_sp": "HH00099",
   "ten_sp": "Chân gà có xương bà Tuyết (40gram*90 gói/thùng) kèm sốt",
   "ma_dvt": "Thùng",
   "so_luong": 0.03,
   "thanh_tien": 23
 },
 {
   "npp": "NPP Ngọc Kiên",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.3,
   "thanh_tien": 1857600
 },
 {
   "npp": "NPP Ngọc Kiên",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.03,
   "thanh_tien": 2174400
 },
 {
   "npp": "NPP Ngọc Kiên",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.27,
   "thanh_tien": 5472
 },
 {
   "npp": "NPP Ngọc Kiên",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.4,
   "thanh_tien": 2764800
 },
 {
   "npp": "NPP Ngọc Kiên",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 11.75,
   "thanh_tien": 5076000
 },
 {
   "npp": "NPP Ngọc Kiên",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 17.83,
   "thanh_tien": 7704000
 },
 {
   "npp": "NPP Ngọc Kiên",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12,
   "thanh_tien": 5184000
 },
 {
   "npp": "NPP Ngọc Kiên",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.58,
   "thanh_tien": 1980000
 },
 {
   "npp": "NPP Ngọc Kiên",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.92,
   "thanh_tien": 4284000
 },
 {
   "npp": "NPP Ngọc Kiên",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.92,
   "thanh_tien": 2556000
 },
 {
   "npp": "NPP Ngọc Kiên",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.33,
   "thanh_tien": 3168000
 },
 {
   "npp": "NPP Ngọc Kiên",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.83,
   "thanh_tien": 2952000
 },
 {
   "npp": "NPP Ngọc Kiên",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.75,
   "thanh_tien": 4212000
 },
 {
   "npp": "NPP Ngọc Kiên",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.33,
   "thanh_tien": 3600000
 },
 {
   "npp": "NPP Ngọc Kiên",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.08,
   "thanh_tien": 2196000
 },
 {
   "npp": "NPP Ngọc Kiên",
   "ma_sp": "HH00019",
   "ten_sp": "Cá cơm tê cay bà Tuyết 18g (18g/gói*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 21.45,
   "thanh_tien": 16430700
 },
 {
   "npp": "NPP Ngọc Kiên",
   "ma_sp": "HH00083",
   "ten_sp": "Cá cơm ngon ngọt bà Tuyết 18g (18g/gói *200gói/lốc)",
   "ma_dvt": "Thùng",
   "so_luong": 4,
   "thanh_tien": 3064000
 },
 {
   "npp": "NPP Ngọc Kiên",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.01,
   "thanh_tien": 288
 },
 {
   "npp": "NPP Ngọc Kiên",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.7,
   "thanh_tien": 1166400
 },
 {
   "npp": "NPP Ngọc Kiên",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.27,
   "thanh_tien": 4435200
 },
 {
   "npp": "NPP Ngọc Kiên",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 16.13,
   "thanh_tien": 6969600
 },
 {
   "npp": "NPP Ngọc Kiên",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.93,
   "thanh_tien": 4723200
 },
 {
   "npp": "NPP Ngọc Kiên",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 114,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Ngọc Kiên",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 80,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Ngọc Phúc",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.83,
   "thanh_tien": 3925210
 },
 {
   "npp": "NPP Ngọc Phúc",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.52,
   "thanh_tien": 2119061
 },
 {
   "npp": "NPP Ngọc Phúc",
   "ma_sp": "HH00100",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*120 gói/thùng kèm sốt",
   "ma_dvt": "Thùng",
   "so_luong": 0.13,
   "thanh_tien": 11375
 },
 {
   "npp": "NPP Ngọc Phúc",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 15.65,
   "thanh_tien": 6760800
 },
 {
   "npp": "NPP Ngọc Phúc",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.07,
   "thanh_tien": 288
 },
 {
   "npp": "NPP Ngọc Phúc",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 22.45,
   "thanh_tien": 9698400
 },
 {
   "npp": "NPP Ngọc Phúc",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 44.14,
   "thanh_tien": 19069200
 },
 {
   "npp": "NPP Ngọc Phúc",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.64,
   "thanh_tien": 1573200
 },
 {
   "npp": "NPP Ngọc Phúc",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 24.67,
   "thanh_tien": 10656000
 },
 {
   "npp": "NPP Ngọc Phúc",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 41.67,
   "thanh_tien": 18000000
 },
 {
   "npp": "NPP Ngọc Phúc",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 34.33,
   "thanh_tien": 14832000
 },
 {
   "npp": "NPP Ngọc Phúc",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 18.08,
   "thanh_tien": 7812000
 },
 {
   "npp": "NPP Ngọc Phúc",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.74,
   "thanh_tien": 3344400
 },
 {
   "npp": "NPP Ngọc Phúc",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2,
   "thanh_tien": 864
 },
 {
   "npp": "NPP Ngọc Phúc",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.01,
   "thanh_tien": 1731600
 },
 {
   "npp": "NPP Ngọc Phúc",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.08,
   "thanh_tien": 2196000
 },
 {
   "npp": "NPP Ngọc Phúc",
   "ma_sp": "HH00019",
   "ten_sp": "Cá cơm tê cay bà Tuyết 18g (18g/gói*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 11.7,
   "thanh_tien": 8962200
 },
 {
   "npp": "NPP Ngọc Phúc",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.4,
   "thanh_tien": 1728
 },
 {
   "npp": "NPP Ngọc Phúc",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.09,
   "thanh_tien": 90144
 },
 {
   "npp": "NPP Ngọc Phúc",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.77,
   "thanh_tien": 7632
 },
 {
   "npp": "NPP Ngọc Phúc",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 58,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Ngọc Phúc",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 69,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Ngọc Thêu",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 24.9,
   "thanh_tien": 34536300
 },
 {
   "npp": "NPP Ngọc Thêu",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 121.87,
   "thanh_tien": 169033690
 },
 {
   "npp": "NPP Ngọc Thêu",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 11.83,
   "thanh_tien": 9963620
 },
 {
   "npp": "NPP Ngọc Thêu",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 14.37,
   "thanh_tien": 6206400
 },
 {
   "npp": "NPP Ngọc Thêu",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.1,
   "thanh_tien": 1771200
 },
 {
   "npp": "NPP Ngọc Thêu",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 13.33,
   "thanh_tien": 5760000
 },
 {
   "npp": "NPP Ngọc Thêu",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.91,
   "thanh_tien": 4712400
 },
 {
   "npp": "NPP Ngọc Thêu",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 41.08,
   "thanh_tien": 17748000
 },
 {
   "npp": "NPP Ngọc Thêu",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 29.5,
   "thanh_tien": 12744000
 },
 {
   "npp": "NPP Ngọc Thêu",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.33,
   "thanh_tien": 3168000
 },
 {
   "npp": "NPP Ngọc Thêu",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.58,
   "thanh_tien": 4140000
 },
 {
   "npp": "NPP Ngọc Thêu",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 15.32,
   "thanh_tien": 6616800
 },
 {
   "npp": "NPP Ngọc Thêu",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 11.33,
   "thanh_tien": 4896000
 },
 {
   "npp": "NPP Ngọc Thêu",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 11.42,
   "thanh_tien": 4932000
 },
 {
   "npp": "NPP Ngọc Thêu",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 34.33,
   "thanh_tien": 14832000
 },
 {
   "npp": "NPP Ngọc Thêu",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.58,
   "thanh_tien": 3276000
 },
 {
   "npp": "NPP Ngọc Thêu",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.58,
   "thanh_tien": 3708000
 },
 {
   "npp": "NPP Ngọc Thêu",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 11.93,
   "thanh_tien": 5155200
 },
 {
   "npp": "NPP Ngọc Thêu",
   "ma_sp": "HH00083",
   "ten_sp": "Cá cơm ngon ngọt bà Tuyết 18g (18g/gói *200gói/lốc)",
   "ma_dvt": "Thùng",
   "so_luong": 1.6,
   "thanh_tien": 1225600
 },
 {
   "npp": "NPP Ngọc Thêu",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 21.9,
   "thanh_tien": 9460800
 },
 {
   "npp": "NPP Ngọc Thêu",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.4,
   "thanh_tien": 2332800
 },
 {
   "npp": "NPP Ngọc Thêu",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.4,
   "thanh_tien": 2764800
 },
 {
   "npp": "NPP Ngọc Thêu",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.6,
   "thanh_tien": 4579200
 },
 {
   "npp": "NPP Ngọc Thêu",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.87,
   "thanh_tien": 2534400
 },
 {
   "npp": "NPP Ngọc Thêu",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 155,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Ngọc Thêu",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 44,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Nhung Tùng",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 159.6,
   "thanh_tien": 221365200
 },
 {
   "npp": "NPP Nhung Tùng",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 28.41,
   "thanh_tien": 39411605
 },
 {
   "npp": "NPP Nhung Tùng",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 13.49,
   "thanh_tien": 11359987
 },
 {
   "npp": "NPP Nhung Tùng",
   "ma_sp": "HH00100",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*120 gói/thùng kèm sốt",
   "ma_dvt": "Thùng",
   "so_luong": 0.13,
   "thanh_tien": 11375
 },
 {
   "npp": "NPP Nhung Tùng",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 28.17,
   "thanh_tien": 12168000
 },
 {
   "npp": "NPP Nhung Tùng",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 20,
   "thanh_tien": 8640000
 },
 {
   "npp": "NPP Nhung Tùng",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 32.47,
   "thanh_tien": 14025600
 },
 {
   "npp": "NPP Nhung Tùng",
   "ma_sp": "HH00082",
   "ten_sp": "Bim bim tăm cay lạc hồng vr1 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.33,
   "thanh_tien": 1004400
 },
 {
   "npp": "NPP Nhung Tùng",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 71.77,
   "thanh_tien": 31006800
 },
 {
   "npp": "NPP Nhung Tùng",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 17.15,
   "thanh_tien": 7408800
 },
 {
   "npp": "NPP Nhung Tùng",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 16.7,
   "thanh_tien": 7214400
 },
 {
   "npp": "NPP Nhung Tùng",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 22.32,
   "thanh_tien": 9640800
 },
 {
   "npp": "NPP Nhung Tùng",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 23.97,
   "thanh_tien": 10357200
 },
 {
   "npp": "NPP Nhung Tùng",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 11.43,
   "thanh_tien": 4935600
 },
 {
   "npp": "NPP Nhung Tùng",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 13.25,
   "thanh_tien": 5724000
 },
 {
   "npp": "NPP Nhung Tùng",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.76,
   "thanh_tien": 4647600
 },
 {
   "npp": "NPP Nhung Tùng",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 15.24,
   "thanh_tien": 6584400
 },
 {
   "npp": "NPP Nhung Tùng",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 23.88,
   "thanh_tien": 10317600
 },
 {
   "npp": "NPP Nhung Tùng",
   "ma_sp": "HH00019",
   "ten_sp": "Cá cơm tê cay bà Tuyết 18g (18g/gói*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.04,
   "thanh_tien": 3064
 },
 {
   "npp": "NPP Nhung Tùng",
   "ma_sp": "HH00083",
   "ten_sp": "Cá cơm ngon ngọt bà Tuyết 18g (18g/gói *200gói/lốc)",
   "ma_dvt": "Thùng",
   "so_luong": 0.04,
   "thanh_tien": 3064
 },
 {
   "npp": "NPP Nhung Tùng",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.06,
   "thanh_tien": 2592
 },
 {
   "npp": "NPP Nhung Tùng",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 30.11,
   "thanh_tien": 13007520
 },
 {
   "npp": "NPP Nhung Tùng",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 14.88,
   "thanh_tien": 6426720
 },
 {
   "npp": "NPP Nhung Tùng",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.88,
   "thanh_tien": 2538720
 },
 {
   "npp": "NPP Nhung Tùng",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.67,
   "thanh_tien": 3312000
 },
 {
   "npp": "NPP Nhung Tùng",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 211,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Nhung Tùng",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 136,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Nhung Tùng 2",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 20,
   "thanh_tien": 16840003
 },
 {
   "npp": "NPP Nhung Tùng 2",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5,
   "thanh_tien": 2160000
 },
 {
   "npp": "NPP Nhung Tùng 2",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5,
   "thanh_tien": 2160000
 },
 {
   "npp": "NPP Nhung Tùng 2",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10,
   "thanh_tien": 4320000
 },
 {
   "npp": "NPP Nhung Tùng 2",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 80,
   "thanh_tien": 34560000
 },
 {
   "npp": "NPP Nhung Tùng 2",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 15,
   "thanh_tien": 6480000
 },
 {
   "npp": "NPP Nhung Tùng 2",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10,
   "thanh_tien": 4320000
 },
 {
   "npp": "NPP Nhung Tùng 2",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10,
   "thanh_tien": 4320000
 },
 {
   "npp": "NPP Nhung Tùng 2",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10,
   "thanh_tien": 4320000
 },
 {
   "npp": "NPP Nhung Tùng 2",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 15,
   "thanh_tien": 6480000
 },
 {
   "npp": "NPP Nhung Tùng 2",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 15,
   "thanh_tien": 6480000
 },
 {
   "npp": "NPP Nhung Tùng 2",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 15,
   "thanh_tien": 6480000
 },
 {
   "npp": "NPP Nhung Tùng 2",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 15,
   "thanh_tien": 6480000
 },
 {
   "npp": "NPP Nhung Tùng 2",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 15,
   "thanh_tien": 6480000
 },
 {
   "npp": "NPP Nhung Tùng 2",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 15,
   "thanh_tien": 6480000
 },
 {
   "npp": "NPP Nhung Tùng 2",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 21,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Oanh Định",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 57.01,
   "thanh_tien": 79072870
 },
 {
   "npp": "NPP Oanh Định",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.53,
   "thanh_tien": 9057110
 },
 {
   "npp": "NPP Oanh Định",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.72,
   "thanh_tien": 1445445
 },
 {
   "npp": "NPP Oanh Định",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.58,
   "thanh_tien": 252
 },
 {
   "npp": "NPP Oanh Định",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.4,
   "thanh_tien": 1468800
 },
 {
   "npp": "NPP Oanh Định",
   "ma_sp": "HH00082",
   "ten_sp": "Bim bim tăm cay lạc hồng vr1 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.92,
   "thanh_tien": 2988000
 },
 {
   "npp": "NPP Oanh Định",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 58,
   "thanh_tien": 25056000
 },
 {
   "npp": "NPP Oanh Định",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10,
   "thanh_tien": 4320000
 },
 {
   "npp": "NPP Oanh Định",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.5,
   "thanh_tien": 1512000
 },
 {
   "npp": "NPP Oanh Định",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.8,
   "thanh_tien": 1641600
 },
 {
   "npp": "NPP Oanh Định",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 13.58,
   "thanh_tien": 5868000
 },
 {
   "npp": "NPP Oanh Định",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.67,
   "thanh_tien": 4608000
 },
 {
   "npp": "NPP Oanh Định",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.76,
   "thanh_tien": 2919600
 },
 {
   "npp": "NPP Oanh Định",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1,
   "thanh_tien": 432
 },
 {
   "npp": "NPP Oanh Định",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.17,
   "thanh_tien": 504
 },
 {
   "npp": "NPP Oanh Định",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.88,
   "thanh_tien": 4269600
 },
 {
   "npp": "NPP Oanh Định",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.23,
   "thanh_tien": 2260800
 },
 {
   "npp": "NPP Oanh Định",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.03,
   "thanh_tien": 2606400
 },
 {
   "npp": "NPP Oanh Định",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.4,
   "thanh_tien": 1036800
 },
 {
   "npp": "NPP Oanh Định",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.77,
   "thanh_tien": 2059200
 },
 {
   "npp": "NPP Oanh Định",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.85,
   "thanh_tien": 2095200
 },
 {
   "npp": "NPP Oanh Định",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 23,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Phong Hiền",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 14.58,
   "thanh_tien": 20229395
 },
 {
   "npp": "NPP Phong Hiền",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 65.25,
   "thanh_tien": 90501750
 },
 {
   "npp": "NPP Phong Hiền",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 24.85,
   "thanh_tien": 20923700
 },
 {
   "npp": "NPP Phong Hiền",
   "ma_sp": "HH00100",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*120 gói/thùng kèm sốt",
   "ma_dvt": "Thùng",
   "so_luong": 0.15,
   "thanh_tien": 1365
 },
 {
   "npp": "NPP Phong Hiền",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.13,
   "thanh_tien": 576
 },
 {
   "npp": "NPP Phong Hiền",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.13,
   "thanh_tien": 576
 },
 {
   "npp": "NPP Phong Hiền",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.1,
   "thanh_tien": 432
 },
 {
   "npp": "NPP Phong Hiền",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 13.33,
   "thanh_tien": 5760000
 },
 {
   "npp": "NPP Phong Hiền",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 59.73,
   "thanh_tien": 25804800
 },
 {
   "npp": "NPP Phong Hiền",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 53.75,
   "thanh_tien": 23220000
 },
 {
   "npp": "NPP Phong Hiền",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.17,
   "thanh_tien": 72
 },
 {
   "npp": "NPP Phong Hiền",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.08,
   "thanh_tien": 324
 },
 {
   "npp": "NPP Phong Hiền",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.1,
   "thanh_tien": 432
 },
 {
   "npp": "NPP Phong Hiền",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.91,
   "thanh_tien": 1688400
 },
 {
   "npp": "NPP Phong Hiền",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.6,
   "thanh_tien": 1123200
 },
 {
   "npp": "NPP Phong Hiền",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.13,
   "thanh_tien": 54
 },
 {
   "npp": "NPP Phong Hiền",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.58,
   "thanh_tien": 684
 },
 {
   "npp": "NPP Phong Hiền",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.33,
   "thanh_tien": 576
 },
 {
   "npp": "NPP Phong Hiền",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.42,
   "thanh_tien": 612
 },
 {
   "npp": "NPP Phong Hiền",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.03,
   "thanh_tien": 144
 },
 {
   "npp": "NPP Phong Hiền",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.5,
   "thanh_tien": 648
 },
 {
   "npp": "NPP Phong Hiền",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 130,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Phong Hiền",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 100,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Phúc Thịnh",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 36.04,
   "thanh_tien": 49994415
 },
 {
   "npp": "NPP Phúc Thịnh",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0,
   "thanh_tien": 7
 },
 {
   "npp": "NPP Phúc Thịnh",
   "ma_sp": "HH00100",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*120 gói/thùng kèm sốt",
   "ma_dvt": "Thùng",
   "so_luong": 1,
   "thanh_tien": 910
 },
 {
   "npp": "NPP Phúc Thịnh",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.82,
   "thanh_tien": 2944800
 },
 {
   "npp": "NPP Phúc Thịnh",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.05,
   "thanh_tien": 4341600
 },
 {
   "npp": "NPP Phúc Thịnh",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.03,
   "thanh_tien": 144
 },
 {
   "npp": "NPP Phúc Thịnh",
   "ma_sp": "HH00082",
   "ten_sp": "Bim bim tăm cay lạc hồng vr1 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.02,
   "thanh_tien": 72
 },
 {
   "npp": "NPP Phúc Thịnh",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.02,
   "thanh_tien": 72
 },
 {
   "npp": "NPP Phúc Thịnh",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 28.76,
   "thanh_tien": 12423600
 },
 {
   "npp": "NPP Phúc Thịnh",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4,
   "thanh_tien": 1728000
 },
 {
   "npp": "NPP Phúc Thịnh",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.32,
   "thanh_tien": 3160800
 },
 {
   "npp": "NPP Phúc Thịnh",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.6,
   "thanh_tien": 1555200
 },
 {
   "npp": "NPP Phúc Thịnh",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.25,
   "thanh_tien": 3564000
 },
 {
   "npp": "NPP Phúc Thịnh",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.43,
   "thanh_tien": 4075200
 },
 {
   "npp": "NPP Phúc Thịnh",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.02,
   "thanh_tien": 72
 },
 {
   "npp": "NPP Phúc Thịnh",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.07,
   "thanh_tien": 2188800
 },
 {
   "npp": "NPP Phúc Thịnh",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.02,
   "thanh_tien": 2167200
 },
 {
   "npp": "NPP Phúc Thịnh",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10,
   "thanh_tien": 4320000
 },
 {
   "npp": "NPP Phúc Thịnh",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.97,
   "thanh_tien": 4737600
 },
 {
   "npp": "NPP Phúc Thịnh",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.18,
   "thanh_tien": 5263200
 },
 {
   "npp": "NPP Phúc Thịnh",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 13.35,
   "thanh_tien": 5767200
 },
 {
   "npp": "NPP Phúc Thịnh",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.45,
   "thanh_tien": 4514400
 },
 {
   "npp": "NPP Phúc Thịnh",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 55,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Phúc Thịnh",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 20,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Phương Hà",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.04,
   "thanh_tien": 5548
 },
 {
   "npp": "NPP Phương Hà",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0,
   "thanh_tien": -3
 },
 {
   "npp": "NPP Phương Hà",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.07,
   "thanh_tien": 288
 },
 {
   "npp": "NPP Phương Hà",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.07,
   "thanh_tien": 288
 },
 {
   "npp": "NPP Phương Hà",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.18,
   "thanh_tien": 792
 },
 {
   "npp": "NPP Phương Hà",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.02,
   "thanh_tien": 72
 },
 {
   "npp": "NPP Phương Hà",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.01,
   "thanh_tien": 36
 },
 {
   "npp": "NPP Phương Hà",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.83,
   "thanh_tien": 1656000
 },
 {
   "npp": "NPP Phương Hà",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.01,
   "thanh_tien": 36
 },
 {
   "npp": "NPP Phương Hà",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.02,
   "thanh_tien": 72
 },
 {
   "npp": "NPP Phương Hà",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.5,
   "thanh_tien": 4104000
 },
 {
   "npp": "NPP Phương Hà",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.41,
   "thanh_tien": 6084
 },
 {
   "npp": "NPP Phương Hà",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.02,
   "thanh_tien": 108
 },
 {
   "npp": "NPP Phương Hà",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.67,
   "thanh_tien": 720
 },
 {
   "npp": "NPP Phương Hà",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.82,
   "thanh_tien": 3564
 },
 {
   "npp": "NPP Phương Hà",
   "ma_sp": "HH00019",
   "ten_sp": "Cá cơm tê cay bà Tuyết 18g (18g/gói*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.94,
   "thanh_tien": 3018040
 },
 {
   "npp": "NPP Phương Hà",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.5,
   "thanh_tien": 21456
 },
 {
   "npp": "NPP Phương Hà",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.91,
   "thanh_tien": 39168
 },
 {
   "npp": "NPP Phương Hà",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.3,
   "thanh_tien": 56304
 },
 {
   "npp": "NPP Phương Hà",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.08,
   "thanh_tien": 3456
 },
 {
   "npp": "NPP Phương Hà",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.43,
   "thanh_tien": 18576
 },
 {
   "npp": "NPP Phương Hà",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 46,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Phương Hà",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 131,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Phương Đông",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.04,
   "thanh_tien": 5548
 },
 {
   "npp": "NPP Phương Đông",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.77,
   "thanh_tien": 1067990
 },
 {
   "npp": "NPP Phương Đông",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.95,
   "thanh_tien": 799883
 },
 {
   "npp": "NPP Phương Đông",
   "ma_sp": "HH00100",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*120 gói/thùng kèm sốt",
   "ma_dvt": "Thùng",
   "so_luong": 0.07,
   "thanh_tien": 6825
 },
 {
   "npp": "NPP Phương Đông",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.77,
   "thanh_tien": 5515200
 },
 {
   "npp": "NPP Phương Đông",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 23.87,
   "thanh_tien": 10310400
 },
 {
   "npp": "NPP Phương Đông",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 31.1,
   "thanh_tien": 13435200
 },
 {
   "npp": "NPP Phương Đông",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.67,
   "thanh_tien": 720
 },
 {
   "npp": "NPP Phương Đông",
   "ma_sp": "HH00082",
   "ten_sp": "Bim bim tăm cay lạc hồng vr1 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.03,
   "thanh_tien": 144
 },
 {
   "npp": "NPP Phương Đông",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 11.28,
   "thanh_tien": 4874400
 },
 {
   "npp": "NPP Phương Đông",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 187.3,
   "thanh_tien": 80913600
 },
 {
   "npp": "NPP Phương Đông",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 36.92,
   "thanh_tien": 15948000
 },
 {
   "npp": "NPP Phương Đông",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 16.33,
   "thanh_tien": 7056000
 },
 {
   "npp": "NPP Phương Đông",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 11.92,
   "thanh_tien": 5148000
 },
 {
   "npp": "NPP Phương Đông",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 17.02,
   "thanh_tien": 7351200
 },
 {
   "npp": "NPP Phương Đông",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 22.08,
   "thanh_tien": 9540000
 },
 {
   "npp": "NPP Phương Đông",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.33,
   "thanh_tien": 576
 },
 {
   "npp": "NPP Phương Đông",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 17.5,
   "thanh_tien": 7560000
 },
 {
   "npp": "NPP Phương Đông",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 16,
   "thanh_tien": 6912000
 },
 {
   "npp": "NPP Phương Đông",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.4,
   "thanh_tien": 1900800
 },
 {
   "npp": "NPP Phương Đông",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 14.67,
   "thanh_tien": 6336000
 },
 {
   "npp": "NPP Phương Đông",
   "ma_sp": "HH00019",
   "ten_sp": "Cá cơm tê cay bà Tuyết 18g (18g/gói*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 60.1,
   "thanh_tien": 46036600
 },
 {
   "npp": "NPP Phương Đông",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 29.87,
   "thanh_tien": 12902400
 },
 {
   "npp": "NPP Phương Đông",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 30.42,
   "thanh_tien": 13140000
 },
 {
   "npp": "NPP Phương Đông",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 26.1,
   "thanh_tien": 11275200
 },
 {
   "npp": "NPP Phương Đông",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 29.12,
   "thanh_tien": 12578400
 },
 {
   "npp": "NPP Phương Đông",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 26.23,
   "thanh_tien": 11332800
 },
 {
   "npp": "NPP Phương Đông",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 292,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Phương Đông",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 145,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Sơn Lâm",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0,
   "thanh_tien": 22
 },
 {
   "npp": "NPP Sơn Lâm",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.13,
   "thanh_tien": 1353600
 },
 {
   "npp": "NPP Sơn Lâm",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.9,
   "thanh_tien": 3844800
 },
 {
   "npp": "NPP Sơn Lâm",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 27.25,
   "thanh_tien": 11772000
 },
 {
   "npp": "NPP Sơn Lâm",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.92,
   "thanh_tien": 828
 },
 {
   "npp": "NPP Sơn Lâm",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.08,
   "thanh_tien": 1328400
 },
 {
   "npp": "NPP Sơn Lâm",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.33,
   "thanh_tien": 576
 },
 {
   "npp": "NPP Sơn Lâm",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.08,
   "thanh_tien": 36
 },
 {
   "npp": "NPP Sơn Lâm",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.08,
   "thanh_tien": 2628000
 },
 {
   "npp": "NPP Sơn Lâm",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.5,
   "thanh_tien": 3240000
 },
 {
   "npp": "NPP Sơn Lâm",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.83,
   "thanh_tien": 4248000
 },
 {
   "npp": "NPP Sơn Lâm",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.33,
   "thanh_tien": 1008000
 },
 {
   "npp": "NPP Sơn Lâm",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.2,
   "thanh_tien": 2246400
 },
 {
   "npp": "NPP Sơn Lâm",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 15.3,
   "thanh_tien": 6609600
 },
 {
   "npp": "NPP Sơn Lâm",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.9,
   "thanh_tien": 5572800
 },
 {
   "npp": "NPP Sơn Lâm",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 14.97,
   "thanh_tien": 6465600
 },
 {
   "npp": "NPP Sơn Lâm",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 11.87,
   "thanh_tien": 5126400
 },
 {
   "npp": "NPP Sơn Lâm",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 33,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Sơn Lâm",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 14,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Thanh Bình",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.2,
   "thanh_tien": 2774
 },
 {
   "npp": "NPP Thanh Bình",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.13,
   "thanh_tien": 105829
 },
 {
   "npp": "NPP Thanh Bình",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.87,
   "thanh_tien": 1670400
 },
 {
   "npp": "NPP Thanh Bình",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.8,
   "thanh_tien": 3456
 },
 {
   "npp": "NPP Thanh Bình",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 14.23,
   "thanh_tien": 6148800
 },
 {
   "npp": "NPP Thanh Bình",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0,
   "thanh_tien": 144
 },
 {
   "npp": "NPP Thanh Bình",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.04,
   "thanh_tien": 18
 },
 {
   "npp": "NPP Thanh Bình",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.3,
   "thanh_tien": 9936
 },
 {
   "npp": "NPP Thanh Bình",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4,
   "thanh_tien": 1728000
 },
 {
   "npp": "NPP Thanh Bình",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.49,
   "thanh_tien": 21168
 },
 {
   "npp": "NPP Thanh Bình",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.92,
   "thanh_tien": 396
 },
 {
   "npp": "NPP Thanh Bình",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.21,
   "thanh_tien": 8928
 },
 {
   "npp": "NPP Thanh Bình",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.58,
   "thanh_tien": 252
 },
 {
   "npp": "NPP Thanh Bình",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.42,
   "thanh_tien": 180
 },
 {
   "npp": "NPP Thanh Bình",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.13,
   "thanh_tien": 576
 },
 {
   "npp": "NPP Thanh Bình",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.33,
   "thanh_tien": 144
 },
 {
   "npp": "NPP Thanh Bình",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.43,
   "thanh_tien": 1836
 },
 {
   "npp": "NPP Thanh Bình",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.03,
   "thanh_tien": 14112
 },
 {
   "npp": "NPP Thanh Bình",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.83,
   "thanh_tien": 359856
 },
 {
   "npp": "NPP Thanh Bình",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.03,
   "thanh_tien": 144
 },
 {
   "npp": "NPP Thanh Bình",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 46,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Thanh Bình",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 122,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Thành Hân",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 51.6,
   "thanh_tien": 71569200
 },
 {
   "npp": "NPP Thành Hân",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0,
   "thanh_tien": 122
 },
 {
   "npp": "NPP Thành Hân",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 15.33,
   "thanh_tien": 6624000
 },
 {
   "npp": "NPP Thành Hân",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.05,
   "thanh_tien": 3477600
 },
 {
   "npp": "NPP Thành Hân",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 24.53,
   "thanh_tien": 10598400
 },
 {
   "npp": "NPP Thành Hân",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 25.25,
   "thanh_tien": 10908000
 },
 {
   "npp": "NPP Thành Hân",
   "ma_sp": "HH00082",
   "ten_sp": "Bim bim tăm cay lạc hồng vr1 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.83,
   "thanh_tien": 1656000
 },
 {
   "npp": "NPP Thành Hân",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.25,
   "thanh_tien": 540
 },
 {
   "npp": "NPP Thành Hân",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 114.33,
   "thanh_tien": 49392000
 },
 {
   "npp": "NPP Thành Hân",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 37.33,
   "thanh_tien": 16128000
 },
 {
   "npp": "NPP Thành Hân",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.92,
   "thanh_tien": 2124000
 },
 {
   "npp": "NPP Thành Hân",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.25,
   "thanh_tien": 5292000
 },
 {
   "npp": "NPP Thành Hân",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 24.67,
   "thanh_tien": 10656000
 },
 {
   "npp": "NPP Thành Hân",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 16.58,
   "thanh_tien": 7164000
 },
 {
   "npp": "NPP Thành Hân",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7,
   "thanh_tien": 3024000
 },
 {
   "npp": "NPP Thành Hân",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 16.5,
   "thanh_tien": 7128000
 },
 {
   "npp": "NPP Thành Hân",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.33,
   "thanh_tien": 4032000
 },
 {
   "npp": "NPP Thành Hân",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.5,
   "thanh_tien": 3240000
 },
 {
   "npp": "NPP Thành Hân",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 15.5,
   "thanh_tien": 6696000
 },
 {
   "npp": "NPP Thành Hân",
   "ma_sp": "HH00019",
   "ten_sp": "Cá cơm tê cay bà Tuyết 18g (18g/gói*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 11.5,
   "thanh_tien": 8809000
 },
 {
   "npp": "NPP Thành Hân",
   "ma_sp": "HH00083",
   "ten_sp": "Cá cơm ngon ngọt bà Tuyết 18g (18g/gói *200gói/lốc)",
   "ma_dvt": "Thùng",
   "so_luong": 0.3,
   "thanh_tien": 2298
 },
 {
   "npp": "NPP Thành Hân",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 13.38,
   "thanh_tien": 5781600
 },
 {
   "npp": "NPP Thành Hân",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.53,
   "thanh_tien": 2822400
 },
 {
   "npp": "NPP Thành Hân",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4,
   "thanh_tien": 1728000
 },
 {
   "npp": "NPP Thành Hân",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.37,
   "thanh_tien": 1454400
 },
 {
   "npp": "NPP Thành Hân",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.37,
   "thanh_tien": 3183840
 },
 {
   "npp": "NPP Thành Hân",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 67,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Thành Hân",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 206,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Thành Lụa",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.18,
   "thanh_tien": 5797660
 },
 {
   "npp": "NPP Thành Lụa",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.5,
   "thanh_tien": 5473021
 },
 {
   "npp": "NPP Thành Lụa",
   "ma_sp": "HH00099",
   "ten_sp": "Chân gà có xương bà Tuyết (40gram*90 gói/thùng) kèm sốt",
   "ma_dvt": "Thùng",
   "so_luong": 0.03,
   "thanh_tien": 23
 },
 {
   "npp": "NPP Thành Lụa",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.68,
   "thanh_tien": 7272
 },
 {
   "npp": "NPP Thành Lụa",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.27,
   "thanh_tien": 5472
 },
 {
   "npp": "NPP Thành Lụa",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.25,
   "thanh_tien": 972
 },
 {
   "npp": "NPP Thành Lụa",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.58,
   "thanh_tien": 4140000
 },
 {
   "npp": "NPP Thành Lụa",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.17,
   "thanh_tien": 936
 },
 {
   "npp": "NPP Thành Lụa",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.58,
   "thanh_tien": 1548000
 },
 {
   "npp": "NPP Thành Lụa",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.08,
   "thanh_tien": 1764000
 },
 {
   "npp": "NPP Thành Lụa",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4,
   "thanh_tien": 1728000
 },
 {
   "npp": "NPP Thành Lụa",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.83,
   "thanh_tien": 1656000
 },
 {
   "npp": "NPP Thành Lụa",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.67,
   "thanh_tien": 2016000
 },
 {
   "npp": "NPP Thành Lụa",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.33,
   "thanh_tien": 1872000
 },
 {
   "npp": "NPP Thành Lụa",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.77,
   "thanh_tien": 2059200
 },
 {
   "npp": "NPP Thành Lụa",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.33,
   "thanh_tien": 144
 },
 {
   "npp": "NPP Thành Lụa",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.67,
   "thanh_tien": 2016000
 },
 {
   "npp": "NPP Thành Lụa",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.3,
   "thanh_tien": 4017600
 },
 {
   "npp": "NPP Thành Lụa",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 13.1,
   "thanh_tien": 5659200
 },
 {
   "npp": "NPP Thành Lụa",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.77,
   "thanh_tien": 5515200
 },
 {
   "npp": "NPP Thành Lụa",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.5,
   "thanh_tien": 4536000
 },
 {
   "npp": "NPP Thành Lụa",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 15.6,
   "thanh_tien": 6739200
 },
 {
   "npp": "NPP Thành Lụa",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 19,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Thành Lụa",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 60,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Thành Thanh",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.65,
   "thanh_tien": 11997550
 },
 {
   "npp": "NPP Thành Thanh",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0,
   "thanh_tien": 2
 },
 {
   "npp": "NPP Thành Thanh",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.08,
   "thanh_tien": 3492000
 },
 {
   "npp": "NPP Thành Thanh",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.77,
   "thanh_tien": 2059200
 },
 {
   "npp": "NPP Thành Thanh",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 70.93,
   "thanh_tien": 30643200
 },
 {
   "npp": "NPP Thành Thanh",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10,
   "thanh_tien": 4320000
 },
 {
   "npp": "NPP Thành Thanh",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.92,
   "thanh_tien": 4287600
 },
 {
   "npp": "NPP Thành Thanh",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 21.18,
   "thanh_tien": 9147600
 },
 {
   "npp": "NPP Thành Thanh",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.85,
   "thanh_tien": 3823200
 },
 {
   "npp": "NPP Thành Thanh",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.28,
   "thanh_tien": 5306400
 },
 {
   "npp": "NPP Thành Thanh",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.96,
   "thanh_tien": 4301280
 },
 {
   "npp": "NPP Thành Thanh",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 41,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Thành Thanh",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 136,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Thái Hoà",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 20.76,
   "thanh_tien": 28794120
 },
 {
   "npp": "NPP Thái Hoà",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.17,
   "thanh_tien": 5192454
 },
 {
   "npp": "NPP Thái Hoà",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.8,
   "thanh_tien": 4233600
 },
 {
   "npp": "NPP Thái Hoà",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.37,
   "thanh_tien": 4046400
 },
 {
   "npp": "NPP Thái Hoà",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 20.85,
   "thanh_tien": 9007200
 },
 {
   "npp": "NPP Thái Hoà",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.32,
   "thanh_tien": 4028400
 },
 {
   "npp": "NPP Thái Hoà",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0,
   "thanh_tien": 36
 },
 {
   "npp": "NPP Thái Hoà",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.33,
   "thanh_tien": 576
 },
 {
   "npp": "NPP Thái Hoà",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.58,
   "thanh_tien": 252
 },
 {
   "npp": "NPP Thái Hoà",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.67,
   "thanh_tien": 1152000
 },
 {
   "npp": "NPP Thái Hoà",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.42,
   "thanh_tien": 612
 },
 {
   "npp": "NPP Thái Hoà",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.15,
   "thanh_tien": 1360800
 },
 {
   "npp": "NPP Thái Hoà",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.17,
   "thanh_tien": 936
 },
 {
   "npp": "NPP Thái Hoà",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 20.12,
   "thanh_tien": 8690400
 },
 {
   "npp": "NPP Thái Hoà",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.4,
   "thanh_tien": 1728
 },
 {
   "npp": "NPP Thái Hoà",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.69,
   "thanh_tien": 4618080
 },
 {
   "npp": "NPP Thái Hoà",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.35,
   "thanh_tien": 58176
 },
 {
   "npp": "NPP Thái Hoà",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.4,
   "thanh_tien": 2764800
 },
 {
   "npp": "NPP Thái Hoà",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 14,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Thái Hoà",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 52,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Thông Thơm",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 38.6,
   "thanh_tien": 53538200
 },
 {
   "npp": "NPP Thông Thơm",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 17.75,
   "thanh_tien": 14945497
 },
 {
   "npp": "NPP Thông Thơm",
   "ma_sp": "HH00100",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*120 gói/thùng kèm sốt",
   "ma_dvt": "Thùng",
   "so_luong": 1,
   "thanh_tien": 910
 },
 {
   "npp": "NPP Thông Thơm",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 18.5,
   "thanh_tien": 7992000
 },
 {
   "npp": "NPP Thông Thơm",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 16.4,
   "thanh_tien": 7084800
 },
 {
   "npp": "NPP Thông Thơm",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 87.08,
   "thanh_tien": 37620000
 },
 {
   "npp": "NPP Thông Thơm",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.5,
   "thanh_tien": 1944000
 },
 {
   "npp": "NPP Thông Thơm",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.42,
   "thanh_tien": 180
 },
 {
   "npp": "NPP Thông Thơm",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.33,
   "thanh_tien": 144
 },
 {
   "npp": "NPP Thông Thơm",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.08,
   "thanh_tien": 36
 },
 {
   "npp": "NPP Thông Thơm",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.08,
   "thanh_tien": 36
 },
 {
   "npp": "NPP Thông Thơm",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.42,
   "thanh_tien": 3636000
 },
 {
   "npp": "NPP Thông Thơm",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.08,
   "thanh_tien": 4356000
 },
 {
   "npp": "NPP Thông Thơm",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.58,
   "thanh_tien": 4140000
 },
 {
   "npp": "NPP Thông Thơm",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.5,
   "thanh_tien": 3672000
 },
 {
   "npp": "NPP Thông Thơm",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 20.3,
   "thanh_tien": 8768160
 },
 {
   "npp": "NPP Thông Thơm",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 16.6,
   "thanh_tien": 7169760
 },
 {
   "npp": "NPP Thông Thơm",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 13.6,
   "thanh_tien": 5875200
 },
 {
   "npp": "NPP Thông Thơm",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 19.8,
   "thanh_tien": 8553600
 },
 {
   "npp": "NPP Thông Thơm",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 22.2,
   "thanh_tien": 9590400
 },
 {
   "npp": "NPP Thông Thơm",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 65,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Thăng Hương",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 16.48,
   "thanh_tien": 22857760
 },
 {
   "npp": "NPP Thăng Hương",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0,
   "thanh_tien": -4
 },
 {
   "npp": "NPP Thăng Hương",
   "ma_sp": "HH00100",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*120 gói/thùng kèm sốt",
   "ma_dvt": "Thùng",
   "so_luong": 0.15,
   "thanh_tien": 1365
 },
 {
   "npp": "NPP Thăng Hương",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 18.57,
   "thanh_tien": 8020800
 },
 {
   "npp": "NPP Thăng Hương",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 77.25,
   "thanh_tien": 33372000
 },
 {
   "npp": "NPP Thăng Hương",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 15.25,
   "thanh_tien": 6588000
 },
 {
   "npp": "NPP Thăng Hương",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10,
   "thanh_tien": 4320000
 },
 {
   "npp": "NPP Thăng Hương",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 13,
   "thanh_tien": 5616000
 },
 {
   "npp": "NPP Thăng Hương",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 14.75,
   "thanh_tien": 6372000
 },
 {
   "npp": "NPP Thăng Hương",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.42,
   "thanh_tien": 5364000
 },
 {
   "npp": "NPP Thăng Hương",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 13.08,
   "thanh_tien": 5652000
 },
 {
   "npp": "NPP Thăng Hương",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 13.83,
   "thanh_tien": 5976000
 },
 {
   "npp": "NPP Thăng Hương",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.17,
   "thanh_tien": 3528000
 },
 {
   "npp": "NPP Thăng Hương",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 18.21,
   "thanh_tien": 7866000
 },
 {
   "npp": "NPP Thăng Hương",
   "ma_sp": "HH00019",
   "ten_sp": "Cá cơm tê cay bà Tuyết 18g (18g/gói*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.5,
   "thanh_tien": 38683
 },
 {
   "npp": "NPP Thăng Hương",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 11.6,
   "thanh_tien": 5011200
 },
 {
   "npp": "NPP Thăng Hương",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.6,
   "thanh_tien": 4147200
 },
 {
   "npp": "NPP Thăng Hương",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.35,
   "thanh_tien": 4471200
 },
 {
   "npp": "NPP Thăng Hương",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.15,
   "thanh_tien": 3088800
 },
 {
   "npp": "NPP Thăng Hương",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.95,
   "thanh_tien": 4730400
 },
 {
   "npp": "NPP Thăng Hương",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 50,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Thăng Hương",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 30,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Thảo Nam",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0,
   "thanh_tien": 46
 },
 {
   "npp": "NPP Thảo Nam",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.33,
   "thanh_tien": 1008000
 },
 {
   "npp": "NPP Thảo Nam",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 29.97,
   "thanh_tien": 12945600
 },
 {
   "npp": "NPP Thảo Nam",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 15.78,
   "thanh_tien": 6818400
 },
 {
   "npp": "NPP Thảo Nam",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.48,
   "thanh_tien": 2800800
 },
 {
   "npp": "NPP Thảo Nam",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 21.36,
   "thanh_tien": 9226800
 },
 {
   "npp": "NPP Thảo Nam",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 14.13,
   "thanh_tien": 6105600
 },
 {
   "npp": "NPP Thảo Nam",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 34.17,
   "thanh_tien": 14760000
 },
 {
   "npp": "NPP Thảo Nam",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 22.42,
   "thanh_tien": 9684000
 },
 {
   "npp": "NPP Thảo Nam",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4,
   "thanh_tien": 1728000
 },
 {
   "npp": "NPP Thảo Nam",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.06,
   "thanh_tien": 252
 },
 {
   "npp": "NPP Thảo Nam",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.67,
   "thanh_tien": 2448000
 },
 {
   "npp": "NPP Thảo Nam",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.8,
   "thanh_tien": 3801600
 },
 {
   "npp": "NPP Thảo Nam",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.97,
   "thanh_tien": 3012480
 },
 {
   "npp": "NPP Thảo Nam",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.9,
   "thanh_tien": 3412800
 },
 {
   "npp": "NPP Thảo Nam",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 160,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Thảo Nam",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 100,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Thảo Thắng",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8,
   "thanh_tien": 11096000
 },
 {
   "npp": "NPP Thảo Thắng",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.05,
   "thanh_tien": 62415
 },
 {
   "npp": "NPP Thảo Thắng",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0,
   "thanh_tien": 45
 },
 {
   "npp": "NPP Thảo Thắng",
   "ma_sp": "HH00100",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*120 gói/thùng kèm sốt",
   "ma_dvt": "Thùng",
   "so_luong": 3.75,
   "thanh_tien": 3412500
 },
 {
   "npp": "NPP Thảo Thắng",
   "ma_sp": "HH00099",
   "ten_sp": "Chân gà có xương bà Tuyết (40gram*90 gói/thùng) kèm sốt",
   "ma_dvt": "Thùng",
   "so_luong": 0.13,
   "thanh_tien": 92
 },
 {
   "npp": "NPP Thảo Thắng",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.13,
   "thanh_tien": 576
 },
 {
   "npp": "NPP Thảo Thắng",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.02,
   "thanh_tien": 72
 },
 {
   "npp": "NPP Thảo Thắng",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.03,
   "thanh_tien": 144
 },
 {
   "npp": "NPP Thảo Thắng",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.05,
   "thanh_tien": 216
 },
 {
   "npp": "NPP Thảo Thắng",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.06,
   "thanh_tien": 252
 },
 {
   "npp": "NPP Thảo Thắng",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 59.39,
   "thanh_tien": 25657200
 },
 {
   "npp": "NPP Thảo Thắng",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.25,
   "thanh_tien": 1836000
 },
 {
   "npp": "NPP Thảo Thắng",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.19,
   "thanh_tien": 9468
 },
 {
   "npp": "NPP Thảo Thắng",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.94,
   "thanh_tien": 8388
 },
 {
   "npp": "NPP Thảo Thắng",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.07,
   "thanh_tien": 2192400
 },
 {
   "npp": "NPP Thảo Thắng",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.3,
   "thanh_tien": 3153600
 },
 {
   "npp": "NPP Thảo Thắng",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.65,
   "thanh_tien": 2008800
 },
 {
   "npp": "NPP Thảo Thắng",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.02,
   "thanh_tien": 1044
 },
 {
   "npp": "NPP Thảo Thắng",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.13,
   "thanh_tien": 576
 },
 {
   "npp": "NPP Thảo Thắng",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.26,
   "thanh_tien": 1407600
 },
 {
   "npp": "NPP Thảo Thắng",
   "ma_sp": "HH00019",
   "ten_sp": "Cá cơm tê cay bà Tuyết 18g (18g/gói*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 27.14,
   "thanh_tien": 20789240
 },
 {
   "npp": "NPP Thảo Thắng",
   "ma_sp": "HH00083",
   "ten_sp": "Cá cơm ngon ngọt bà Tuyết 18g (18g/gói *200gói/lốc)",
   "ma_dvt": "Thùng",
   "so_luong": 0.12,
   "thanh_tien": 8809
 },
 {
   "npp": "NPP Thảo Thắng",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 15.18,
   "thanh_tien": 6556320
 },
 {
   "npp": "NPP Thảo Thắng",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.62,
   "thanh_tien": 3290400
 },
 {
   "npp": "NPP Thảo Thắng",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 11.08,
   "thanh_tien": 4786560
 },
 {
   "npp": "NPP Thảo Thắng",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.49,
   "thanh_tien": 2805120
 },
 {
   "npp": "NPP Thảo Thắng",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.47,
   "thanh_tien": 2361600
 },
 {
   "npp": "NPP Thảo Thắng",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 59,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Thảo Thắng",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 53,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Thảo Xuân",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.27,
   "thanh_tien": 1761490
 },
 {
   "npp": "NPP Thảo Xuân",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.81,
   "thanh_tien": 7416654
 },
 {
   "npp": "NPP Thảo Xuân",
   "ma_sp": "HH00100",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*120 gói/thùng kèm sốt",
   "ma_dvt": "Thùng",
   "so_luong": 0.87,
   "thanh_tien": 79625
 },
 {
   "npp": "NPP Thảo Xuân",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.3,
   "thanh_tien": 4449600
 },
 {
   "npp": "NPP Thảo Xuân",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.58,
   "thanh_tien": 1980000
 },
 {
   "npp": "NPP Thảo Xuân",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.6,
   "thanh_tien": 4579200
 },
 {
   "npp": "NPP Thảo Xuân",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.5,
   "thanh_tien": 4104000
 },
 {
   "npp": "NPP Thảo Xuân",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.58,
   "thanh_tien": 252
 },
 {
   "npp": "NPP Thảo Xuân",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 20.95,
   "thanh_tien": 9050400
 },
 {
   "npp": "NPP Thảo Xuân",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.08,
   "thanh_tien": 4356000
 },
 {
   "npp": "NPP Thảo Xuân",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.83,
   "thanh_tien": 1224000
 },
 {
   "npp": "NPP Thảo Xuân",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.17,
   "thanh_tien": 1368000
 },
 {
   "npp": "NPP Thảo Xuân",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.28,
   "thanh_tien": 2282400
 },
 {
   "npp": "NPP Thảo Xuân",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.5,
   "thanh_tien": 2376000
 },
 {
   "npp": "NPP Thảo Xuân",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.17,
   "thanh_tien": 1368000
 },
 {
   "npp": "NPP Thảo Xuân",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.83,
   "thanh_tien": 2520000
 },
 {
   "npp": "NPP Thảo Xuân",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.09,
   "thanh_tien": 2199600
 },
 {
   "npp": "NPP Thảo Xuân",
   "ma_sp": "HH00019",
   "ten_sp": "Cá cơm tê cay bà Tuyết 18g (18g/gói*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.95,
   "thanh_tien": 5323700
 },
 {
   "npp": "NPP Thảo Xuân",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.59,
   "thanh_tien": 4573440
 },
 {
   "npp": "NPP Thảo Xuân",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.77,
   "thanh_tien": 1627200
 },
 {
   "npp": "NPP Thảo Xuân",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.23,
   "thanh_tien": 1396800
 },
 {
   "npp": "NPP Thảo Xuân",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.4,
   "thanh_tien": 1728
 },
 {
   "npp": "NPP Thảo Xuân",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 49,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Thảo Xuân",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 85,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Thắng Lợi",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.13,
   "thanh_tien": 173375
 },
 {
   "npp": "NPP Thắng Lợi",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0,
   "thanh_tien": 68
 },
 {
   "npp": "NPP Thắng Lợi",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.7,
   "thanh_tien": 2030400
 },
 {
   "npp": "NPP Thắng Lợi",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.87,
   "thanh_tien": 8064
 },
 {
   "npp": "NPP Thắng Lợi",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.24,
   "thanh_tien": 1044
 },
 {
   "npp": "NPP Thắng Lợi",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.97,
   "thanh_tien": 5601600
 },
 {
   "npp": "NPP Thắng Lợi",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.18,
   "thanh_tien": 9432
 },
 {
   "npp": "NPP Thắng Lợi",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.01,
   "thanh_tien": 36
 },
 {
   "npp": "NPP Thắng Lợi",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.86,
   "thanh_tien": 4690800
 },
 {
   "npp": "NPP Thắng Lợi",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.56,
   "thanh_tien": 3697200
 },
 {
   "npp": "NPP Thắng Lợi",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.6,
   "thanh_tien": 1123200
 },
 {
   "npp": "NPP Thắng Lợi",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.82,
   "thanh_tien": 1652400
 },
 {
   "npp": "NPP Thắng Lợi",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.29,
   "thanh_tien": 990
 },
 {
   "npp": "NPP Thắng Lợi",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.16,
   "thanh_tien": 9324
 },
 {
   "npp": "NPP Thắng Lợi",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.16,
   "thanh_tien": 2660400
 },
 {
   "npp": "NPP Thắng Lợi",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.75,
   "thanh_tien": 2052000
 },
 {
   "npp": "NPP Thắng Lợi",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.07,
   "thanh_tien": 288
 },
 {
   "npp": "NPP Thắng Lợi",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.57,
   "thanh_tien": 1540800
 },
 {
   "npp": "NPP Thắng Lợi",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.4,
   "thanh_tien": 1728
 },
 {
   "npp": "NPP Thắng Lợi",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.43,
   "thanh_tien": 1872
 },
 {
   "npp": "NPP Thắng Lợi",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 252,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Thắng Lợi",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 281,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Tiên Lan",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.03,
   "thanh_tien": 34675
 },
 {
   "npp": "NPP Tiên Lan",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.2,
   "thanh_tien": 2774
 },
 {
   "npp": "NPP Tiên Lan",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.16,
   "thanh_tien": 133366
 },
 {
   "npp": "NPP Tiên Lan",
   "ma_sp": "HH00100",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*120 gói/thùng kèm sốt",
   "ma_dvt": "Thùng",
   "so_luong": 0.1,
   "thanh_tien": 91
 },
 {
   "npp": "NPP Tiên Lan",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.37,
   "thanh_tien": 1584
 },
 {
   "npp": "NPP Tiên Lan",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.37,
   "thanh_tien": 1584
 },
 {
   "npp": "NPP Tiên Lan",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.52,
   "thanh_tien": 2232
 },
 {
   "npp": "NPP Tiên Lan",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.7,
   "thanh_tien": 3326400
 },
 {
   "npp": "NPP Tiên Lan",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.17,
   "thanh_tien": 936
 },
 {
   "npp": "NPP Tiên Lan",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.08,
   "thanh_tien": 36
 },
 {
   "npp": "NPP Tiên Lan",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.74,
   "thanh_tien": 3204
 },
 {
   "npp": "NPP Tiên Lan",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.07,
   "thanh_tien": 4644
 },
 {
   "npp": "NPP Tiên Lan",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.16,
   "thanh_tien": 684
 },
 {
   "npp": "NPP Tiên Lan",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.08,
   "thanh_tien": 468
 },
 {
   "npp": "NPP Tiên Lan",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.08,
   "thanh_tien": 468
 },
 {
   "npp": "NPP Tiên Lan",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.41,
   "thanh_tien": 6084
 },
 {
   "npp": "NPP Tiên Lan",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.49,
   "thanh_tien": 1076400
 },
 {
   "npp": "NPP Tiên Lan",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.08,
   "thanh_tien": 900
 },
 {
   "npp": "NPP Tiên Lan",
   "ma_sp": "HH00019",
   "ten_sp": "Cá cơm tê cay bà Tuyết 18g (18g/gói*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7,
   "thanh_tien": 5362000
 },
 {
   "npp": "NPP Tiên Lan",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.13,
   "thanh_tien": 5472
 },
 {
   "npp": "NPP Tiên Lan",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.68,
   "thanh_tien": 29376
 },
 {
   "npp": "NPP Tiên Lan",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.46,
   "thanh_tien": 63216
 },
 {
   "npp": "NPP Tiên Lan",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.26,
   "thanh_tien": 11232
 },
 {
   "npp": "NPP Tiên Lan",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.39,
   "thanh_tien": 16992
 },
 {
   "npp": "NPP Tiên Lan",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 80,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Tiên Lan",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 98,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Tiến Thịnh",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 81.87,
   "thanh_tien": 113546755
 },
 {
   "npp": "NPP Tiến Thịnh",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.27,
   "thanh_tien": 381425
 },
 {
   "npp": "NPP Tiến Thịnh",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 55.25,
   "thanh_tien": 46520506
 },
 {
   "npp": "NPP Tiến Thịnh",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.4,
   "thanh_tien": 6048
 },
 {
   "npp": "NPP Tiến Thịnh",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.18,
   "thanh_tien": 792
 },
 {
   "npp": "NPP Tiến Thịnh",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.3,
   "thanh_tien": 4449600
 },
 {
   "npp": "NPP Tiến Thịnh",
   "ma_sp": "HH00082",
   "ten_sp": "Bim bim tăm cay lạc hồng vr1 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.02,
   "thanh_tien": 108
 },
 {
   "npp": "NPP Tiến Thịnh",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.08,
   "thanh_tien": 36
 },
 {
   "npp": "NPP Tiến Thịnh",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.17,
   "thanh_tien": 72
 },
 {
   "npp": "NPP Tiến Thịnh",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.83,
   "thanh_tien": 7884
 },
 {
   "npp": "NPP Tiến Thịnh",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.07,
   "thanh_tien": 288
 },
 {
   "npp": "NPP Tiến Thịnh",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.07,
   "thanh_tien": 324
 },
 {
   "npp": "NPP Tiến Thịnh",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.02,
   "thanh_tien": 72
 },
 {
   "npp": "NPP Tiến Thịnh",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.63,
   "thanh_tien": 2736
 },
 {
   "npp": "NPP Tiến Thịnh",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.42,
   "thanh_tien": 1836
 },
 {
   "npp": "NPP Tiến Thịnh",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.08,
   "thanh_tien": 36
 },
 {
   "npp": "NPP Tiến Thịnh",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.08,
   "thanh_tien": 324
 },
 {
   "npp": "NPP Tiến Thịnh",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.85,
   "thanh_tien": 1231200
 },
 {
   "npp": "NPP Tiến Thịnh",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.52,
   "thanh_tien": 1519200
 },
 {
   "npp": "NPP Tiến Thịnh",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.15,
   "thanh_tien": 2223360
 },
 {
   "npp": "NPP Tiến Thịnh",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.03,
   "thanh_tien": 1296
 },
 {
   "npp": "NPP Tiến Thịnh",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.75,
   "thanh_tien": 32544
 },
 {
   "npp": "NPP Tiến Thịnh",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 111,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Tiến Thịnh",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 88,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Trường Hằng",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.8,
   "thanh_tien": 6657600
 },
 {
   "npp": "NPP Trường Hằng",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0,
   "thanh_tien": 19
 },
 {
   "npp": "NPP Trường Hằng",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.5,
   "thanh_tien": 2808000
 },
 {
   "npp": "NPP Trường Hằng",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4,
   "thanh_tien": 1728000
 },
 {
   "npp": "NPP Trường Hằng",
   "ma_sp": "HH00082",
   "ten_sp": "Bim bim tăm cay lạc hồng vr1 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.75,
   "thanh_tien": 4644000
 },
 {
   "npp": "NPP Trường Hằng",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.33,
   "thanh_tien": 3168000
 },
 {
   "npp": "NPP Trường Hằng",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 46.18,
   "thanh_tien": 19947600
 },
 {
   "npp": "NPP Trường Hằng",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.5,
   "thanh_tien": 4104000
 },
 {
   "npp": "NPP Trường Hằng",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.55,
   "thanh_tien": 2829600
 },
 {
   "npp": "NPP Trường Hằng",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.92,
   "thanh_tien": 3852000
 },
 {
   "npp": "NPP Trường Hằng",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 16.08,
   "thanh_tien": 6948000
 },
 {
   "npp": "NPP Trường Hằng",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.5,
   "thanh_tien": 4536000
 },
 {
   "npp": "NPP Trường Hằng",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.17,
   "thanh_tien": 3528000
 },
 {
   "npp": "NPP Trường Hằng",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.08,
   "thanh_tien": 5220000
 },
 {
   "npp": "NPP Trường Hằng",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.75,
   "thanh_tien": 5508000
 },
 {
   "npp": "NPP Trường Hằng",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 23.3,
   "thanh_tien": 10065600
 },
 {
   "npp": "NPP Trường Hằng",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.5,
   "thanh_tien": 1080000
 },
 {
   "npp": "NPP Trường Hằng",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.83,
   "thanh_tien": 1653120
 },
 {
   "npp": "NPP Trường Hằng",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.1,
   "thanh_tien": 1771200
 },
 {
   "npp": "NPP Trường Hằng",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 23.7,
   "thanh_tien": 10238400
 },
 {
   "npp": "NPP Trường Hằng",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 24,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Trường Hằng",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 3,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Tuấn Cường",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 24.77,
   "thanh_tien": 34349055
 },
 {
   "npp": "NPP Tuấn Cường",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.43,
   "thanh_tien": 59641
 },
 {
   "npp": "NPP Tuấn Cường",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.17,
   "thanh_tien": 140329
 },
 {
   "npp": "NPP Tuấn Cường",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.13,
   "thanh_tien": 1353600
 },
 {
   "npp": "NPP Tuấn Cường",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.3,
   "thanh_tien": 1296
 },
 {
   "npp": "NPP Tuấn Cường",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.15,
   "thanh_tien": 648
 },
 {
   "npp": "NPP Tuấn Cường",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 11.75,
   "thanh_tien": 5076000
 },
 {
   "npp": "NPP Tuấn Cường",
   "ma_sp": "HH00082",
   "ten_sp": "Bim bim tăm cay lạc hồng vr1 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.1,
   "thanh_tien": 432
 },
 {
   "npp": "NPP Tuấn Cường",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.33,
   "thanh_tien": 1008000
 },
 {
   "npp": "NPP Tuấn Cường",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.96,
   "thanh_tien": 414
 },
 {
   "npp": "NPP Tuấn Cường",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 23.5,
   "thanh_tien": 10152000
 },
 {
   "npp": "NPP Tuấn Cường",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.07,
   "thanh_tien": 288
 },
 {
   "npp": "NPP Tuấn Cường",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.25,
   "thanh_tien": 540
 },
 {
   "npp": "NPP Tuấn Cường",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.08,
   "thanh_tien": 324
 },
 {
   "npp": "NPP Tuấn Cường",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.13,
   "thanh_tien": 486
 },
 {
   "npp": "NPP Tuấn Cường",
   "ma_sp": "HH00019",
   "ten_sp": "Cá cơm tê cay bà Tuyết 18g (18g/gói*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.2,
   "thanh_tien": 2451200
 },
 {
   "npp": "NPP Tuấn Cường",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.53,
   "thanh_tien": 3254400
 },
 {
   "npp": "NPP Tuấn Cường",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.43,
   "thanh_tien": 3211200
 },
 {
   "npp": "NPP Tuấn Cường",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.5,
   "thanh_tien": 3672000
 },
 {
   "npp": "NPP Tuấn Cường",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.1,
   "thanh_tien": 2635200
 },
 {
   "npp": "NPP Tuấn Cường",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.83,
   "thanh_tien": 792
 },
 {
   "npp": "NPP Tuấn Cường",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 90,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Tuấn Cường",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 19,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Tuấn Huyền",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.04,
   "thanh_tien": 5548
 },
 {
   "npp": "NPP Tuấn Huyền",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.08,
   "thanh_tien": 70157
 },
 {
   "npp": "NPP Tuấn Huyền",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.33,
   "thanh_tien": 2736000
 },
 {
   "npp": "NPP Tuấn Huyền",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.82,
   "thanh_tien": 3376800
 },
 {
   "npp": "NPP Tuấn Huyền",
   "ma_sp": "HH00082",
   "ten_sp": "Bim bim tăm cay lạc hồng vr1 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.24,
   "thanh_tien": 2264400
 },
 {
   "npp": "NPP Tuấn Huyền",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4,
   "thanh_tien": 1728000
 },
 {
   "npp": "NPP Tuấn Huyền",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.53,
   "thanh_tien": 3254400
 },
 {
   "npp": "NPP Tuấn Huyền",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1,
   "thanh_tien": 432
 },
 {
   "npp": "NPP Tuấn Huyền",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.32,
   "thanh_tien": 2300400
 },
 {
   "npp": "NPP Tuấn Huyền",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.4,
   "thanh_tien": 1900800
 },
 {
   "npp": "NPP Tuấn Huyền",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.89,
   "thanh_tien": 2113200
 },
 {
   "npp": "NPP Tuấn Huyền",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 13.2,
   "thanh_tien": 5702400
 },
 {
   "npp": "NPP Tuấn Huyền",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.03,
   "thanh_tien": 108
 },
 {
   "npp": "NPP Tuấn Huyền",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.03,
   "thanh_tien": 144
 },
 {
   "npp": "NPP Tuấn Huyền",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.91,
   "thanh_tien": 8244
 },
 {
   "npp": "NPP Tuấn Huyền",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.07,
   "thanh_tien": 3916800
 },
 {
   "npp": "NPP Tuấn Huyền",
   "ma_sp": "HH00019",
   "ten_sp": "Cá cơm tê cay bà Tuyết 18g (18g/gói*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 38.65,
   "thanh_tien": 29605900
 },
 {
   "npp": "NPP Tuấn Huyền",
   "ma_sp": "HH00083",
   "ten_sp": "Cá cơm ngon ngọt bà Tuyết 18g (18g/gói *200gói/lốc)",
   "ma_dvt": "Thùng",
   "so_luong": 0.74,
   "thanh_tien": 57067
 },
 {
   "npp": "NPP Tuấn Huyền",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.4,
   "thanh_tien": 3196800
 },
 {
   "npp": "NPP Tuấn Huyền",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.5,
   "thanh_tien": 2808000
 },
 {
   "npp": "NPP Tuấn Huyền",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.3,
   "thanh_tien": 5313600
 },
 {
   "npp": "NPP Tuấn Huyền",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.07,
   "thanh_tien": 288
 },
 {
   "npp": "NPP Tuấn Huyền",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.56,
   "thanh_tien": 1971360
 },
 {
   "npp": "NPP Tuấn Huyền",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 66,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Tuấn Huyền",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 39,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Tuấn Huê",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.03,
   "thanh_tien": 4161
 },
 {
   "npp": "NPP Tuấn Huê",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.05,
   "thanh_tien": 42085
 },
 {
   "npp": "NPP Tuấn Huê",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.02,
   "thanh_tien": 72
 },
 {
   "npp": "NPP Tuấn Huê",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.45,
   "thanh_tien": 6264
 },
 {
   "npp": "NPP Tuấn Huê",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.15,
   "thanh_tien": 648
 },
 {
   "npp": "NPP Tuấn Huê",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.05,
   "thanh_tien": 216
 },
 {
   "npp": "NPP Tuấn Huê",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.6,
   "thanh_tien": 2419200
 },
 {
   "npp": "NPP Tuấn Huê",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 14.23,
   "thanh_tien": 6148800
 },
 {
   "npp": "NPP Tuấn Huê",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.61,
   "thanh_tien": 2628
 },
 {
   "npp": "NPP Tuấn Huê",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.68,
   "thanh_tien": 7272
 },
 {
   "npp": "NPP Tuấn Huê",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.45,
   "thanh_tien": 1944
 },
 {
   "npp": "NPP Tuấn Huê",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.15,
   "thanh_tien": 4968
 },
 {
   "npp": "NPP Tuấn Huê",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.56,
   "thanh_tien": 1105200
 },
 {
   "npp": "NPP Tuấn Huê",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.42,
   "thanh_tien": 1476000
 },
 {
   "npp": "NPP Tuấn Huê",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.67,
   "thanh_tien": 1152000
 },
 {
   "npp": "NPP Tuấn Huê",
   "ma_sp": "HH00019",
   "ten_sp": "Cá cơm tê cay bà Tuyết 18g (18g/gói*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.06,
   "thanh_tien": 4213
 },
 {
   "npp": "NPP Tuấn Huê",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.06,
   "thanh_tien": 2592
 },
 {
   "npp": "NPP Tuấn Huê",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.07,
   "thanh_tien": 288
 },
 {
   "npp": "NPP Tuấn Huê",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.07,
   "thanh_tien": 288
 },
 {
   "npp": "NPP Tuấn Huê",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.02,
   "thanh_tien": 72
 },
 {
   "npp": "NPP Tuấn Huê",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 47,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Tuấn Vân",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.84,
   "thanh_tien": 10867145
 },
 {
   "npp": "NPP Tuấn Vân",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0,
   "thanh_tien": -1
 },
 {
   "npp": "NPP Tuấn Vân",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.52,
   "thanh_tien": 2232
 },
 {
   "npp": "NPP Tuấn Vân",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.48,
   "thanh_tien": 2088
 },
 {
   "npp": "NPP Tuấn Vân",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.08,
   "thanh_tien": 324
 },
 {
   "npp": "NPP Tuấn Vân",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.05,
   "thanh_tien": 216
 },
 {
   "npp": "NPP Tuấn Vân",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.05,
   "thanh_tien": 216
 },
 {
   "npp": "NPP Tuấn Vân",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 25,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Tuấn Yến",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.01,
   "thanh_tien": 11109870
 },
 {
   "npp": "NPP Tuấn Yến",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0,
   "thanh_tien": 26
 },
 {
   "npp": "NPP Tuấn Yến",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.8,
   "thanh_tien": 1209600
 },
 {
   "npp": "NPP Tuấn Yến",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.67,
   "thanh_tien": 1152000
 },
 {
   "npp": "NPP Tuấn Yến",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 17.87,
   "thanh_tien": 7718400
 },
 {
   "npp": "NPP Tuấn Yến",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4,
   "thanh_tien": 1728000
 },
 {
   "npp": "NPP Tuấn Yến",
   "ma_sp": "HH00082",
   "ten_sp": "Bim bim tăm cay lạc hồng vr1 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.42,
   "thanh_tien": 180
 },
 {
   "npp": "NPP Tuấn Yến",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 22.08,
   "thanh_tien": 9540000
 },
 {
   "npp": "NPP Tuấn Yến",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.67,
   "thanh_tien": 1584000
 },
 {
   "npp": "NPP Tuấn Yến",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.33,
   "thanh_tien": 2304000
 },
 {
   "npp": "NPP Tuấn Yến",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 15.33,
   "thanh_tien": 6624000
 },
 {
   "npp": "NPP Tuấn Yến",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.92,
   "thanh_tien": 2988000
 },
 {
   "npp": "NPP Tuấn Yến",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.27,
   "thanh_tien": 982768
 },
 {
   "npp": "NPP Tuấn Yến",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.33,
   "thanh_tien": 576
 },
 {
   "npp": "NPP Tuấn Yến",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.26,
   "thanh_tien": 9756
 },
 {
   "npp": "NPP Tuấn Yến",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.75,
   "thanh_tien": 1620000
 },
 {
   "npp": "NPP Tuấn Yến",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.08,
   "thanh_tien": 4356000
 },
 {
   "npp": "NPP Tuấn Yến",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 26.65,
   "thanh_tien": 11512800
 },
 {
   "npp": "NPP Tuấn Yến",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 14.3,
   "thanh_tien": 6177600
 },
 {
   "npp": "NPP Tuấn Yến",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.47,
   "thanh_tien": 3660480
 },
 {
   "npp": "NPP Tuấn Yến",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.81,
   "thanh_tien": 3372480
 },
 {
   "npp": "NPP Tuấn Yến",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.14,
   "thanh_tien": 2651040
 },
 {
   "npp": "NPP Tuấn Yến",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 31,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Tân Bích An",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.2,
   "thanh_tien": 4431742
 },
 {
   "npp": "NPP Tân Bích An",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.1,
   "thanh_tien": 1387
 },
 {
   "npp": "NPP Tân Bích An",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.62,
   "thanh_tien": 8946271
 },
 {
   "npp": "NPP Tân Bích An",
   "ma_sp": "HH00100",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*120 gói/thùng kèm sốt",
   "ma_dvt": "Thùng",
   "so_luong": 2,
   "thanh_tien": 1820000
 },
 {
   "npp": "NPP Tân Bích An",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4,
   "thanh_tien": 1728000
 },
 {
   "npp": "NPP Tân Bích An",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 16.6,
   "thanh_tien": 7171200
 },
 {
   "npp": "NPP Tân Bích An",
   "ma_sp": "HH00082",
   "ten_sp": "Bim bim tăm cay lạc hồng vr1 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.06,
   "thanh_tien": 252
 },
 {
   "npp": "NPP Tân Bích An",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.07,
   "thanh_tien": 288
 },
 {
   "npp": "NPP Tân Bích An",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 19.1,
   "thanh_tien": 8250768
 },
 {
   "npp": "NPP Tân Bích An",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.07,
   "thanh_tien": 324
 },
 {
   "npp": "NPP Tân Bích An",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.56,
   "thanh_tien": 1105200
 },
 {
   "npp": "NPP Tân Bích An",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.08,
   "thanh_tien": 900
 },
 {
   "npp": "NPP Tân Bích An",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.47,
   "thanh_tien": 1501200
 },
 {
   "npp": "NPP Tân Bích An",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.6,
   "thanh_tien": 1987200
 },
 {
   "npp": "NPP Tân Bích An",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.04,
   "thanh_tien": 882
 },
 {
   "npp": "NPP Tân Bích An",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.58,
   "thanh_tien": 1980000
 },
 {
   "npp": "NPP Tân Bích An",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.15,
   "thanh_tien": 1792800
 },
 {
   "npp": "NPP Tân Bích An",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.72,
   "thanh_tien": 2473200
 },
 {
   "npp": "NPP Tân Bích An",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.2,
   "thanh_tien": 3974400
 },
 {
   "npp": "NPP Tân Bích An",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.6,
   "thanh_tien": 1985760
 },
 {
   "npp": "NPP Tân Bích An",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.26,
   "thanh_tien": 2270880
 },
 {
   "npp": "NPP Tân Bích An",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.3,
   "thanh_tien": 2721600
 },
 {
   "npp": "NPP Tân Bích An",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.8,
   "thanh_tien": 2505600
 },
 {
   "npp": "NPP Tân Bích An",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 18,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Tân Bích An",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 123,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Tân Hoa",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 31.17,
   "thanh_tien": 43239725
 },
 {
   "npp": "NPP Tân Hoa",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 34.93,
   "thanh_tien": 29413867
 },
 {
   "npp": "NPP Tân Hoa",
   "ma_sp": "HH00100",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*120 gói/thùng kèm sốt",
   "ma_dvt": "Thùng",
   "so_luong": 20.25,
   "thanh_tien": 18427500
 },
 {
   "npp": "NPP Tân Hoa",
   "ma_sp": "HH00099",
   "ten_sp": "Chân gà có xương bà Tuyết (40gram*90 gói/thùng) kèm sốt",
   "ma_dvt": "Thùng",
   "so_luong": 1.47,
   "thanh_tien": 1012000
 },
 {
   "npp": "NPP Tân Hoa",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.42,
   "thanh_tien": 4068000
 },
 {
   "npp": "NPP Tân Hoa",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.72,
   "thanh_tien": 2901600
 },
 {
   "npp": "NPP Tân Hoa",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 21,
   "thanh_tien": 9072000
 },
 {
   "npp": "NPP Tân Hoa",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 22.34,
   "thanh_tien": 9651600
 },
 {
   "npp": "NPP Tân Hoa",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.08,
   "thanh_tien": 3492000
 },
 {
   "npp": "NPP Tân Hoa",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.92,
   "thanh_tien": 396
 },
 {
   "npp": "NPP Tân Hoa",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 18.73,
   "thanh_tien": 8092800
 },
 {
   "npp": "NPP Tân Hoa",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 48.69,
   "thanh_tien": 21034800
 },
 {
   "npp": "NPP Tân Hoa",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 43.23,
   "thanh_tien": 18673200
 },
 {
   "npp": "NPP Tân Hoa",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.42,
   "thanh_tien": 1908000
 },
 {
   "npp": "NPP Tân Hoa",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.46,
   "thanh_tien": 630
 },
 {
   "npp": "NPP Tân Hoa",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.12,
   "thanh_tien": 2642400
 },
 {
   "npp": "NPP Tân Hoa",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.71,
   "thanh_tien": 1170000
 },
 {
   "npp": "NPP Tân Hoa",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.47,
   "thanh_tien": 1069200
 },
 {
   "npp": "NPP Tân Hoa",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.23,
   "thanh_tien": 3124800
 },
 {
   "npp": "NPP Tân Hoa",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.88,
   "thanh_tien": 2109600
 },
 {
   "npp": "NPP Tân Hoa",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.49,
   "thanh_tien": 3667680
 },
 {
   "npp": "NPP Tân Hoa",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.46,
   "thanh_tien": 2792160
 },
 {
   "npp": "NPP Tân Hoa",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.86,
   "thanh_tien": 3828960
 },
 {
   "npp": "NPP Tân Hoa",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 41,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Tân Hoa",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 116,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Tân Thúy",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.04,
   "thanh_tien": 5548
 },
 {
   "npp": "NPP Tân Thúy",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 86.58,
   "thanh_tien": 120086460
 },
 {
   "npp": "NPP Tân Thúy",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0,
   "thanh_tien": 6
 },
 {
   "npp": "NPP Tân Thúy",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.88,
   "thanh_tien": 2109600
 },
 {
   "npp": "NPP Tân Thúy",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.92,
   "thanh_tien": 396
 },
 {
   "npp": "NPP Tân Thúy",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 25.87,
   "thanh_tien": 11174400
 },
 {
   "npp": "NPP Tân Thúy",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 25.35,
   "thanh_tien": 10951200
 },
 {
   "npp": "NPP Tân Thúy",
   "ma_sp": "HH00082",
   "ten_sp": "Bim bim tăm cay lạc hồng vr1 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.04,
   "thanh_tien": 18
 },
 {
   "npp": "NPP Tân Thúy",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.86,
   "thanh_tien": 3708
 },
 {
   "npp": "NPP Tân Thúy",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 121.24,
   "thanh_tien": 52376400
 },
 {
   "npp": "NPP Tân Thúy",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 26,
   "thanh_tien": 11232000
 },
 {
   "npp": "NPP Tân Thúy",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.04,
   "thanh_tien": 18
 },
 {
   "npp": "NPP Tân Thúy",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 24.86,
   "thanh_tien": 10738800
 },
 {
   "npp": "NPP Tân Thúy",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 46.9,
   "thanh_tien": 20260800
 },
 {
   "npp": "NPP Tân Thúy",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 57.87,
   "thanh_tien": 25002000
 },
 {
   "npp": "NPP Tân Thúy",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.01,
   "thanh_tien": 36
 },
 {
   "npp": "NPP Tân Thúy",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.13,
   "thanh_tien": 1353600
 },
 {
   "npp": "NPP Tân Thúy",
   "ma_sp": "HH00019",
   "ten_sp": "Cá cơm tê cay bà Tuyết 18g (18g/gói*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.4,
   "thanh_tien": 7200400
 },
 {
   "npp": "NPP Tân Thúy",
   "ma_sp": "HH00083",
   "ten_sp": "Cá cơm ngon ngọt bà Tuyết 18g (18g/gói *200gói/lốc)",
   "ma_dvt": "Thùng",
   "so_luong": 1.55,
   "thanh_tien": 1187300
 },
 {
   "npp": "NPP Tân Thúy",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 19.28,
   "thanh_tien": 8330400
 },
 {
   "npp": "NPP Tân Thúy",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 34.01,
   "thanh_tien": 14690880
 },
 {
   "npp": "NPP Tân Thúy",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 30.62,
   "thanh_tien": 13226400
 },
 {
   "npp": "NPP Tân Thúy",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 15.78,
   "thanh_tien": 6818400
 },
 {
   "npp": "NPP Tân Thúy",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 19.4,
   "thanh_tien": 8380800
 },
 {
   "npp": "NPP Tân Thúy",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 55,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Tân Thúy",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 97,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Tây Đô",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0,
   "thanh_tien": 76
 },
 {
   "npp": "NPP Tây Đô",
   "ma_sp": "HH00100",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*120 gói/thùng kèm sốt",
   "ma_dvt": "Thùng",
   "so_luong": 0.55,
   "thanh_tien": 5005
 },
 {
   "npp": "NPP Tây Đô",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.9,
   "thanh_tien": 3888
 },
 {
   "npp": "NPP Tây Đô",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.4,
   "thanh_tien": 1728
 },
 {
   "npp": "NPP Tây Đô",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.3,
   "thanh_tien": 1296
 },
 {
   "npp": "NPP Tây Đô",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10,
   "thanh_tien": 4320000
 },
 {
   "npp": "NPP Tây Đô",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.75,
   "thanh_tien": 324
 },
 {
   "npp": "NPP Tây Đô",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 35.77,
   "thanh_tien": 15451200
 },
 {
   "npp": "NPP Tây Đô",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.35,
   "thanh_tien": 1512
 },
 {
   "npp": "NPP Tây Đô",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.17,
   "thanh_tien": 1800000
 },
 {
   "npp": "NPP Tây Đô",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.68,
   "thanh_tien": 2952
 },
 {
   "npp": "NPP Tây Đô",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.06,
   "thanh_tien": 4572
 },
 {
   "npp": "NPP Tây Đô",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.51,
   "thanh_tien": 2196
 },
 {
   "npp": "NPP Tây Đô",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.99,
   "thanh_tien": 1292400
 },
 {
   "npp": "NPP Tây Đô",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.5,
   "thanh_tien": 1512000
 },
 {
   "npp": "NPP Tây Đô",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.33,
   "thanh_tien": 1008000
 },
 {
   "npp": "NPP Tây Đô",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.42,
   "thanh_tien": 1908000
 },
 {
   "npp": "NPP Tây Đô",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.56,
   "thanh_tien": 4129200
 },
 {
   "npp": "NPP Tây Đô",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.47,
   "thanh_tien": 2361600
 },
 {
   "npp": "NPP Tây Đô",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.35,
   "thanh_tien": 4039200
 },
 {
   "npp": "NPP Tây Đô",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.37,
   "thanh_tien": 4046400
 },
 {
   "npp": "NPP Tây Đô",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.7,
   "thanh_tien": 3024
 },
 {
   "npp": "NPP Tây Đô",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 87,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Tây Đô",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 64,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Văn Hoàn",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 20.64,
   "thanh_tien": 17380320
 },
 {
   "npp": "NPP Văn Hoàn",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.17,
   "thanh_tien": 2232000
 },
 {
   "npp": "NPP Văn Hoàn",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2,
   "thanh_tien": 864
 },
 {
   "npp": "NPP Văn Hoàn",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.5,
   "thanh_tien": 216
 },
 {
   "npp": "NPP Văn Hoàn",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.67,
   "thanh_tien": 288
 },
 {
   "npp": "NPP Văn Hoàn",
   "ma_sp": "HH00019",
   "ten_sp": "Cá cơm tê cay bà Tuyết 18g (18g/gói*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.92,
   "thanh_tien": 70855
 },
 {
   "npp": "NPP Văn Hoàn",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.94,
   "thanh_tien": 3428640
 },
 {
   "npp": "NPP Văn Hoàn",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.64,
   "thanh_tien": 5459040
 },
 {
   "npp": "NPP Văn Hoàn",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.82,
   "thanh_tien": 1216800
 },
 {
   "npp": "NPP Văn Hoàn",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.68,
   "thanh_tien": 2023200
 },
 {
   "npp": "NPP Văn Hoàn",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 119,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Vũ Tấm",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.7,
   "thanh_tien": 14847835
 },
 {
   "npp": "NPP Vũ Tấm",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0,
   "thanh_tien": 10
 },
 {
   "npp": "NPP Vũ Tấm",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.6,
   "thanh_tien": 2851200
 },
 {
   "npp": "NPP Vũ Tấm",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.37,
   "thanh_tien": 3182400
 },
 {
   "npp": "NPP Vũ Tấm",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.11,
   "thanh_tien": 1342080
 },
 {
   "npp": "NPP Vũ Tấm",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.42,
   "thanh_tien": 2772000
 },
 {
   "npp": "NPP Vũ Tấm",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.18,
   "thanh_tien": 2235600
 },
 {
   "npp": "NPP Vũ Tấm",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.07,
   "thanh_tien": 3052800
 },
 {
   "npp": "NPP Vũ Tấm",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.35,
   "thanh_tien": 1512
 },
 {
   "npp": "NPP Vũ Tấm",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.85,
   "thanh_tien": 1663200
 },
 {
   "npp": "NPP Vũ Tấm",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.82,
   "thanh_tien": 1648800
 },
 {
   "npp": "NPP Vũ Tấm",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.28,
   "thanh_tien": 5508
 },
 {
   "npp": "NPP Vũ Tấm",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.33,
   "thanh_tien": 1440000
 },
 {
   "npp": "NPP Vũ Tấm",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.08,
   "thanh_tien": 900
 },
 {
   "npp": "NPP Vũ Tấm",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.08,
   "thanh_tien": 1764000
 },
 {
   "npp": "NPP Vũ Tấm",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.67,
   "thanh_tien": 1152000
 },
 {
   "npp": "NPP Vũ Tấm",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.42,
   "thanh_tien": 1476000
 },
 {
   "npp": "NPP Vũ Tấm",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.39,
   "thanh_tien": 16704
 },
 {
   "npp": "NPP Vũ Tấm",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.4,
   "thanh_tien": 6048
 },
 {
   "npp": "NPP Vũ Tấm",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.78,
   "thanh_tien": 3384
 },
 {
   "npp": "NPP Vũ Tấm",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.54,
   "thanh_tien": 23184
 },
 {
   "npp": "NPP Vũ Tấm",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.3,
   "thanh_tien": 1296
 },
 {
   "npp": "NPP Vũ Tấm",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 134,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Vũ Tấm",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 116,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Vũ Đức Nam",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.27,
   "thanh_tien": 3148490
 },
 {
   "npp": "NPP Vũ Đức Nam",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.44,
   "thanh_tien": 8932280
 },
 {
   "npp": "NPP Vũ Đức Nam",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 16.13,
   "thanh_tien": 13584273
 },
 {
   "npp": "NPP Vũ Đức Nam",
   "ma_sp": "HH00100",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*120 gói/thùng kèm sốt",
   "ma_dvt": "Thùng",
   "so_luong": 0.02,
   "thanh_tien": 2275
 },
 {
   "npp": "NPP Vũ Đức Nam",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.87,
   "thanh_tien": 2966400
 },
 {
   "npp": "NPP Vũ Đức Nam",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.07,
   "thanh_tien": 4608
 },
 {
   "npp": "NPP Vũ Đức Nam",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.6,
   "thanh_tien": 3715200
 },
 {
   "npp": "NPP Vũ Đức Nam",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.58,
   "thanh_tien": 1116000
 },
 {
   "npp": "NPP Vũ Đức Nam",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 26.67,
   "thanh_tien": 11520000
 },
 {
   "npp": "NPP Vũ Đức Nam",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.87,
   "thanh_tien": 4266000
 },
 {
   "npp": "NPP Vũ Đức Nam",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.78,
   "thanh_tien": 2066400
 },
 {
   "npp": "NPP Vũ Đức Nam",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.92,
   "thanh_tien": 1692000
 },
 {
   "npp": "NPP Vũ Đức Nam",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.17,
   "thanh_tien": 1368000
 },
 {
   "npp": "NPP Vũ Đức Nam",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.91,
   "thanh_tien": 2120400
 },
 {
   "npp": "NPP Vũ Đức Nam",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.58,
   "thanh_tien": 2412000
 },
 {
   "npp": "NPP Vũ Đức Nam",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.83,
   "thanh_tien": 1656000
 },
 {
   "npp": "NPP Vũ Đức Nam",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.45,
   "thanh_tien": 2354400
 },
 {
   "npp": "NPP Vũ Đức Nam",
   "ma_sp": "HH00019",
   "ten_sp": "Cá cơm tê cay bà Tuyết 18g (18g/gói*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.58,
   "thanh_tien": 5040280
 },
 {
   "npp": "NPP Vũ Đức Nam",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.37,
   "thanh_tien": 1022400
 },
 {
   "npp": "NPP Vũ Đức Nam",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1,
   "thanh_tien": 432
 },
 {
   "npp": "NPP Vũ Đức Nam",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.7,
   "thanh_tien": 3024
 },
 {
   "npp": "NPP Vũ Đức Nam",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 50,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Vũ Đức Nam",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 13,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Ánh Thu",
   "ma_sp": "HH00029",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 240.34,
   "thanh_tien": 333351580
 },
 {
   "npp": "NPP Ánh Thu",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 44.78,
   "thanh_tien": 62109860
 },
 {
   "npp": "NPP Ánh Thu",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 67.42,
   "thanh_tien": 56764814
 },
 {
   "npp": "NPP Ánh Thu",
   "ma_sp": "HH00100",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*120 gói/thùng kèm sốt",
   "ma_dvt": "Thùng",
   "so_luong": 0.05,
   "thanh_tien": 455
 },
 {
   "npp": "NPP Ánh Thu",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 15.8,
   "thanh_tien": 6825600
 },
 {
   "npp": "NPP Ánh Thu",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.22,
   "thanh_tien": 2685600
 },
 {
   "npp": "NPP Ánh Thu",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 21.02,
   "thanh_tien": 9079200
 },
 {
   "npp": "NPP Ánh Thu",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.7,
   "thanh_tien": 4190400
 },
 {
   "npp": "NPP Ánh Thu",
   "ma_sp": "HH00082",
   "ten_sp": "Bim bim tăm cay lạc hồng vr1 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.58,
   "thanh_tien": 3276000
 },
 {
   "npp": "NPP Ánh Thu",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.42,
   "thanh_tien": 2772000
 },
 {
   "npp": "NPP Ánh Thu",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 20.87,
   "thanh_tien": 9014400
 },
 {
   "npp": "NPP Ánh Thu",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 43.42,
   "thanh_tien": 18756000
 },
 {
   "npp": "NPP Ánh Thu",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 2.47,
   "thanh_tien": 1065600
 },
 {
   "npp": "NPP Ánh Thu",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.92,
   "thanh_tien": 3423600
 },
 {
   "npp": "NPP Ánh Thu",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.3,
   "thanh_tien": 3585600
 },
 {
   "npp": "NPP Ánh Thu",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.13,
   "thanh_tien": 3513600
 },
 {
   "npp": "NPP Ánh Thu",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.87,
   "thanh_tien": 5558400
 },
 {
   "npp": "NPP Ánh Thu",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.96,
   "thanh_tien": 4734000
 },
 {
   "npp": "NPP Ánh Thu",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 15.14,
   "thanh_tien": 6541200
 },
 {
   "npp": "NPP Ánh Thu",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.18,
   "thanh_tien": 3531600
 },
 {
   "npp": "NPP Ánh Thu",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 11.45,
   "thanh_tien": 4946400
 },
 {
   "npp": "NPP Ánh Thu",
   "ma_sp": "HH00083",
   "ten_sp": "Cá cơm ngon ngọt bà Tuyết 18g (18g/gói *200gói/lốc)",
   "ma_dvt": "Thùng",
   "so_luong": 4.7,
   "thanh_tien": 3600200
 },
 {
   "npp": "NPP Ánh Thu",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.15,
   "thanh_tien": 3952800
 },
 {
   "npp": "NPP Ánh Thu",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.25,
   "thanh_tien": 3565440
 },
 {
   "npp": "NPP Ánh Thu",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 3.65,
   "thanh_tien": 1576800
 },
 {
   "npp": "NPP Ánh Thu",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8,
   "thanh_tien": 3456000
 },
 {
   "npp": "NPP Ánh Thu",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.53,
   "thanh_tien": 2819520
 },
 {
   "npp": "NPP Ánh Thu",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 33,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Ánh Thu",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 45,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Đức Nam Tiến",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.6,
   "thanh_tien": 8322
 },
 {
   "npp": "NPP Đức Nam Tiến",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0,
   "thanh_tien": -1
 },
 {
   "npp": "NPP Đức Nam Tiến",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.38,
   "thanh_tien": 1893600
 },
 {
   "npp": "NPP Đức Nam Tiến",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 4.1,
   "thanh_tien": 1771200
 },
 {
   "npp": "NPP Đức Nam Tiến",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 16.52,
   "thanh_tien": 7135200
 },
 {
   "npp": "NPP Đức Nam Tiến",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 1.98,
   "thanh_tien": 8568
 },
 {
   "npp": "NPP Đức Nam Tiến",
   "ma_sp": "HH00082",
   "ten_sp": "Bim bim tăm cay lạc hồng vr1 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.07,
   "thanh_tien": 324
 },
 {
   "npp": "NPP Đức Nam Tiến",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 25.05,
   "thanh_tien": 10821600
 },
 {
   "npp": "NPP Đức Nam Tiến",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 49.76,
   "thanh_tien": 21495600
 },
 {
   "npp": "NPP Đức Nam Tiến",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.42,
   "thanh_tien": 3636000
 },
 {
   "npp": "NPP Đức Nam Tiến",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.67,
   "thanh_tien": 3747600
 },
 {
   "npp": "NPP Đức Nam Tiến",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.14,
   "thanh_tien": 2221200
 },
 {
   "npp": "NPP Đức Nam Tiến",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.58,
   "thanh_tien": 3708000
 },
 {
   "npp": "NPP Đức Nam Tiến",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.48,
   "thanh_tien": 2800800
 },
 {
   "npp": "NPP Đức Nam Tiến",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.83,
   "thanh_tien": 4680000
 },
 {
   "npp": "NPP Đức Nam Tiến",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.4,
   "thanh_tien": 4060800
 },
 {
   "npp": "NPP Đức Nam Tiến",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.28,
   "thanh_tien": 4442400
 },
 {
   "npp": "NPP Đức Nam Tiến",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.04,
   "thanh_tien": 3474000
 },
 {
   "npp": "NPP Đức Nam Tiến",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.93,
   "thanh_tien": 3857760
 },
 {
   "npp": "NPP Đức Nam Tiến",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 10.33,
   "thanh_tien": 4462560
 },
 {
   "npp": "NPP Đức Nam Tiến",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 7.4,
   "thanh_tien": 3196800
 },
 {
   "npp": "NPP Đức Nam Tiến",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.56,
   "thanh_tien": 2835360
 },
 {
   "npp": "NPP Đức Nam Tiến",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0.03,
   "thanh_tien": 1296
 },
 {
   "npp": "NPP Đức Nam Tiến",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 22,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Đức Nam Tiến",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 156,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Đức Oanh",
   "ma_sp": "HH00033",
   "ten_sp": "Chân gà rút xương sả tắc 26g (26g*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 101.7,
   "thanh_tien": 141057900
 },
 {
   "npp": "NPP Đức Oanh",
   "ma_sp": "HH00015",
   "ten_sp": "Chân gà tê cay bà Tuyết 40g (40g*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 0,
   "thanh_tien": 6
 },
 {
   "npp": "NPP Đức Oanh",
   "ma_sp": "HH00100",
   "ten_sp": "Chân gà rút xương bà Tuyết 26g (26g*120 gói/thùng kèm sốt",
   "ma_dvt": "Thùng",
   "so_luong": 0.07,
   "thanh_tien": 6825
 },
 {
   "npp": "NPP Đức Oanh",
   "ma_sp": "HH00062",
   "ten_sp": "Đùi gà Mix 7 vị (64gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 20.53,
   "thanh_tien": 8870400
 },
 {
   "npp": "NPP Đức Oanh",
   "ma_sp": "HH00073",
   "ten_sp": "Bim Bim tam thể (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 11.63,
   "thanh_tien": 5025600
 },
 {
   "npp": "NPP Đức Oanh",
   "ma_sp": "HH00072",
   "ten_sp": "Bim bim tăm cay (50gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 20.5,
   "thanh_tien": 8856000
 },
 {
   "npp": "NPP Đức Oanh",
   "ma_sp": "HH00075",
   "ten_sp": "Snack Gân rồng hấp sả (85gram*60 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 22.82,
   "thanh_tien": 9856800
 },
 {
   "npp": "NPP Đức Oanh",
   "ma_sp": "HH00082",
   "ten_sp": "Bim bim tăm cay lạc hồng vr1 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 5.63,
   "thanh_tien": 2430000
 },
 {
   "npp": "NPP Đức Oanh",
   "ma_sp": "HH00081",
   "ten_sp": "Bim bim tăm cay lạc hồng vr2 (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 11.08,
   "thanh_tien": 4788000
 },
 {
   "npp": "NPP Đức Oanh",
   "ma_sp": "HH00071",
   "ten_sp": "Bim bim tăm cay (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 18.32,
   "thanh_tien": 7916400
 },
 {
   "npp": "NPP Đức Oanh",
   "ma_sp": "HH00101",
   "ten_sp": "Bim bim Tăm Cay bà Tuyết vị Tiêu Đen (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 28.29,
   "thanh_tien": 12222000
 },
 {
   "npp": "NPP Đức Oanh",
   "ma_sp": "HH00069",
   "ten_sp": "Bim bim Chịu (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 18,
   "thanh_tien": 7776000
 },
 {
   "npp": "NPP Đức Oanh",
   "ma_sp": "HH00065",
   "ten_sp": "Bim bim mái bờ lô (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 17.39,
   "thanh_tien": 7513200
 },
 {
   "npp": "NPP Đức Oanh",
   "ma_sp": "HH00063",
   "ten_sp": "Bim bim mái ngói (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 9.96,
   "thanh_tien": 4302000
 },
 {
   "npp": "NPP Đức Oanh",
   "ma_sp": "HH00067",
   "ten_sp": "Bim bim mái tôn (25gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 16.32,
   "thanh_tien": 7048800
 },
 {
   "npp": "NPP Đức Oanh",
   "ma_sp": "HH00058",
   "ten_sp": "Đùi gà bơ sữa (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 15.58,
   "thanh_tien": 6732000
 },
 {
   "npp": "NPP Đức Oanh",
   "ma_sp": "HH00057",
   "ten_sp": "Đùi gà phô mai (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 16.39,
   "thanh_tien": 7081200
 },
 {
   "npp": "NPP Đức Oanh",
   "ma_sp": "HH00056",
   "ten_sp": "Đùi gà phô mai ngô (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 13.71,
   "thanh_tien": 5922000
 },
 {
   "npp": "NPP Đức Oanh",
   "ma_sp": "HH00059",
   "ten_sp": "Đùi gà tê cay (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 14.05,
   "thanh_tien": 6069600
 },
 {
   "npp": "NPP Đức Oanh",
   "ma_sp": "HH00055",
   "ten_sp": "Đùi gà rong biển (32gram*120 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 17.89,
   "thanh_tien": 7729200
 },
 {
   "npp": "NPP Đức Oanh",
   "ma_sp": "HH00019",
   "ten_sp": "Cá cơm tê cay bà Tuyết 18g (18g/gói*200 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 51.15,
   "thanh_tien": 39180900
 },
 {
   "npp": "NPP Đức Oanh",
   "ma_sp": "HH00083",
   "ten_sp": "Cá cơm ngon ngọt bà Tuyết 18g (18g/gói *200gói/lốc)",
   "ma_dvt": "Thùng",
   "so_luong": 2.25,
   "thanh_tien": 1723500
 },
 {
   "npp": "NPP Đức Oanh",
   "ma_sp": "HH00077",
   "ten_sp": "Snack Nem nướng phên (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 6.91,
   "thanh_tien": 2983680
 },
 {
   "npp": "NPP Đức Oanh",
   "ma_sp": "HH00079",
   "ten_sp": "Snack Bò kobe (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 8.16,
   "thanh_tien": 3526560
 },
 {
   "npp": "NPP Đức Oanh",
   "ma_sp": "HH00074",
   "ten_sp": "Snack Sashimi (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 12.2,
   "thanh_tien": 5270400
 },
 {
   "npp": "NPP Đức Oanh",
   "ma_sp": "HH00078",
   "ten_sp": "Snack Bìa Catton (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 11.24,
   "thanh_tien": 4855680
 },
 {
   "npp": "NPP Đức Oanh",
   "ma_sp": "HH00080",
   "ten_sp": "Snack Cột Điện (25gram*300 gói/thùng)",
   "ma_dvt": "Thùng",
   "so_luong": 14.3,
   "thanh_tien": 6177600
 },
 {
   "npp": "NPP Đức Oanh",
   "ma_sp": "CCDC0001",
   "ten_sp": "Kệ Trưng Bày",
   "ma_dvt": "",
   "so_luong": 69,
   "thanh_tien": 0
 },
 {
   "npp": "NPP Đức Oanh",
   "ma_sp": "CCDC002",
   "ten_sp": "Móc Treo",
   "ma_dvt": "",
   "so_luong": 30,
   "thanh_tien": 0
 }
];

// ======================= PHÂN LOẠI NPP THEO KHU VỰC =======================
const NPP_BY_REGION = {
    'KV1': ['NPP Bảo Lâm', 'NPP Công Giang', 'NPP Cường Thịnh', 'NPP Đức Nam Tiến', 'NPP Dũng Cúc', 
            'NPP Lâm Hạ', 'NPP Long Liên', 'NPP Nguyên Vũ', 'NPP Thảo Nam', 'NPP Tuấn Huê', 
            'NPP Tuấn Yến', 'NPP Vũ Tấm'],
    'KV2': ['NPP Duy Anh', 'NPP Hoa Việt', 'NPP Hùng Huệ', 'NPP Long Châm', 'NPP Ngọc Kiên', 
            'NPP Ngọc Thêu', 'NPP Phong Hiền', 'NPP Phúc Thịnh', 'NPP Phương Đông', 
            'NPP Thành Lụa', 'NPP Tuấn Huyền'],
    'KV3': ['NPP Bảo Cường', 'NPP Hikoji', 'NPP Long Hải', 'NPP Tân Hoa', 'NPP Tây Đô', 
            'NPP Thắng Lợi', 'NPP Thành Hân', 'NPP Tiến Thịnh'],
    'KV4': ['NPP Ánh Thu', 'NPP Đức Oanh', 'NPP Dương Minh', 'NPP Dũng Béo', 'NPP Hưng Thịnh', 
            'NPP Ngọc Phúc', 'NPP Nguyễn Đình Hân', 'NPP Tân Thuý', 'NPP Thăng Hương', 
            'NPP Thảo Thắng', 'NPP Tùng Phương'],
    'KV5': ['NPP Anh Đức', 'NPP Hải Hằng', 'NPP Hiền Cường', 'NPP Hoàng Minh', 'NPP Oanh Định', 
            'NPP Sơn Lâm', 'NPP Thái Hoà', 'NPP Thảo Xuân', 'NPP Tiên Lan', 'NPP Tuấn Vân', 
            'NPP Vũ Đức Nam'],
    'KV6': ['NPP Anh Minh HT', 'NPP Hà Thanh', 'NPP Hồng Đức', 'NPP Linh Trang', 'NPP Mạnh Hà 1', 
            'NPP Mạnh Hà 2', 'NPP Minh Châu', 'NPP Minh Lộc', 'NPP Nhung Tùng', 'NPP Phương Hà', 
            'NPP Tân Bích An', 'NPP Thanh Bình', 'NPP Thành Thanh', 'NPP Thông Thơm', 'NPP Trường Hằng']
};

// Hàm lấy khu vực của NPP
function getRegionByNPP(nppName) {
    for (const [region, npps] of Object.entries(NPP_BY_REGION)) {
        if (npps.includes(nppName)) {
            return region;
        }
    }
    return null;
}