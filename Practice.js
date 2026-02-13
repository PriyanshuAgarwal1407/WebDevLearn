let x = 10;
let y = 20;

if(x>5 && y<25){
    console.log("A");  
} else{
    console.log("B");
}

// A



let isAdmin = true;
let isLoggedIn = false;

if(isAdmin || isLoggedIn){
    console.log("Access Granted");
} else{
    console.log("Access Denied");
}

// Access Granted



let temp = 35;
if(!(temp<30)){
    console.log("Hot");
} else{
    console.log("Cold");
}


// Hot



// Predict

console.log("10" + 1);          // 101
console.log("10" - 1);          // 9
console.log(true + false);      // 1
console.log(!!"Priyanshu");     // true



let str = "42";
let num = +str;
console.log(num);   // 42


let age = 17;
let msg = age >= 18 ? "Adult" : "Minor";
console.log(msg);  // Minor




let a = 3;
let b = a++;
console.log(a,b);  // 4 3