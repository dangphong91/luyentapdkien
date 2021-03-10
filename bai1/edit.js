let a = parseInt(prompt("Nhập vào a :"));
let b = parseInt(prompt("Nhập vào b :"));
let c = a % b;
if ( c == 0 ) {
    alert(a + " chia hết cho " + b);
} else {
    alert(a + " không chia hết cho " + b);
}