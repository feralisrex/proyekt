let obj = {
    a: 4,
    b: 3,
    c: 9,
    d: 14,
    e: 1
};

let values = Object.values(obj);

values.sort((a, b) => b - a);

console.log(values);