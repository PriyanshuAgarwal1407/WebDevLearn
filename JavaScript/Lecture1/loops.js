/*
Why Loops?
Loops help us repeat code without rewriting it.
If a task needs to be done multiple times (e.g., printing 1–10, going through an array, or
checking each character in a string), loops are the backbone.
*/

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }


// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }


// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 5);


// break : Exit loop completely
// continue : Skip current iteration and move to next

for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i); // Skips 3
}