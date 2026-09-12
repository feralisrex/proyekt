let mebleg = prompt("Alış-veriş məbləğini daxil edin:");
let endirimFaizi;
let sonMebleg;

if (mebleg < 100 && mebleg >= 0) {
    endirimFaizi = 5;
} else if (mebleg >= 100 && mebleg <= 1000) {
    endirimFaizi = 8;
} else if (mebleg > 1000) {
    endirimFaizi = 10;
} else {
    console.log("Yanlış məbləğ daxil etdiniz");
}

sonMebleg = mebleg - (mebleg * endirimFaizi / 100);

console.log("Endirim faizi: " + endirimFaizi + "%");
console.log("Ödəniləcək məbləğ: " + sonMebleg + " manat");