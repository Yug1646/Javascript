// Variable Declaration using LET
/*
let carName = "Volvo";

console.log(carName);

const price1 = 50;
const price2 = 60;
let total = price1 + price2;

console.log('Before Changing');
console.log(total);

total = price2 - price1;
console.log('After Changing');
console.log(total);

*/

// Variable Declaration using CONST

const myArray = ['Apple','Mango','Banana','Watermelon','Pineapple'];
console.log(myArray);

console.log(myArray[1]);

myArray[1] = 'Strawberry';

console.log(myArray[1]);
console.log(myArray);

//  This will show error as CONST don't change the whole array, it changes only element
myArray = [1,2,3,4,5];
console.log(myArray);