function SmartPhone(phiPos, mayPos,chietKhau, tenCTV, tenKH, cccd, phone, email, theTinDung, nganHang, moDel, name, giaThue, maIMEI, ngayDangKy, tenNV, tinhTrang) {
    this.tenKH = tenKH || '';
    this.cccd = cccd || '';
    this.phone = phone || '';
    this.email = email || '';
    this.theTinDung = theTinDung || '';
    this.nganHang = nganHang || '';
    this.moDel = moDel || '';
    this.name = name || '';
    this.giaThue = giaThue || '';
    this.maIMEI = maIMEI || '';
    this.datepicker = ngayDangKy || '';
    this.tenNV = tenNV || '';
    this.tinhTrang = tinhTrang || '';
    this.tenCTV = tenCTV || '';
    this.chietKhau = chietKhau || '';
    this.mayPos = mayPos || '';
    this.phiPos = phiPos || '';
}

    // Phương thức tính tổng lương
    // this.tongLuong = function () {
    //     var tongLuong = '';
    //     if (this.chucVu === 'Giám đốc') {
    //         tongLuong = this.luongCB * 3;
    //     } else if (this.chucVu === 'Trưởng phòng') {
    //         tongLuong = this.luongCB * 2;
    //     } else {
    //         tongLuong = this.luongCB * 1;
    //     }
    //     return tongLuong;
    // };

    // Phương thức xếp loại nhân viên
//     this.xepLoai = function () {
//         var xepLoai = '';
//         if (this.gioLam > 80 && this.gioLam >= 192) {
//             xepLoai = 'Xuất sắc';
//         } else if (this.gioLam > 80 && this.gioLam >= 176) {
//             xepLoai = 'Giỏi';
//         } else if (this.gioLam > 80 && this.gioLam >= 160) {
//             xepLoai = 'Khá';
//         } else   {
//             xepLoai = 'Trung bình';
//         }
//         return xepLoai;
//     };
// }
