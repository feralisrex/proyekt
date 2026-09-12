let arr = [1, 3, 2, 3, 4, 4, 5, 99, 8, 64, 78];

let YeniArr1 = arr.filter(num => num > 20);

let YeniArr2 = arr.map(num => num + 10);

let YeniArr3 = arr.some(num => num > 70);

let YeniArr4 = arr.every(num => num < 9);

let YeniArr5 = arr.filter(num => num > 3);

let YeniArr6 = arr.some(num => num > 60 && num < 70);

console.log(YeniArr1);
console.log(YeniArr2);
console.log(YeniArr3);
console.log(YeniArr4);
console.log(YeniArr5);
console.log(YeniArr6);