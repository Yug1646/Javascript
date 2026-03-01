console.log("----------LEVEL 1 ----------\n");
{
  const fruits = ["Pineapple", "Apple", "Watermelon", "Litchi", "Banana"];
  // ADDING AN ELEMENT INTO ARRAY
  fruits.push("Blueberry");
  console.log("Adding an fruit in array:", fruits);

  // REMOVING THE FIRST ELEMENT FROM ARRAY
  fruits.shift();
  console.log("Removing the first element from array:", fruits);

  // CHECKING IF A GIVEN VARIABLE IS AN ARRAY
  let arrTest;
  console.log("Is variable an array: ", Array.isArray(arrTest));

  // COPYING AN ARRAY
  let fruitsCopy = [...fruits];
  // fruitsCopy.pop();
  // console.log(fruits);
  console.log("Copy of fruits array:", fruitsCopy);
}

console.log("\n----------LEVEL 2 ----------\n");
{
  const numArr = [1, 2, 3, 4, 5];
  // EXTRACTING FIRST 2 ELEMENTS FROM ARRAY
  console.log(
    `The first element in array is ${numArr[0]} and second element is ${numArr[1]}`,
  );

  // SKIPPING THE SECOND ELEMENT
  const [one, , ...rest] = [...numArr];
  let finalArr = [one, ...rest];
  console.log("After skipping the second element:", finalArr);

  // SWAPPING TWO VARIABLES

  let var1 = 5,
    var2 = 6;
  console.log(`Before swapping Variable 1: ${var1}`);
  console.log(`Before swapping Variable 2: ${var2}`);

  [var1, var2] = [var2, var1];

  console.log(`After swapping Variable 1: ${var1}`);
  console.log(`After swapping Variable 2: ${var2}`);

  // ACCESSING AN ELEMENT FROM NESTED ARRAY
  const nestedArr = [1, 2, 3, [4, 5, 6]];
  console.log("Accessing the value 5 by:", nestedArr[3][1]);

  // I already used rest operator in above question
}

console.log("\n----------LEVEL 3 ----------\n");
{
  const fnameArr = ["Tony", "Yug", "Peter", "Steven", "Stan"];
  const lnameArr = ["Stark", "Jain", "Parker", "Strange", "Lee"];

  // CONCATING THE ARRAY
  console.log("Concat array:", fnameArr.concat(lnameArr));

  // JOINING AS A STRING
  let joinArr = fnameArr.join(",");
  console.log("Join array:", joinArr);
  console.log(`Type of join array: ${typeof joinArr}`);

  // CHECKING FOR A SPECIFIC VALUE
  console.log(`Is Tony an avenger: ${fnameArr.includes("Tony")}`);
  console.log(`Is Steve an avenger: ${fnameArr.includes("Steve")}`);

  // FINDING THE INDEX OF ELEMENT
  console.log(`Index of Avenger Yug: ${fnameArr.indexOf("Yug")}`);

  // TO CHECK, WE HAVE TO CREATE A COPY OF ARRAY
  let lnameArr_Copy = [...lnameArr];
  lnameArr_Copy.reverse();
  console.log("Original array:", lnameArr);
  console.log("Reverse array:", lnameArr_Copy);
}

console.log("\n----------LEVEL 4 ----------\n");
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
{
  // CUSTOMERS GREATER THAN 30
  const seniorCustomer = customers.filter((customer) => {
    return customer.age > 30;
  });
  console.log("Customers greater than 30:", seniorCustomer);

  // ONLY EXPENSE OF CUSTOMER
  const customerExpense = customers.map((customer) => {
    return customer.expense;
  });
  console.log("Expense of customer:", customerExpense);

  // ADDING THE FULL NAME FIELD
  const customerFullName = customers.map((customer) => {
    customer["fullName"] = `${customer.f_name} ${customer.l_name}`;
    return customer.fullName;
  });
  console.log("Full Name of Customer:", customerFullName);

  // CUSTOMERS AGE LESS THAN 30
  const juniorCustomer = customers.filter((customer) => {
    return customer.age < 30;
  });
  console.log("Customers age less than 30:", juniorCustomer);

  // INDEX OF CUSTOMER WITH AGE LESS THAN 30

  const babyCustomer = customers.findIndex((customer) => {
    return customer.age < 30;
  });
  console.log("Last customer less than 30:", babyCustomer);
}

console.log("\n----------LEVEL 5 ----------\n");
{
  const numArr = [1, 2, 3, 4, 5];

  // SUM OF NUM ARRAY
  const sumNumArr = numArr.reduce((acc, value) => {
    return (acc += value);
  });
  console.log(`Sum of numbers: ${sumNumArr}`);

  // CUSTOMER WITH BOOKS
  let cusBookCount = 0;
  const customerWithBook = customers.reduce((acc, customer) => {
    if (customer.purchased.includes("Book")) {
      acc = acc + customer.age;
      cusBookCount++;
    }
    return acc;
  }, 0);
  console.log(
    `Avg age of customer with book: ${Math.floor(
      customerWithBook / cusBookCount,
    )}`,
  );

  // TOTAL EXPENSE OF MARRIED CUSTOMERS

  const totalExpense = customers
    .filter((customer) => {
      return customer.married;
    })
    .map((customer) => {
      return customer.expense;
    })
    .reduce((acc, expenseValue) => {
      acc += expenseValue;
      return acc;
    });
  console.log(`Expense of married customer: $${totalExpense}`);

  // COUNT OF UNMARRIED CUSTOMER
  let unMarryCount = 0;
  const countUnMarry = customers.map((customer) => {
    if (customer.married === false) {
      unMarryCount++;
    }
  });

  console.log(`Count of unmarried customers: ${unMarryCount}`);
}

