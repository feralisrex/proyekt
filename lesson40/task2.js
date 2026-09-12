function yoxlaEded(eded) {
    if (eded < 0) {
        console.log("Bu ədəd mənfidir");
    } 
    else if (eded >= 1 && eded < 10) {
        console.log("Bu ədəd 1 və 10 arasında yerləşir");
    } 
    else if (eded >= 10 && eded < 100) {
        console.log("Bu ədəd 10 və 100 arasında yerləşir");
    } 
    else if (eded >= 100) {
        console.log("Bu ədəd 100-dən böyükdür");
    }
}

let eded = Number(prompt("Ədəd daxil edin:"));
yoxlaEded(eded);