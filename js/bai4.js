// nhà dân
const ND_PHI_HOA_DON = 4.5;
const ND_PHI_DICH_VU = 20.5;
const ND_PHI_THUE_KENH_CAO_CAP = 7.5;

// doanh nghiệp
const DD_PHI_HOA_DON = 15;
const DD_PHI_DICH_VU_10 = 75;
const DD_PHI_DICH_VU_TREN_10 = 5;
const DD_PHI_THUE_KENH_CAO_CAP = 50;



function hienSoKetNoi() {
    var khachhang = Number(document.getElementById("khachhang").value);
    if (khachhang == 2) {
        document.getElementById("soketnoi").style.display = "block";
    } else {
        document.getElementById("soketnoi").style.display = "none";
    }
}

function tinhTienCap() {
    var khachhang = Number(document.getElementById("khachhang").value);
    var soketnoi = Number(document.getElementById("socongketnoi").value);
    var maKhachhang = (document.getElementById("makhachhang").value);
    var soKenhCaoCap = Number(document.getElementById("sokenhcaocap").value);
    var tienCap = 0;
    if (khachhang == 1) {
        tienCap = ND_PHI_HOA_DON + ND_PHI_DICH_VU + (soKenhCaoCap * ND_PHI_THUE_KENH_CAO_CAP);
    } else if (khachhang == 2) {
        if (soketnoi <= 10) {
            tienCap = DD_PHI_HOA_DON + DD_PHI_DICH_VU_10 + DD_PHI_THUE_KENH_CAO_CAP;
        }else if(soketnoi > 10){
            tienCap = DD_PHI_HOA_DON + DD_PHI_DICH_VU_10 + (soketnoi-10)*DD_PHI_DICH_VU_TREN_10 + DD_PHI_THUE_KENH_CAO_CAP;;
        }
    }

    document.getElementById("txtResult").innerHTML = "Mã khách hàng: " + maKhachhang + "<br>Tiền cáp: " + tienCap.toLocaleString();
}

document.getElementById("btnTinhTienCap").onclick = tinhTienCap;