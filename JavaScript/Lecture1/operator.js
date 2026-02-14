/*
What are Operators?
Operators are special symbols or keywords in JavaScript used to perform operations on values (operands).
You’ll use them in calculations, comparisons, logic, assignments, and even type checks.
Think of them as the verbs of your code — they act on data.
*/

// ➕ Arithmetic Operators: Used for basic math.
/*
+ // addition
- // subtraction
* // multiplication
/ // division
% // modulus (remainder)
** // exponentiation (power)
*/

let a = 10, b = 3;
console.log(a + b);     // 13
console.log(a - b);     // 7
console.log(a * b);     // 30
console.log(a / b);     // 3.3333333333333335
console.log(a % b);     // 1
console.log(2 ** 3);    // 8



// Comparison Operators: Used in condition checks.
/*
==      // equal (loose)
===     // equal (strict – value + type)
!=      // not equal (loose)
!==     // not equal (strict)
> < >= <=
*/

console.log(3 != "3");   // false
console.log(3 !== "3");  // true
console.log(5 > 3);      // true
console.log(5 < 3);      // false
console.log(5 >= 3);     // true
console.log(5 <= 3);     // false
console.log(5 == "5");   // true
console.log(5 === "5");  // false



// Assignment Operators: Assign values to variables.
/*
=        // assigns value
+=       // a += b => a = a + b
-=       // a -= b
*=, /=, %=
*/

let score = 5;
console.log(score += 2);     // score = 7
console.log(score -= 2);     // score = 5
console.log(score *= 2);     // score = 10
console.log(score /= 2);     // score = 5
console.log(score %= 2);     // score = 1


// Logical Operators: Used to combine multiple conditions.
/*
&&      // AND – both must be true
||      // OR – either one true
!       // NOT – negates truthiness
*/

let age = 20, hasID = true;
if (age >= 18 && hasID) {
    console.log("Allowed");     // Allowed
}


// Unary Operators: Used on a single operand.
/*
+        // tries to convert to number
-        // negates
++       // increment
--       // decrement
typeof   // returns data type
*/

let x = "5";
console.log(+x);    // 5 (converted to number)
console.log(-x);    // -5
console.log(++x);   // 6
console.log(--x);   // 5
console.log(typeof x);  // number


// Ternary Operator (Conditional): Shorthand for if...else
// condition ? valueIfTrue : valueIfFalse

let marks = 80;
let grade = marks > 50 ? "Pass" : "Fail";
console.log(grade);  // Pass



// typeof Operator
typeof 123       // "number"
typeof "hi"      // "string"
typeof null      // "object" (JS bug)
typeof []        // "object"
typeof {}        // "object"
typeof function(){} // "function"


// instanceof sirf reference value ke sath kaam karta hai primitive ke sath nhi

let arr = [];
console.log(arr instanceof Array);  // true
arr instanceof Array