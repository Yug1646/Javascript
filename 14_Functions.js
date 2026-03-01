let num1 = 5,
  num2 = 6;

function sumNum(num1, num2) {
  return num1 + num2;
}

let result = sumNum(num1, num2);
// console.log(result);

// DEFAULT PARAMETER VALUES
function myFunction(x, y = 10) {
  return x + y;
}
// console.log(myFunction(5));

// REST PARAMETER
function sumarr(arr) {
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }
  return sum;
}

// console.log(sumarr([1, 2, 3, 4, 5]));

// FUNCTION EXPRESSION
const x = function (a, b) {
  return a + b;
};
// console.log(x(num1, num2));

// ARROW FUNCTION
const helloWorld = () => {
  console.log("Hello World");
};

helloWorld();

const numAdd = (a, b) => {
  console.log(`Addition : ${a + b}`);
};
const numSub = (a, b) => {
  console.log(`Subtraction : ${a - b}`);
};
const numMul = (a, b) => {
  console.log(`Multiplication : ${a * b}`);
};
const numDiv = (a, b) => {
  console.log(`Division : ${a / b}`);
};

numAdd(5, 5);
numSub(6, 6);
numMul(1, 5);
numDiv(30, 5);
