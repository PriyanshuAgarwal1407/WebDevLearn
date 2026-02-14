// use rest parameter to accept any number of scores and return the total

function getScore(...scores){
    let total = 0;
    scores.forEach(function(val){
        total += val;
    })
    return total;
}

console.log(getScore(10,20,3,0,40,50,60,6,35));