console.log("---------- QUESTION 1 ----------");
const arr = [10, 20, 30, 40];
console.log(`Length of array: ${arr.length}`);
arr.length = 2;
console.log(`Array after length 2: ${arr}`);
// WHEN ARR.LENGTH = 2, WAS EXECUTED THE LENGTH OF ARRAY WAS SET TO '2', SO THE REST OF THE ELEMENTS WERE NOT DISPLYED INTO THE CONSOLE

console.log("\n---------- QUESTION 2 ----------");
const a = [1, 2, 3];
const b = new Array(3);
console.log(`Elements of Array a: ${a}`);
console.log(`Elements of Array b: ${b}`);
console.log(`Length of Array a: ${a.length}`);
console.log(`Length of Array b: ${b.length}`);
// EVEN THOUGH THE SIZE OF ARRAY ARE SAME AND DEFINED 3 THIER SIZE IS 3, BUT ARRAY B IS ELEMENT BECAUSE IT CONTAINS ELEMENTS INSIDE IT

console.log("\n---------- QUESTION 3 ----------");
const fruits = ["Apple", "Banana"];
fruits.push("Mango");
fruits.unshift("Orange");
console.log(fruits);
fruits.pop();
fruits.shift();
console.log(fruits);

console.log("\n---------- QUESTION 4 ----------");
const nums = [1, 2, 3, 4, 5];
nums.splice(2, 1);
// console.log(nums);
nums.splice(2, 0, 10, 20); // I GUESSS THERE IS A BETTER APPROACH FOR THIS ?
nums[4] = 40; // I THOUGHT TO USE DESTRUCTING
console.log(nums);

console.log("\n---------- QUESTION 5 ----------");
const colors = ["Red", "Blue", "Green", "Yellow", "Pink"];

let removeColor1 = colors.toSpliced(1, 2);
let removeColor2 = colors.toSpliced(3, 2); // WHY NOT -1 WORKS
console.log(removeColor1);
console.log(removeColor2);
console.log(colors);

console.log("\n---------- QUESTION 6 ----------");
const concat_A = ["HTML", "CSS"];
const concat_B = ["JS", "React"];
let spreadArr = [...concat_A, ...concat_B]; // THIS IS WRONG BUT IT IS WORKING
console.log(concat_A.concat(concat_B));
console.log(spreadArr);

// CONCAT DIRECTLY RETURNS AN ARRAY IN THAT ARRAY, SPREAD REUIRES AN VARIABLE TO STORE THE ARRAY

console.log("\n---------- QUESTION 7 ----------");
const items = ["Pen", "Book", "Pen", "Pencil"];
console.log(`Does book exists: ${items.includes("Book")}`);
console.log(`First Index of Pen: ${items.indexOf("Pen")}`);
console.log(`Last Index of Pen: ${items.lastIndexOf("Pen")}`);

