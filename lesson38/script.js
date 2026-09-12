let X = 14;
let Y = 23;
const sabit = 33;
let text = "Hello World";

console.log("X tipi:", typeof X);
console.log("Y tipi:", typeof Y);
console.log("sabit tipi:", typeof sabit);
console.log("text tipi:", typeof text);

X = X % 9;
Y = Y % 8;
let newSabit = sabit + 5;

console.log("X + Y =", X + Y);
console.log("(sabit - X) / Y =", (newSabit - X) / Y);

if (X > Y) {
    console.log("X Y-dan boyukdur");
} else if (Y > X) {
    console.log("Y X-dan boyukdur");
} else {
    console.log("X Y-a beraberdir");
}