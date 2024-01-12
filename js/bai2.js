
function tinhTienDien() {
    var hoTen = document.getElementById("hoten").value;
    var soKw = Number(document.getElementById("kw").value);
    var tienDien = 0;
    if (soKw <= 50) {
        tienDien = soKw * 500;
    } else if (soKw > 50 && soKw <= 100) {
        tienDien = (soKw - 50) * 650 + (50 * 500);
    } else if (soKw > 100  &&  soKw <= 200) {
        tienDien = ((soKw - 100) * 850) + (50 * 500) + (50 * 650);
    } else if (soKw > 200  &&  soKw <= 350) {
        tienDien = ((soKw - 200) * 1100) + (50 * 500) + (50 * 650) + (100*850);
    } else {
        tienDien = ((soKw - 350) * 1300) + (50 * 500) + (50 * 650) + (100 * 850) + ( 150 * 1100);
    }
    document.getElementById("txtResult").innerHTML = "Họ tên: " + hoTen + "<br>Tiền điện: " + tienDien.toLocaleString()+" vnđ";
}


document.getElementById("btnTienDien").onclick = tinhTienDien;