for (let i = 10; i <= 20; i++) {
    console.log(i);
}

let j = 10;
while (j <= 20) {
    console.log(j);
    j++;
}


for (let i = 15; i <= 35; i++) {
    if (i === 31) break;
    if (i === 19 || i === 21 || i === 22) continue;
    console.log(i);
}