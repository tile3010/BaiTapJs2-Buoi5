
var tienThue = 0
function tinhThue() {
    var hoTen = document.getElementById("hoten").value;
    var tongthuNhap = Number(document.getElementById("tongthunhap").value);
    var soNguoi = Number(document.getElementById("songuoi").value);
    var thuNhapChiuThue = tongthuNhap - 4000000 - soNguoi *1600000;
    if (thuNhapChiuThue <= 60000000) {
        tienThue = thuNhapChiuThue*0.05;
    }else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
        tienThue = thuNhapChiuThue*0.1;
    }else if(thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000 ) {
        tienThue = thuNhapChiuThue*0.15;
    }else if(thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
        tienThue = thuNhapChiuThue*0.2;
    }else if(thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
        tienThue = thuNhapChiuThue*0.25;
    }else if(thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000){
        tienThue = thuNhapChiuThue*0.3;
    }else {
        tienThue = thuNhapChiuThue*0.35;
    }

    
    document.getElementById("txtResult").innerHTML = "Họ tên: " + hoTen + "<br>Thu nhập chịu thuế: " + tienThue.toLocaleString();
}

function tienthue(tinhTienThue,soNguoi){
   return tienThue = tinhTienThue-4000000-soNguoi*1600000; 
}
document.getElementById("btnThuThuNhap").onclick = tinhThue;