let str = "Akif.Ugur.Omer.Heyder.Umid.Turan.Yusif";

let arr = str.split(".");

arr.shift();

arr.pop();

console.log("FOR ilə nəticə:");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.push("Huseyn");

console.log("forEach ilə nəticə:");
arr.forEach(function (item) {
    console.log(item);
});