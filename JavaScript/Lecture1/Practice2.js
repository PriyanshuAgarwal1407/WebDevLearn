// Write a program that prints A, B, C, D, or F based on marks

function getGrade(score){
    if(score >=90 && score <= 100){
        return "A";
    }
    else if(score >= 80 && score <= 89){
        return "B";
    }
    else if(score >= 70 && score <= 79){
        return "C";
    }
    else if(score >= 60 && score <= 69){
        return "D";
    }
    else{
        return "F";
    }
}

console.log(getGrade(78));



// Given player1 and player2's choice, print winner or draw Rock Paper Scissor

// function rps(player1,player2){
//     if(player1 === "rock" && player2 ==="scissor") return "player1";
//     if(player1 === "scissor" && player2 ==="scissor") return "draw";
//     if(player1 === "paper" && player2 ==="scissor") return "player2";
//     if(player1 === "rock" && player2 ==="rock") return "draw";
//     if(player1 === "paper" && player2 ==="rock") return "player1";
//     if(player1 === "scissor" && player2 ==="rock") return "player2";
//     if(player1 === "rock" && player2 ==="paper") return "player2";
//     if(player1 === "paper" && player2 ==="paper") return "draw";
//     if(player1 === "scissor" && player2 ==="paper") return "player1";
// }

// rps("rock","scissor")

function rps(player1,player2){
    if(player1 === player2) return "draw";
    if(player1 === "rock" && player2 ==="scissor") return "player1";
    if(player1 === "paper" && player2 ==="rock") return "player1";
    if(player1 === "scissor" && player2 ==="paper") return "player1";

    return "player2";
}

console.log(rps("rock","scissor"));