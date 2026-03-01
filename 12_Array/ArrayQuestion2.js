console.log("---------- QUESTION 1 ----------");
const colors = ["Red", "Blue", "Green", "Yellow"];

let arrLen = colors.length;
let [colorOne, colorTwo, ...newColor] = colors;

console.log(`Length of Color array: ${arrLen}`);
console.log(`First Color: ${colorOne}`);
console.log(`Second Color: ${colorTwo}`);
console.log(newColor);

console.log("\n---------- QUESTION 2 ----------");
const nums = [10, 20, 30];

let NewNums = nums.slice();
NewNums = [...NewNums, 40, 50];

console.log(`Old number arrat: ${nums}`);
console.log(`New number array: ${NewNums}`);

console.log("\n---------- QUESTION 3 ----------");
const heroes = ["IronMan", "Thor", "Hulk"];

console.log(heroes.join("-"));
console.log(`Thor present ? - ${heroes.includes("Thor")}`);
console.log(`Index of hulk: ${heroes.indexOf("Hulk")}`);

console.log("\n---------- QUESTION 4 ----------");
const names = ["Tom", "Bob", "Alex", "Tom", "John"];

console.log(`First Index of Tom: ${names.indexOf("Tom")}`);
console.log(`Last Index of Tom: ${names.lastIndexOf("Tom")}`);
names.reverse();
console.log(`First element of reverse array: ${names[0]}`);

console.log("\n---------- QUESTION 5 ----------");
const marks = [45, 78, 12, 89, 34];

const ascOrder = (arr) => {
  return arr.sort(function (a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  });
};

const desOrder = (arr) => {
  return arr.sort(function (a, b) {
    return a === b ? 0 : a > b ? -1 : 1;
  });
};

console.log(`Ascending Order: ${ascOrder(marks)}`);
console.log(`Descending Order: ${desOrder(marks)}`); // CAN YOU EXPLAIN ME THIS LOGIC OF DESCENING OR ELSE IF THERE IS SOME ANOTHER LOGIC THEN CAN YOU EXPLAIN IT
console.log(
  "Answer: SORT() fails because javascript takes number array as a STRING not a number datatype so that's why SORT() fails",
);

console.log("\n---------- QUESTION 6 ----------");
const fruitsArr = ["Apple", "Banana", "Mango"];

fruitsArr.fill(" ", 0, 2);
console.log(`Fill array with empty element: ${fruitsArr}`);
console.log("Yes, FILL() mutates the orignal array");

console.log("\n---------- QUESTION 7 ----------");
const user = {
  name: "Yug",
  skills: ["HTML", "CSS", "JS", "React"],
};

let Uname = user.name;

let [fSkill, ...rest] = user.skills;

rest = [...rest, "Node", "MongoDB"];

console.log(`User Name : ${Uname}`);
console.log(`First Skill : ${fSkill}`);
console.log(`Remaining Skill : ${rest}`);

console.log("\n---------- QUESTION 8 ----------");
const QuesArr = new Array(5);

console.log(
  "The length of array is 5, as new Array(5) states the size of array as 5",
);
QuesArr.fill(0);
console.log(`Array filled with 8: ${QuesArr}`);

QuesArr.length = 3;
console.log(`Array with length 3: ${QuesArr}`);

console.log("\n---------- BONUS QUESTION ----------");
console.log(
  "Rest operator is used when user wants to add the remaining or rest elements of an array into one single variable and SPREAD operator is used when user want to copy the array elements into the another element.",
);

console.log(
  "CONCAT() method only merges an array whereas SPREAD copies the array and returns the elements as a new array",
);
