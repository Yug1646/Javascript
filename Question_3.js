// Question 1
console.log("Question 1");
function message(userName) {
  console.log(`Hello, ${userName}`);
}
let userName = "ChatGPT";
message(userName);

// Question 2
console.log("\n\nQuestion 2");
const numSum = (num1, num2) => {
  return num1 + num2;
};
let num1 = 5,
  num2 = 6;
let result = numSum(num1, num2);
console.log(`Addition: ${result}`);

// Question 3
console.log("\n\nQuestion 3");
const isEvenOdd = (number) => {
  if (number % 2 == 0) {
    console.log(`${number} is Even Number`);
  } else {
    console.log(`${number} is Odd Number`);
  }
};
let checkNum = 55;
isEvenOdd(checkNum);

// Question 4
console.log("\n\nQuestion 4");

function isGreater(x, y) {
  if (x > y) {
    console.log(`${x} is greater`);
  } else {
    console.log(`${y} is greater`);
  }
}
isGreater(5, 6);

// Question 5
console.log("\n\nQuestion 5");
let arr = [1, 2, 3, 4, 5];
const arrSum = (arr) => {
  let sum = 0;
  for (const i of arr) {
    sum += i;
  }
  console.log(`Sum of array: ${sum}`);
};
arrSum(arr);

// Question 6
console.log("\n\nQuestion 6");
let str1 = "Yug";
let vowelCount = 0;
const checkVowel = (str1) => {
  for (const c of str1) {
    if (c == "a" || c == "e" || c == "i" || c == "o" || c == "u") {
      // Can we use include method of string ??
      vowelCount++;
    }
  }
  console.log(`Vowel in ${str1}: ${vowelCount}`);
};
checkVowel(str1);

// Question 7
console.log("\n\nQuestion 7");
let str2 = "Pine";

const revStr = (str) => {
  for (const c of str) {
    console.log(c);
  }
};
revStr(str2);

// Question 8

// Question 9
let a = 5,
  b = 5;

const addition = (a, b) => {
  a + b;
};
const subtraction = (subNum = (a, b) => {
  return a - b;
});
const multiplication = (mulNum = (a, b) => {
  return a * b;
});
const division = (diviNum = (a, b) => {
  return a / b;
});
const modulus = (modNum = (a, b) => {
  return a % b;
});

