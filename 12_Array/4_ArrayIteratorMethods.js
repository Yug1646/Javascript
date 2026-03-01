let customers = [
  {
    id: 1,
    f_name: "Abby",
    l_name: "Thomas",
    gender: "M",
    married: true,
    age: 32,
    expense: 500,
    purchased: ["Shampoo", "Toys", "Book"],
  },
  {
    id: 2,
    f_name: "Riya",
    l_name: "Shah",
    gender: "F",
    married: false,
    age: 24,
    expense: 1200,
    purchased: ["Makeup", "Bag"],
  },
  {
    id: 3,
    f_name: "Aman",
    l_name: "Verma",
    gender: "M",
    married: false,
    age: 27,
    expense: 800,
    purchased: ["Shoes", "Watch"],
  },
  {
    id: 4,
    f_name: "Neha",
    l_name: "Patel",
    gender: "F",
    married: true,
    age: 35,
    expense: 1500,
    purchased: ["Saree", "Jewellery", "Perfume"],
  },
  {
    id: 5,
    f_name: "Kunal",
    l_name: "Mehta",
    gender: "M",
    married: true,
    age: 41,
    expense: 2000,
    purchased: ["Laptop", "Mouse", "Keyboard"],
  },
];

/*
  FILTER()
  - Creates a NEW array with all elements that satisfy a given condition
  - Does NOT modify the original array
  - Returns only elements for which callback returns true

  SYNTAX:
  const newArray = array.filter((element, index, array) => {
    return condition;
  });
*/
console.log("\n---------- FILTER METHOD ----------");
const filterArr = customers.filter((customer) => {
  return customer.age > 32;
});
console.log("Customer age greater than 32\n", filterArr);

/*
  MAP()
  - Used to transform each element of an array
  - Returns a NEW array of the same length
  - Each element is modified based on logic inside callback

  SYNTAX:
  const newArray = array.map((currentValue, index, array) => {
    return modifiedValue;
  });
*/
console.log("\n---------- MAP METHOD ----------");
const mapArr = customers.map((customer) => {
  let title = "";

  if (customer.gender === "M") {
    title = "Mr.";
  } else if (customer.gender === "F" && customer.married) {
    title = "Mrs.";
  } else {
    title = "Ms.";
  }

  customer["full_name"] = `${title} ${customer.f_name} ${customer.l_name}`;
  return customer;
});
console.log("Customers with Full Name\n", mapArr);

/*
  REDUCE()
  - Used to reduce multiple values of an array into a SINGLE value
  - Executes a reducer function on each element
  - Final result can be number, object, array, etc.

  SYNTAX:
  array.reduce(
    (accumulator, currentValue, index, array) => {
      return updatedAccumulator;
    },
    initialValue
  );
*/
console.log("\n---------- REDUCE METHOD ----------");

const reduceExampleArr = [1, 2, 3, 4, 5];
const sumResult = reduceExampleArr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log("Sum:", sumResult);

let cusCount = 0;
const reduceArr = customers.reduce((accumulator, customer) => {
  if (customer.purchased.includes("Book")) {
    accumulator = accumulator + customer.age;
    cusCount++;
  }
  return accumulator;
}, 0);

console.log("Customer Avg:", Math.floor(reduceArr / cusCount));

/*
  SOME()
  - Checks if AT LEAST ONE element satisfies the condition
  - Returns true or false
  - Stops execution as soon as condition is true

  SYNTAX:
  array.some((element, index, array) => {
    return condition;
  });
*/
console.log("\n---------- SOME METHOD ----------");

const someArr = customers.some((customer) => {
  return customer.age < 30;
});
console.log("Any customer below 30?", someArr);

/*
  EVERY()
  - Checks if ALL elements satisfy the condition
  - Returns true only if every callback returns true

  SYNTAX:
  array.every((element, index, array) => {
    return condition;
  });
*/
console.log("\n---------- EVERY METHOD ----------");

const everyArr = customers.every((customer) => {
  return customer.married;
});
console.log("All Customer Married? :", everyArr);

/*
  FIND()
  - Returns the FIRST element that matches the condition
  - If no match found, returns undefined

  SYNTAX:
  array.find((element, index, array) => {
    return condition;
  });
*/
console.log("\n---------- FIND METHOD ----------");
const findArr = customers.find((customer) => {
  return customer.age < 30;
});
console.log("Young Customer:", findArr);

/*
  FINDINDEX()
  - Returns the INDEX of first element that matches condition
  - If not found, returns -1

  SYNTAX:
  array.findIndex((element, index, array) => {
    return condition;
  });
*/
console.log("\n---------- FIND INDEX METHOD ----------");
const findIndexArr = customers.findIndex((customer) => {
  return customer.age < 30;
});
console.log("Young Customer Index:", findIndexArr);

/*
  FINDLASTINDEX()
  - Returns the INDEX of LAST element that matches condition
  - If not found, returns -1

  SYNTAX:
  array.findLastIndex((element, index, array) => {
    return condition;
  });
*/
console.log("\n---------- FIND LAST INDEX METHOD ----------");
const findLastIndexArr = customers.findLastIndex((customer) => {
  return customer.age < 30;
});
console.log("Young Customer Last Index:", findLastIndexArr);

/*
  FINDLAST()
  - Returns the LAST element that satisfies condition
  - If not found, returns undefined

  SYNTAX:
  array.findLast((element, index, array) => {
    return condition;
  });
*/
console.log("\n---------- FIND LAST METHOD ----------");
const findLastArr = customers.findLast((customer) => {
  return customer.age < 30;
});
console.log("Customer using Find Last:", findLastArr);

/*
  ARRAY CHAINING
  - Multiple array methods used together
  - Output of one method becomes input of next
*/
console.log("\n---------- ARRAY CHAINING METHOD ----------");

const totalExpense = customers
  .filter((customer) => customer.married)
  .map((marriedCustomer) => marriedCustomer.expense)
  .reduce((accum, expense) => accum + expense, 0);

console.log(`Total cost of married people: $ ${totalExpense}`);

/*
  FOREACH()
  - Executes callback function for each element
  - Does NOT return anything
  - Used mainly for side effects like logging

  SYNTAX:
  array.forEach((element, index, array) => {
    logic;
  });
*/
console.log("\n---------- FOR EACH METHOD ----------");
const foreachArr = [1, 2, 3, 4, 5];
foreachArr.forEach((element) => {
  console.log(element);
});

/*
  ENTRIES()
  - Returns an iterator with [index, value] pairs
*/
console.log("\n---------- ENTRIES METHOD ----------");
const NumArr = [1, 2, 3, 4, 5];
const arrEntr = NumArr.entries();

/*
  FOR...OF
  - Used to iterate over iterable objects (arrays, strings, maps)
*/
console.log("\n---------- FOR OF METHOD ----------");
for (const [i, e] of arrEntr) {
  console.log(`Index: ${i} and Element: ${e}`);
}

/*
  VALUES()
  - Returns an iterator of values of the array
*/
console.log("\n---------- VALUES METHOD ----------");
const valuesArr = NumArr.values();
for (const value of valuesArr) {
  console.log(value);
}

/*
  FLATMAP()
  - First maps each element, then flattens result by one level
  - Combination of map() + flat(1)
*/
console.log("\n---------- FLATMAP METHOD ----------");

const flatMapArr = [1, 2, 3, 4];

console.log(
  "Simple FlatMap:",
  flatMapArr.flatMap((item) => item * 2),
);

console.log(
  "Map only (nested):",
  flatMapArr.map((item) => [item * 2]),
);

console.log(
  "Map double nested:",
  NumArr.map((item) => [[item * 2]]),
);
console.log(
  "FlatMap double nested:",
  NumArr.flatMap((item) => [[item * 2]]),
);
