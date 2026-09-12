let obj = {
    ad: "Kenan",
    soyad: "Memmedov",
    yas: 22
};

let keys = Object.keys(obj);

keys.unshift(25);

keys.pop();
keys.pop();

console.log(keys.length);

keys.unshift(30);

keys.pop();

let reqemler = keys.map(item => item + 40);

reqemler.forEach(item => {
    console.log(item);
});