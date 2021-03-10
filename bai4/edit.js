let a = parseInt(prompt("Nhập số đầu tiên :"));
let b = parseInt(prompt("Nhập số thứ hai :"));
let c = parseInt(prompt("Nhập số cuối cùng :"));
if ( a > b && a > c ) {
    alert(a + " là số lớn nhất");
} else if ( b > c ) {
    alert(b + " là số lớn nhất");
} else {
    alert(c + " là số lớn nhất");
}