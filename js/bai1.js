function quanLiTuyenSinh() {
    var diemChuan = Number(document.getElementById("diemchuan").value);
    var khuVuc = Number(document.getElementById("khuvuc").value);
    var doiTuong = Number(document.getElementById("doituong").value);
    var monthuNhat = Number(document.getElementById("monthunhat").value);
    var monThuHai = Number(document.getElementById("monthuhai").value);
    var monThuBa = Number(document.getElementById("monthuba").value);

    var tongDiem = khuVuc+doiTuong+monthuNhat+monThuHai+monThuBa;
    
    if (monthuNhat == 0 || monThuHai == 0 || monThuBa == 0) {
        document.getElementById("txtResult").innerHTML = "Bạn đã rớt.Tổng điểm: "+tongDiem;
    }else if(tongDiem < diemChuan) {
        document.getElementById("txtResult").innerHTML = "Bạn đã rớt. Do có điểm bằng 0"
    }else {
        document.getElementById("txtResult").innerHTML = "Bạn đã đậu.Tổng điểm: "+tongDiem;
    }

}


document.getElementById("btnTuyenSinh").onclick = quanLiTuyenSinh;