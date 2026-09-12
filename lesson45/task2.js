const alinacaqlar = ["Sut", "yumurta", "yag", "corek", "duz"];

console.log(alinacaqlar[2]);

console.log(alinacaqlar[0]);

console.log(alinacaqlar.length);

console.log(alinacaqlar.includes("Seker"));

console.log(alinacaqlar.indexOf("corek"));

if (alinacaqlar.includes("yag")) {
    console.log("Bu listde yag sozu movcuddur");
} else {
    console.log("Bu listde yag sozu movcud deyil");
}