let bal = prompt("İmtahan balını daxil edin:");

if (bal >= 90 && bal <= 100) {
    console.log("Keçdi - A");
} else if (bal >= 80) {
    console.log("Keçdi - B");
} else if (bal >= 70) {
    console.log("Keçdi - C");
} else if (bal >= 60) {
    console.log("Keçdi - D");
} else if (bal >= 50) {
    console.log("Keçdi - E");
} else if (bal < 50 && bal >= 0) {
    console.log("Kəsildi - F");
} else {
    console.log("Yanlış bal daxil etdiniz");
}