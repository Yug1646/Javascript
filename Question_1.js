// ----- QUESTION 1 -----
console.log("----- Question 1 -----");

let fName = "Yug",
  age = 20,
  city = "Mumbai";

console.log(`My name is ${fName}, I am ${age} years old and I live in ${city}`);

// ----- QUESTION 2 -----
console.log("\n----- Question 2 -----");

let fullName = "Yug Jain";
let yearOld = 20;
let isAdult = true;
let musicLove;
let pet = null;

console.log(`My fullname is ${fullName}\nType: ${typeof fullName}`);
console.log(`I am ${yearOld} years old\nType: ${typeof yearOld}`);
console.log(`It is ${isAdult} that I am an Adult\nType: ${typeof isAdult}`);
console.log(`My love for music is ${musicLove}\nType: ${typeof musicLove}`);
console.log(`I don't have a pet it is ${pet}\nType: ${typeof pet}`);

// ----- QUESTION 3 -----
console.log("\n----- Question 3 -----");

let a = 10;
let b = 3;

console.log(`Sum : ${a + b}`);
console.log(`Difference : ${a - b}`);
console.log(`Product : ${a * b}`);
console.log(`Quotient : ${a / b}`);
console.log(`Remainder : ${a % b}`);

// ----- QUESTION 4 -----
console.log("\n----- Question 4 -----");
let num = 15;
if (num % 2 == 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}

// ----- QUESTION 5 -----
console.log("\n----- Question 5 -----");
let value = -2;
if (value > 0) {
  console.log(`${value} is Positive Number`);
} else if (value < 0) {
  console.log(`${value} is Negative Number`);
} else {
  console.log(`${value} is Zero Number`);
}

// ----- QUESTION 6 -----
console.log("\n----- Question 6 -----");
let marks = 49;

if (marks >= 90) {
  console.log("Grade : A");
} else if (marks >= 75) {
  console.log("Grade : B");
} else if (marks >= 50) {
  console.log("Grade : C");
} else {
  console.log("Grade : F");
}

// ----- QUESTION 7 -----
console.log("\n----- Question 7 -----");

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// ----- QUESTION 8 -----
console.log("\n----- Question 8 -----");
let y = 10;
while (y >= 1) {
  console.log(y);
  y--;
}

// ----- QUESTION 9 -----
console.log("\n----- Question 9 -----");
let sum = 0;
for (let sn = 1; sn <= 100; sn++) {
  sum += sn;
}
console.log(`Sum of numbers from 1 to 100 : ${sum}`);

// ----- QUESTION 10 -----
console.log("\n----- Question 10 -----");
let tableNum = 5;
for (let t = 1; t <= 10; t++) {
  console.log(`${tableNum} x ${t} = ${tableNum * t}`);
}

// ----- QUESTION 11 -----
console.log("\n----- Question 11 -----");

let games = ["GTA", "Valorant", "Spiderman"];

console.log("Using FOR LOOP");
for (let g = 0; g < games.length; g++) {
  console.log(`${g}) ${games[g]}`);
}

console.log("Using FOR OF LOOP");
for (const gl of games) {
  console.log(gl);
}

// ----- QUESTION 12 -----
console.log("\n----- Question 12 -----");
console.log(`Total Number of elements in the Games array are ${games.length}`);

// ----- QUESTION 13 -----
console.log("\n----- Question 13 -----");

let gamesList = "";

for (const game of games) {
  //console.log(games[game]); // I guess this is correct as the output is in string only but we can use this new method too

  gamesList += game + ", ";
}
console.log(gamesList);

// ----- QUESTION 14 -----
console.log("\n----- Question 14 -----");
let student = {
  name: "Yug",
  age: 19,
  course: "Computer Science",
};

for (const detail in student) {
  console.log(`${detail} : ${student[detail]}`);
}

// ----- QUESTION 15 -----
console.log("\n----- Question 15 -----");

for (const gIndex in games) {
    console.log(`Index ${gIndex} -> ${games[gIndex]}`);
}

// ----- QUESTION 16 -----
console.log("\n----- Question 16 -----");
let num1 = 10,
  num2 = 25,
  num3 = 15;

if (num1 > num2 && num1 > num3) {
  console.log(`Largest number is ${num1}`);
} else if (num2 > num1 && num2 > num3) {
  console.log(`Largest number is ${num2}`);
} else {
  console.log(`Largest number is ${num3}`);
}

// ----- QUESTION 17 -----
console.log("\n----- Question 17 -----");

let evenCount = 0;

for (let naturalNumber = 1; naturalNumber <= 20; naturalNumber++) {
  if (naturalNumber % 2 == 0) {
    evenCount++;
  } else {
    continue;
  }
}
console.log(evenCount);