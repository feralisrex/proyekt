let num1 = "23.654";
let num2 = "21.93";

let sumWithDecimal = Number(num1) + Number(num2);
console.log("Task 1 - Tam hissələrlə (Number()):", sumWithDecimal);

let sumWithoutDecimal = parseInt(num1) + parseInt(num2);
console.log("Task 1 - Tam hissələr olmadan (parseInt()):", sumWithoutDecimal);

console.log("num1 Number:", Number(num1));
console.log("num2 Number:", Number(num2));
console.log("num1 parseInt:", parseInt(num1));
console.log("num2 parseInt:", parseInt(num2));





let cem = 0;

for (let i = 1; i <= 30; i += 2) {
    cem += i;
}

console.log("1-dən 30-a qədər tək ədədlərin cəmi:", cem);