/*
Check if "Apple" exists in the list : Done

Find the first position of "Apple" : Done

Find the last position of "Apple" : Done

Remove the last item from the list : Done

Add "Eggs" at the start of the list : Done

Convert the final list into a single string separated by commas : Done

Sort the list alphabetically without changing the original array : Done
*/

const cart = ["Milk", "Bread", "Apple", "Butter", "Apple", "Cheese"];

const appleCheck = () => {
  let applePresent = cart.includes("Apple");
  return applePresent;
};

const firstPosition = () => {
  let AppleFPostion = cart.indexOf("Apple");
  return AppleFPostion;
};

const lastPosition = () => {
  let AppleLPostion = cart.lastIndexOf("Apple");
  return AppleLPostion;
};

const removeLastItem = (cartItem) => {
  let removeItem = cartItem.pop();
  return removeItem;
};

const addItem = (item, cartItem) => {
  cartItem.unshift(item);
  return cartItem;
};

const listConvert = (cartItem) => {
  //   return cartItem.toString(",");
  //   return cartItem.toString(" ,");       Why space is not coming
  return cartItem.join(", ");
};

const alphaList = (cartItem) => {
  //   let orderList = cartItem.sort();
  //   return orderList;
  return cartItem.toSorted();
};

console.log(`1. Is apple present in the cart : ${appleCheck()}`);
console.log(`2. First Position of Apple in the cart : ${firstPosition()}`);
console.log(`3. Last Position of Apple in the cart : ${lastPosition()}`);
console.log(`4. Last item removed from the cart : ${removeLastItem(cart)}`);
console.log(`5. Item added in cart : ${addItem("Eggs", cart)}`);
console.log(`6. Cart in Strings : ${listConvert(cart)}`);
console.log(`7. List in Aplhabetical order : ${alphaList(cart)}`);

console.log("\n\n");

console.log("----- Original List -----");
console.log(cart);

console.log("----- Modified List -----");
let modifiedArray = addItem("Eggs", cart);
console.log(modifiedArray);

console.log("----- Sorted List -----");
console.log(alphaList(cart));
