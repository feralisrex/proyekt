let str1 = "1,2,3,4,5,6,9,8,7,6,7";

let arr1 = str1.split(",");
console.log(arr1);

let reversedArr = arr1.reverse();
console.log(reversedArr);

arr1.reverse();

let result = reversedArr.join("*");
console.log(result);



let arr2 = ["Ferid", "Zehra", "Medine", "Elmar"];

console.log(arr2[arr2.length - 1]);

arr2[1] = "Fexri";

arr2.reverse();

console.log(arr2[0]);

let str = arr2.join(" ");
console.log(str);

if (str.includes("Zehra")) {
    console.log("Bu soz movcuddur");
} else {
    console.log("Bu soz movcud deyil");
}

let newStr = str.replace("Ferid", "Murat");
console.log(newStr);