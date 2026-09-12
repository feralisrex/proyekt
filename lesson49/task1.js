let arr = ["Ugur", 2, 3, 44, 1, "Murat", 2, "Senan", 34, 23];

arr.push("Samir");
console.log(arr);

console.log(arr[3]);

arr[0] = "Nergiz";
console.log(arr);

arr.reverse();
console.log(arr);

console.log();
for (let item of arr) {
    console.log(item);
}

console.log();
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log();
arr.forEach(function (item) {
    console.log(item);
});