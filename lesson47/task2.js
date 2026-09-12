let arr = [1, 4, 73, 2, 4, 5];

arr[arr.length - 1] += 20;
console.log("1-ci nəticə:", arr);

arr.shift();
console.log("2-ci nəticə:", arr);

arr.unshift(33);
console.log("3-cü nəticə:", arr);

console.log("Array uzunluğu:", arr.length);

arr.reverse();
console.log("Tərsinə çevrilmiş:", arr);

console.log("FOR ilə:");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("forEach ilə:");
arr.forEach(function (item) {
    console.log(item);
});