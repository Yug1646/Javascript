/*
let myDate = new Date();

// Normal Way
console.log("Normal");
console.log(myDate);

// To String way
console.log("\nUsing to string");
console.log(myDate.toString());

// To ISO String way
console.log("\nUsing ISO String");
console.log(myDate.toISOString());

// To JSON way
console.log("\nUsing JSON");
console.log(myDate.toJSON());

// Locale Date String
console.log("\nUsing Locale Date String");
console.log(myDate.toLocaleDateString());

// Locale String
console.log("\nUsing Locale string");
console.log(myDate.toLocaleString());

// Locale Time String
console.log("\nUsing Locale Time string");
console.log(myDate.toLocaleTimeString());
*/

// Create your own date

/*
let myCreatedDate = new Date(2026, 3, 16);
console.log(myCreatedDate.toDateString());

myCreatedDate = new Date(2026, 3, 16, 19, 3);
console.log(myCreatedDate.toLocaleString());

// let myDate = new Date("2026-04-16"); // YYYY - MM - DD
let myDate = new Date("04-16-2006"); // MM - DD - YYYY
console.log(myDate.toLocaleString());
*/

// Time Stamp
let myTimeStamp = Date.now();
// console.log(myTimeStamp);   // Time is in milliseconds

// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());
// console.log(newDate.getDay());

// newDate.toLocaleString("default", {
//   // Press Ctrl + Space
//   weekday: "long",
// });
console.log(newDate.toLocaleString("default", {
  // Press Ctrl + Space
  weekday: "long",
}));