const car = {
  companyName: "Tesla",
  model: "S Plaid",
  color: "Red",
};

console.log(car);
console.log(car.companyName);

// Adding a new property

car.Connectivity = true;

console.log(car);

delete car.model;

console.log(car);

for (let details in car) {
  console.log(`${details} : ${car[details]}`);
}

const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Display JSON
let text = JSON.stringify(person);

console.log(text);