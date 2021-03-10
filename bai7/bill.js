function tinh() {
    let vao = document.getElementById("day1");
    let ra = document.getElementById("day2");
    let inday = new Date(vao.value);
    let outday = new Date(ra.value);
    let time = outday - inday;
    let day = Math.floor(time / (1000 * 60 * 60 * 24) + 1);
    let week = Math.floor(day / 7);
    let daythem = day % 7;
    let options = document.getElementById("loai");
    let style;
    if (options[0].selected) {
        style = options[0].value;
        } else if (options[1].selected) {
            style = options[1].value;
            } else {
                style = options[2].value;
                }
    let thanhtien = (week * 7 * 0.9 * style) + (daythem * style);
    document.getElementById("tien").innerHTML = thanhtien + "vnđ";
}