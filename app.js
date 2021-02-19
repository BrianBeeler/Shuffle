
/**
 * Click handler for the "Click to reset button"
 */

let  numbersGlobal = [];

function resetDots() {

    debugger;

    count = 0;

    let dotsEl = document.getElementById("num-dots")
    let intervalEl = document.getElementById("interval-dots")
    
    numberOfDots = dotsEl.value;
    intervalOfDots = intervalEl.value;
    count = +intervalOfDots;
    numbers = []
    
    document.querySelector('#display').innerHTML = "";

    while (numberOfDots > 0) {
        numbers.push(count);
        numberOfDots--;
        document.querySelector("#display").innerHTML+= `<div>${count}</div>`;
        count += +intervalOfDots;
    }

    numbersGlobal = numbers;
    
}


/**
 * Click handler for the "Shuffle Dots"
 */

function shuffleDots() {

    let newNumbers = []

    document.querySelector("#display").innerHTML = "";

    while ( numbersGlobal.length ) {

        index = Math.floor( Math.random() * numbersGlobal.length );
        newNum = numbersGlobal.splice(index, 1);
        document.querySelector("#display").innerHTML+= `<div>${newNum}</div>`;     
        newNumbers.push(newNum);          
   
    }

    numbersGlobal = newNumbers;
    
}