// WAYS TO CREATE AN ARRAY

// WAY 1
const salad = ["Tomato", "Cucumber", "Onion", "Cabbage", "Corn", "Carrot"];

// WAY 2
const anotherSalad = new Array(
  "Tomato",
  "Cucumber",
  "Onion",
  "Cabbage",
  "Corn",
  "Carrot",
);

const two2 = new Array(2); // Here the size of array "two" is 2

// ACCESSING AN ELEMENT FROM ARRAY

// ACCESSING SINGLE ARRAY ELEMENT
console.log(salad[0]);

// ACCESSING THE ARRAY BY LOOP

for (let i = 0; i <= salad.length - 1; i++) {
  console.log(`Element at index ${i} is ${salad[i]}`);
}

// ADDING AN ELEMENT INTO ARRAY

// PUSH() - ADDS THE ELEMENT AT THE END OF THE ARRAY AND IT CHANGES THE SOURCE ARRAY

let ret = salad.push("Peanut");
console.log(ret); // TOTAL NUMBER OF ELEMENTS
console.log(salad);

// UNSHIFT() - ADDS THE ELEMENT AT THE START OF AN ARRAY

let unRet = salad.unshift("Mayo");
console.log(unRet); // TOTAL NUMBER OF ELEMENTS
console.log(salad);

// REMOVING AN ELEMENT FROM AN ARRAY

// POP() - REMOVES THE LAST ELEMENT OF AN ARRAY, ALSO RETURNS THE REMOVED ELEMENT FROM ARRAY

console.log("\nPOP METHOD\n", salad);
const popRet = salad.pop();
console.log(popRet);
console.log(salad);

// SHIFT() - REMOVES THE FIRST ELEMENT OF AN ARRAY, ALSO RETURNS THE REMOVED ELEMENT FROM ARRAY

console.log("\nUnshift Method\n", salad);
const shiftRet = salad.shift();
console.log(shiftRet);
console.log(salad);

// NOTE : THESE METHODS PUSH(),UNSHIFT(),POP(),SHIFT() MAKES CHNAGES INTO ORIGINAL ARRAY

// COPYING AN ARRAY

// SLICE() - CREATES AN COPY OF THE ARRAY

const saladCopy = salad.slice();
console.log("Salad Before Copy\n", salad);
console.log("Salad After Copy\n", saladCopy);
// console.log(salad === saladCopy);    // FLASE

// DETERMINE IS ARRAY

console.log(Array.isArray(salad));

// DESTRUCTURING ARRAY

/*
const tomato = salad[0];
const onion = salad[2];
const corn = salad[4];
*/

const [tomato, onion, corn] = ["Tomato", "Onion", "Corn"];
console.log(tomato);
console.log(onion);
console.log(corn);

// WAYS OF DESTRUCTURING

// WAY 1
const [fruit1, fruit2 = "Litchi"] = ["Pineapple"];
console.log(fruit1);
console.log(fruit2);

// WAY 2

const [Tesla, , iPhone] = ["S Palid", " Airpods", "13 Mini"];

console.log(`Tesla : ${Tesla}`);
console.log(`iPhone : ${iPhone}`);

// NESTED ARRAY

const colors = ["red", "blue", "green", ["yellow", "orange", "pink"]];

const yellow = colors[3][0];
console.log(yellow);

// REST AND SPREAD PARAMETER

// REST
const [one, two, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(one);
console.log(two);
console.log(rest);

// SPREAD - CLONING A ARRAY

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myNum = [...numArr];

console.log(numArr);
console.log(myNum);

// SWAPPING WITH DESTRUCTING
let first = "sad";
let second = "happy";

[first, second] = [second, first];

console.log(first);
console.log(second);

// MERGING ARRAYS

const emotion = ["happy", "sad"];
const veggies = ["Corn", "Tomato", "Cabbage"];

const human = [...emotion, ...veggies];
console.log(human);
