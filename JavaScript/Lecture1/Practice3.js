// Print 1 to 10 using for

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// Print even numbers between 1 to 20

// for(let i = 1; i <= 20; i++){
//     if(i%2===0) console.log(i);
// }

// Print number from 10 to 1 using while loop

// let i = 10;
// while(i>=1){
//     console.log(i);
//     i--;
// }

// Print odd number from 1 to 15 using while loop

// let i = 15;
// while (i>=1) {
//     if(i%2 !== 0){
//         console.log(i);
//     }
//     i--;
// }

// Print multiplication table of 5

// for(let i = 1; i <= 10; i++){
//     console.log(5*i);
// }

// Find sum of numbers from 1 to 100 using a loop

// let sum = 0;
// for(let i = 1; i <= 100; i++){
//     sum += i;
// }
// console.log(sum);

// Print all number from 1 to 50 that are divisible by 3

// for(let i = 1; i <= 50; i++){
//     if(i % 3 === 0) console.log(i);
// }

// Ask the user for a number and print whether each number from 1 to that number is even or odd

// let n = prompt("Enter a number: ");

// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even.`);
//   } else {
//     console.log(`${i} is odd.`);
//   }
// }

/*
The issue is that prompt() is a browser API and doesn't work in Node.js. I'll fix this by using Node.js's built-in readline module to get user input:
*/


// Count how many numbers between 1 to 100 are divisible by both 3 and 5

// let count = 0
// for(let i = 1; i <= 100; i++){
//     if(i%3===0 && i%5===0){
//         count ++;
//     }
// }

// console.log(`${count} number are divisible by both 3 and 5 between 1 to 100`);



/*
Q1: Stop at First Multiple of 7

Write a loop from 1 to 100 that:
  • Prints each number
  • Stops completely when it finds the first number divisible by 7
*/

// for(let i = 1; i <= 100; i++){
//     console.log(i);
//     if(i%7===0) break;
// }


/*
❓ Q2: Skip Multiples of 3

Write a loop from 1 to 20 that:
  • Skips numbers divisible by 3
  • Prints all others

💡 Use continue

Expected output:
1 2 4 5 7 8 10 11 ... (no 3, 6, 9, etc.)
*/

// for(let i=1; i<=20; i++){
//     if(i%3===0) continue;
//     console.log(i);
// }


/*
Q3: Print First 5 Odd Numbers Only

Write a loop from 1 to 100 that:
  • Prints only 5 odd numbers
  • Then stops the loop

💡 Use both if, continue, and a counter + break

Expected output:
1 3 5 7 9
*/

let count = 0;
for(let i=1; i<=100; i++){
    if (i % 2 === 0) continue;
    console.log(i);
    count++

    if(count === 5) break;
}