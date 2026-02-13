// Datatypes
/*
In JavaScript, every value has a type.
These types define what kind of data is being stored — a number, text, boolean, object, etc.
There are two categories:

Primitive types – stored directly.      // string,number,boolean,null,undefined,symbol,bigint
Reference types – stored as memory references.  // arrays,object,function
*/

// let a = 12;
// let b = a;

// a = a+2;
// console.log(a);  // 14
// console.log(b);  // 12


// let a = [1,2,4];
// let b = a;
// b.pop();

// console.log(b); // [ 1, 2 ]
// console.log(a); // [ 1, 2 ]


// let a = null; 
// console.log(a); // null


// let a;
// console.log(a); // undefined


// symbol -> unique immutable value

// future me hum koi libraries use karege ab is case mein un libraries mein kai baar kuchh fields hoti hai jinse similar hum bhi bana dete hai aur galti se humari banaai hui fields us library ki original fields ko change kar deta hai

// let u1 = Symbol("uid");
// console.log(u1);    // Symbol(uid)
// let u2 = Symbol("uid");
// console.log(u1);    // Symbol(uid)

// console.log(u1==u2); // false



// let obj = {
//     uid: 1,
//     name: "priyanshu",
//     age: 20,
//     email: "priyanshu@gmail.com",
// };

// let u1 = Symbol("uid");
// obj[u1] = "001";

// console.log(obj);



// console.log(Number.MAX_SAFE_INTEGER);    // 9007199254740991

// // Number.MAX_SAFE_INTEGER se bada integer lenge to precision issue aayenge



// // bigint
// let a = 9007199254740991n;
// console.log(a+3n);



// Dynamic typing -> js mein static typing nahi hai and yaha par hai dynamic typing jiska matlab hai aap data ko change kr skte ho kyuki yaha par dynamic data types hai

// let a = 12;
// a = true; // allowed


/*
// typeof quirks (e.g., typeof null == 'object')
// Note: typeof null === "object" is a bug, but has existed since the early days of JS.

console.log(typeof null);  // object
console.log(typeof NaN);   // number
console.log(NaN===NaN);    // false 
*/


/*
// Type Coercion (Auto-Conversion): JavaScript auto-converts types in some operations:

console.log("5" + 1)         // "51" → number converted to string
console.log("5" - 1)         // 4 → string converted to number
console.log(true + 1)        // 2
console.log(null + 1)        // 1
console.log(undefined + 1)   // NaN
*/


/*
// Loose vs Strict Equality
// == compares value with type conversion
// === compares value + type (no conversion)

console.log(5 == "5")       // true
console.log(5 === "5")      // false

// Always prefer === for accurate comparisons.
// '5' + 1 is "51" but '5' - 1 is 4 .
*/



// Truthy and Falsy Values
// Falsy values: false , 0 , "" , null , undefined , NaN, document.all
// Everything else is truthy, including:
// "0" , "false" , [] , {} , function(){}
// agar kabhi bhi check karna HO true ya false ho to starting me `!!` laga dena

if ("0") {
    console.log("Runs"); // "0" is a non-empty string = truthy
}