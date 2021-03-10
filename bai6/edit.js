let doanhso = parseInt(prompt("Nhập doanh số bán hàng :"));
const khoan = 6000000;
if (doanhso > khoan) {
    alert("Hoa hồng nhận được là : " + doanhso * 0.3);
} else if (doanhso > khoan - 1000000) {
    alert("Hoa hồng nhận được là : " + doanhso * 0.1);
} else {
    alert("Không có hoa hồng !!!");
}