let startDate = new Date("2017-03-07");
let endDate = new Date("2022-12-03");

let diffTime = endDate - startDate;

let diffDays = diffTime / (1000 * 60 * 60 * 24);

console.log(diffDays);