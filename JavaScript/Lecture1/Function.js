/*
What are Functions?
Functions are blocks of reusable logic.
Instead of repeating the same task again and again, wrap it in a function and reuse it with different inputs.

Think of a function like a vending machine:
Input: you give money + item code
Output: it gives you the item
Logic: hidden inside
*/

// Function Declaration
// function greet() {
//     console.log("Hello World!");
// }
// greet();

// // Hoisted - can be called before definition
// console.log(greet('Priyanshu')); // Works!

// function greet(name) {
//   return `Hello, ${name}!`;
// }

// Function Expression
// let fnc = function(){
//     console.log("hellooooo");
// }

// fnc();

// Fat Arrow Functions
// let fnc = ()=>{
//     console.log("hellooooo");
// }
// fnc();

// function print(v1){
//     console.log(`Hare ${v1}`);
// }

// print("krishna");
// print("ram");
// print("ramakrishna");

// function add(v1,v2){  // v1,v2 are parameter
//     console.log(v1+v2);
// }

// add(3,4);   // 3,4 are arguments

// function add(v1,v2){  // v1,v2 are parameter
//     console.log(v1, v2);  // undefined undefined
//     console.log(v1+v2);   // NaN
// }

// add();

// function add(v1 = 0,v2 = 0){  // v1,v2 have default value
//     console.log(v1, v2);  // 0 0
//     console.log(v1+v2);   // 0
// }

// add(); // if we pass arguments then result will be shown acc to argument

// jab argument kai sare ho to hume utne hi parameter banane padenge isse bachne ke liye hum rest/spread ka use karte hai ... agr ... function ke parameter space me lage to wo rest operator hai and agar vo arrays and object me lage to vo spread operator hai

// function abcd(...val){
//     console.log(val);
// }

// abcd(1,2,3,4,5,6,7,8,9,10);

// Output
/*
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
*/

// return value
/*
return sends back a result to wherever the function was called
After return , function exits
*/

// function sum(a, b) {
//   return a + b;
// }
// let total = sum(5, 10); // total is 15
// console.log(total);

// First-Class Functions -> function ko value ki tarah treet use kar sakte hai

// function abcd(val){
//   val();
// }

// abcd(function () {
//   console.log("Hahaahaha");
// });

// Higer orde function
// ye vo function hota hai jo ki return kare function ya accept kare ek fnc apne parameter mein

// function abcd(){
//   return function(){
//     console.log("Hellooloelo");
//   };
// }

// abcd()();

// pure vs impure functions

// aisse fn jo bahar ki value ko nhi badle vo hai pure fn jo badle vo impure func hai

let a = 12;

function abcd() {
  console.log("hehehhrhrh");
}

function hui() {
  a++;
}

/*
🔐 Closures & Lexical Scope
Closures = when a function remembers its parent scope, even after the parent has finished.
*/

function outer() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

let counter = outer();
counter(); // 1
counter(); // 2
// Even after outer is done, counter still remembers count .



// IIFE – Immediately Invoked Function Expression
// Used to create private scope instantly.

(function () {
  console.log("Runs immediately");
})();



// Hoisting: Declarations vs Expressions

hello(); // works
function hello() {
  console.log("Hi");
}


greet(); // error
let greet = function () {
  console.log("Hi");
};