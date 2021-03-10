let dktra = parseFloat(prompt("Nhập điểm kiểm tra :"));
let dgki = parseFloat(prompt("Nhập điểm thi giữa kì :"));
let dcki = parseFloat(prompt("Nhập điểm thi cuối kì :"));
let dtb = (dktra + dgki * 2 + dcki * 3) / 6;
if (dtb >= 8) {
    alert("Xếp loại Giỏi");
} else if (dtb >= 6.5) {
    alert("Xếp loại Khá");
} else if (dtb >= 5) {
    alert("Xếp loại TB");
} else {
    alert("Xếp loại Yếu");
}