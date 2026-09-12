let arr = [
    { ad: "Ferid", soyad: "Dostmaliyev", yas: 9 },
    { ad: "Abidin", soyad: "Cavadzade", yas: 11 },
    { ad: "Esma", soyad: "Unal", yas: 13 },
    { ad: "Fatime", soyad: "Memmedova", yas: 14 },
    { ad: "Ugur", soyad: "Qurbanli", yas: 14 },
];

let YeniArr1 = arr.filter(obj => obj.yas < 14);

let YeniArr2 = arr.find(obj => obj.yas === 14);

let YeniArr3 = arr.find(obj => obj.ad === "Abidin");

console.log(YeniArr1);
console.log(YeniArr2);
console.log(YeniArr3);