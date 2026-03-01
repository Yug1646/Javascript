/*
    LENGTH - LENGTH IS NOT A METHOD, IT IS A PROPERTY IT RETURNS THE LENGTH OF AN ARRAY, ALSO CAN BE USED TO CHANGE THE LENGTH OF AN ARRAY
*/

const lenArr1 = [1, 2, 3, 4, 5];
const lenArr2 = new Array(7);
lenArr1.length = 10;

console.log(lenArr1.length); // 5
console.log(lenArr2.length); //  7
console.log(lenArr1); //  5 ELEMENTS + 5 EMPTY SLOTS

// ---------- JAVASCRIPT ARRAY METHODS ----------

/* 
    CONCAT() - MERGES 1 OR MORE ARRAYS AND RETURNS MERGED ARRAY 
*/
console.log("\n---------- CONCAT METHOD ----------");
const concatFirst = [1, 2, 3];
const concatSecond = [4, 5, 6];
const concatThird = [7, 8, 9];
const concatMerge = concatFirst.concat(concatSecond);
// FOR MULTIPLE MERGE ADD AN ARGUMENT concatFirst.concat(concatSecond,concatThird,....n);

console.log(`First Array :`, concatFirst);
console.log(`Second Array :`, concatSecond);
console.log("Concat Array :", concatMerge);

/* 
    JOIN() - JOINS ALL THE ARRAY ELEMENTS TOGETHER USING SEPARATOR AND RETURNS A STRING
*/
console.log("\n---------- JOIN METHOD ----------");
const joinArr = ["Tony", "Peter", "Steve", "Natasha"];
const joined = joinArr.join(",");

[].join; // return ""
console.log(joined);
console.log(typeof joined);

/*
    FILL() - FILLS AN ARRAY WITH AN STATIC VALUE, BUT IT MUTATES THE ORIGINAL ARRAY
*/
console.log("\n---------- FILL METHOD ----------");

const fillArr = ["red", "blue", "black"];
// fillArr.fill("white");  // FOR ALL VALUES
fillArr.fill("white", 0, 2);
// FOR SPECIFIC VALUES, 0 IS INDEX START AND 2 IS THE LENGTH SO ['white', 'white', 'black']

console.log(fillArr);

/*
    INCLUDES() - DETERMINES THE PRESENECE OF AN ELEMENT IN AN ARRAY
*/
console.log("\n---------- INCLUDES METHOD ----------");

const includeArr = ["Tom", "Tony", "Pete", "Steve", "Stan"];

console.log(includeArr.includes("Tony")); // TRUE
console.log(includeArr.includes("tom")); // FALSE
console.log(includeArr.includes("Yug")); // FALSE

/*
    INDEX OF() - WHEN YOU WANT TO KNOW THE INDEX POSITION OF AN ELEMENT IN AN ARRAY
*/
console.log("\n---------- INDEX OF METHOD ----------");

const indexofArr = ["Tom", "Tony", "Pete", "Steve", "Stan"];

console.log(indexofArr.indexOf("Tony")); // 1
console.log(indexofArr.indexOf("Bob")); //  -1

/*
    LAST INDEX OF() - FINDING INDEX OF THE LAST ELEMENT REPEATED
*/
console.log("\n---------- LAST INDEX OF METHOD ----------");
const lastIndexArr = ["Tom", "Tony", "Pete", "Steve", "Tom"];
console.log(lastIndexArr.indexOf("Tom")); // FIRST TOM INDEX
console.log(lastIndexArr.lastIndexOf("Tom")); // LAST TOM INDEX

/*
    REVERSE() - IT RETURNS ARRAY IN REVERSE FORM
*/
console.log("\n---------- REVERSE METHOD ----------");
const reverseArr = ["Tom", "Tony", "Peter", "Steve"];
console.log(reverseArr.reverse());
console.log(reverseArr[0]);

/*
    SORT() - IT SORTS THE ELEMENTS
*/
console.log("\n---------- SORT METHOD ----------");
const sortArr = ["tom", "bob", "alex"];
console.log("Array after default sort :", sortArr.sort());
sortArr.sort(function (a, b) {
  return a === b ? 0 : a > b ? -1 : 1;
});
console.log(sortArr);

const sortAgeArr = [2, 100, 3, 23, 4, 6, 10, 12, 43];
console.log(`Age with default sort: ${sortAgeArr.sort()}`);
console.log(
  sortAgeArr.sort(function (a, b) {
    return a === b ? 0 : a > b ? 1 : -1; // 1: ascending & -1: descending
  }),
);

/*
    SPLICE() - IT RETURNS THE ARRAY CONTAINING THE DELETED ELEMENT/s

    SYNTAX: spilice(start, deleteCount, item, item1...)

    start: Starting Index
    deleteCount : Number of elements to be delete
    item & item1... : What element to add in array, but element will be added to the deleted index (start) index 
*/
console.log("\n---------- SPLICE METHOD ----------");
const spliceArr = ["tom", "bob", "alex"];
console.log(spliceArr.splice(0, 1, "mike")); //  TOM
console.log(spliceArr); // ['mike', 'bob', 'alex']

spliceArr.splice(1, 0, "zack");
console.log(spliceArr); // ['mike', 'zack', 'bob', 'alex']

/*
    AT() - IT IS USED TO GET THE ELEMENT WITH THE HELP OF NEGATIVE INDEX
*/
console.log("\n---------- AT METHOD ----------");
const atArr = ["Burger", "Fries", "Pizza", "Chips", "Frankie"];
console.log(atArr.at(-1));

/*
    COPYWITHIN() - COPY THE ELEMENTS AND ADD IT TO THE SAME ARRAY 

    SYNTAX: copyWithin(target, start, end)
    target - From where to add the copied element
    start - Start index of copy element
    end - End index of copy element
*/
console.log("\n---------- COPYWITHIN METHOD ----------");

const copyWithinArr = [1, 2, 3, 4, 5, 6, 7];
// copyWithinArr.copyWithin(0, 3, 6);
console.log(copyWithinArr); // [4, 5, 6, 4, 5, 6, 7]

/*
    FLAT() - IT IS USED TO FLAT AN ARRAY, NESTED ARRAY INTO SINGLE ARRAY
*/
console.log("\n---------- FLAT METHOD ----------");
const flatArr1 = [1, 2, 3, [4, 5, 6]];
const flatArr2 = [1, 2, 3, [4, [5, 6, [7, 8], 9]]];
console.log(flatArr1.flat());
console.log(flatArr2.flat(Infinity)); // YOU CAN ADD LEVELS OF FLAT; flat(1)

/*
    GROUPING() - IT GROUPS THE ELEMENT OF ARRAY
*/
console.log("\n---------- GROUPING METHOD ----------");

const groupByArr = [
  { empName: "Yug", dept: "SD", salary: 3000 },
  { empName: "Tony", dept: "DS", salary: 2000 },
  { empName: "Steven", dept: "SD", salary: 1500 },
  { empName: "Peter", dept: "DS", salary: 500 },
];

const groupByDept = Object.groupBy(groupByArr, ({ dept }) => dept);
console.log(groupByDept);

const groupByMoreThan2000 = Object.groupBy(groupByArr, ({ salary }) => {
  return salary >= 2000 ? "More than 2K" : "Less than 2K";
});
console.log(groupByMoreThan2000);

/*
    -------------------- IMMUTABILITY METHODS --------------------
*/

/*
    TO REVERSED() - IT RETURNS THE REVERSED ARRAY WITHOUT CHANING THE SOURCE ARRAY
*/
console.log("\n---------- TO REVERSED METHOD ----------");

const toReversedArr = [1, 2, 3];

const to_Reversed_Arr = toReversedArr.toReversed();
console.log(`Orignal Array : ${toReversedArr}`);
console.log("Reversed Array: ", to_Reversed_Arr);

/*
    TO SORTED() - IT RETURNS THE SORTED ARRAY WITHOUT CHANING THE SOURCE ARRAY
*/
console.log("\n---------- TO SORT METHOD ----------");

const toSortedArr = ["Jan", "May", "Apr", "Dec"];
const to_Sorted_Arr = toSortedArr.toSorted();
console.log(to_Sorted_Arr);

/*
    TO SPLICED() - IT RETURNS THE NEW ARRAY OF SPLICED 
*/
console.log("\n---------- TO SPLICED METHOD ----------");
const toSplicedArr = ["Jan", "Mar", "Apr", "May"];
const to_Spliced_arr = toSplicedArr.toSpliced(1, 0, "Feb");
console.log("Orignal Array: ", toSplicedArr);
console.log("Spliced Array: ", to_Spliced_arr);

/*
    WITH() - IT RETURNS THE NEW ARRAY OF BY CHANGING THE VALUE OF AN ELEMENT IN AN ARRAY WITH THE HELP OF INDEX 
*/
console.log("\n---------- WITH METHOD ----------");

const withArr = [1, 2, 3, 4, 5];
const newWithArr1 = withArr.with(2, 6); // 3 will be 6
const newWithArr2 = withArr.with(-2, 6); // 3 will be 6
console.log("Orignal Array: ", withArr);
console.log("New Array: ", newWithArr1);
console.log("New Negative Array: ", newWithArr2);
