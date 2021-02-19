
/**
 * Click handler for the "Click to reset button"
 */

let  numbersGlobal = [];

function resetDots() {

    let dotsEl = document.getElementById("num-dots")
    let intervalEl = document.getElementById("interval-dots")
    
    numberOfDots = dotsEl.value;
    intervalOfDots = intervalEl.value;
    count = +intervalOfDots;
    numbers = []
    
    document.querySelector('#display').innerHTML = "";

    while (numberOfDots > 0) {
        numbers.push(count);
        count += +intervalOfDots;
        numberOfDots--;
        document.querySelector("#display").innerHTML+= `<div>${count}</div>`;
    }

    numbersGlobal = numbers;
    
}


/**
 * Click handler for the "Shuffle Dots"
 */

function shuffleDots() {

    console.log("Shuffling!");

    let newNumbers = []

    document.querySelector("#display").innerHTML = "";

    while ( numbersGlobal.length ) {

        index = Math.floor( Math.random() * numbersGlobal.length );

        newNum = numbersGlobal.splice(index, 1);

        
        document.querySelector("#display").innerHTML+= `<div>${newNum}</div>`;

        
        newNumbers.push(newNum);          
        console.log('While is running!');
    }

    numbersGlobal = newNumbers;
    
}