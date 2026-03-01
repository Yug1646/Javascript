const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

let [firstFruit, secondFruit, ...remainingFruits] = fruits;

let fruitsCopy = [...fruits];

const extraFruits = ["Pineapple", "Kiwi", ...fruitsCopy];

console.log(`First Fruit : ${firstFruit}`);
console.log(`Second Fruit : ${secondFruit}`);
console.log(`Remaining Fruits : ${remainingFruits}`);
console.log(`Fruits Copy : ${fruitsCopy}`);
console.log(`New Array : ${extraFruits}`);
