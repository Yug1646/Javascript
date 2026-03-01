let x;

const fname = "Yug",
  age = 20;

// CONCAT WITH "+"
x = "Hello, My name is " + fname + " ,and I am " + age + " years old !!!";

// Template Literals
x = `Hello, my name is ${fname}, and I am ${age} years old.`;

// ----------- PROPERTY AND METHODS -----------

const s = new String("Hello World");
// const s = "Hello World";

// To find the length of String
x = s.length;

// Accessing by Value
x = s[1];

// PROTOTYPE
x = s.__proto__;

// Changing Cases
x = s.toUpperCase();
x = s.toLowerCase();

// CharAT
x = s.charAt(4);

// Index of
x = s.indexOf("H");

// Substring
x = s.substring(0, 4);
x = s.substring(4);

// Slice
x = s.slice(0, 3);
x = s.slice(-11, -1);

// Trim
x = s.trim();

// Replace
x = s.replace("World", "Tony");

// Includes
x = s.includes("Hello");

// Split
x = s.split("");

console.log(x);
