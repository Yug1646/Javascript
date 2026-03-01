/*
Find the first temperature greater than 40

Find the index of the last temperature greater than 40

Check if temperature 25 exists

Create a new array that contains only the first 5 temperatures

Reverse the array without modifying the original

Display the highest temperature after sorting
*/

const temperature = [28, 31, 35, 42, 38, 30, 29, 42];

let greatTemp = temperature.find((value) => value > 40);
console.log(`Greatest Temperature : ${greatTemp}`);

let lowTemp = temperature.find((value) => value < 40);
console.log(`Lowest Temperature : ${lowTemp}`);

let tempCheck = temperature.includes(25);
console.log(`Does temperature 25 exist : ${tempCheck}`);

let newTempCheck = temperature.slice(0, 5);
console.log(`New Array : ${newTempCheck}`);

let newRevArr = temperature.toReversed();
console.log(`Reverse Array : ${newRevArr}`);

const highTemp = () => {
  temperature.sort();
  return Math.max.apply(null, temperature);
};

console.log(`Highest Temperature : ${highTemp()}`);
