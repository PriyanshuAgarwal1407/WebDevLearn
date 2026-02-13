
// Predict the output:
console.log(null + 1);      // 1
console.log("5" + 3);       // 53
console.log("5" - 3);       // 2
console.log(true + false);  // 1
console.log(!!undefined);   // false


// Check types:
console.log(typeof []);         // object
console.log(typeof null);       // object
console.log(typeof 123n);       // bigint


// Truthy or Falsy?

console.log(Boolean(0));         // false
console.log(Boolean("0"));       // true
console.log(Boolean([]));        // true
console.log(Boolean(undefined)); // false



// Compare with loose vs strict:
console.log(5 == "5");      // true
console.log(5 === "5");     // false