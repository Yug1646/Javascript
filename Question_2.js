// Question 1
console.log("Question 1");
let str1 = "Yug";
console.log(`Length of string of${str1.length}`);

// Question 2
console.log("\n\nQuestion 2");
let str = "JavaScript";
console.log(`First character: ${str[0]}`);
console.log(`Last character: ${str[str.length-1]}`);

// Question 3
console.log("\n\nQuestion 3");
console.log(`Uppercase: ${str1.toUpperCase()}`);
console.log(`Lowercase: ${str1.toLowerCase()}`);

// Question 4
console.log("\n\nQuestion 4");
console.log(str1.includes("Y"));

// Question 5
console.log("\n\nQuestion 5");
let sentence = "I love JavaScript";
//sentence.replace("JavaScript","coding");    // Why this is not working, my output was I love Javascript only
console.log(sentence.replace("JavaScript", "coding"));

// Question 6
console.log("\n\nQuestion 6");
let sentence2 = "I am learning JavaScript";
// console.log(sentence2.split(" "));
senWordsArr = sentence2.split(" ");
console.log(senWordsArr.length);

// Question 7
console.log("\n\nQuestion 7");
let str2 = "hello";
let str2Arr = str2.split("");

// Question 8
console.log("\n\nQuestion 8");
let gCount = 0;
let str3 = "programming";
for (const i of str3) {
  if (i === "g") {
    gCount++;
  }
}
console.log(gCount);

// Question 9
console.log("\n\nQuestion 9");
let str4 = "                  Yug";
let str5 = "Yug";

console.log(str4.trim());
if (str4 == str5) {
  console.log(true);
} else {
  console.log(false);
}

// Question 10
console.log("\n\nQuestion 10");
let email = "yug.jain@gmail.com";
let userName = email.split("@gmail.com");
console.log(userName[0]);

// Question 11
console.log("\n\nQuestion 11");
let str6 = 'javascript';
let capStr6 = str6.charAt(0).toUpperCase();
// We have to concat but I not getting the logic to merge the both strings
console.log(capStr6);

// Question 12
console.log("\n\nQuestion 12");
let str7 = "hello world from js";
let uprStr7 = str7.split(" ");
for(f of uprStr7)
{
    console.log(f[0].toUpperCase());
}
console.log(uprStr7);