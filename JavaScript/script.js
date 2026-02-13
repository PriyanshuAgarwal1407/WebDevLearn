/*
a = 12; // Implicit global variable (not recommended)

// var - Old way (avoid in modern JS)
var q = 12;
// window me add karta hai
// function scoped hota hai
// aap firse declare kar sakte hai same name se and error nhi aayega

var b = 12;
var b = "Priyanshu"


// let - Modern, for values that change
let counter = 0;
counter = 1; // ✅ Can reassign

// const - Modern, for values that don't change
const PI = 3.14159;
// PI = 3; // ❌ Error: Assignment to constant variable
*/


// Scope (Global, fumctional, block)

/*
// Temporal Dead Zone - utna area jisme js ko pata to hai ki variable exist karta hai par vo aaplo value nhi de sakta

console.log(a);


let a = 12;
*/


console.log(a);


var a = 12;



// Hoisting
// JavaScript prepares memory before running code.
// It moves all declarations to the top — this is called hoisting.
// But:
// var is hoisted and set to undefined
// let and const are hoisted but not initialized — so accessing them early gives referenceError


// var -> hoist -> undefined
// let -> hoist -> X
// const -> hoist -> X

