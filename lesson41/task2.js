let eded = Number(prompt("Bir ədəd daxil edin:"));

let kvadrat = eded ** 2;

if (kvadrat < 100) {
    console.log("100den kicikdir");
} else if (kvadrat > 100) {
    console.log("100den boyukdur");
} else {
    console.log("100e beraberdir");
}