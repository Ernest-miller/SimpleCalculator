//// could not get this function to work
    

    // function
    let messageBoard = '';
    let numberDisplay = document.getElementById('numberDisplay');
    let messageContainer = document.createElement('p');
    function addMessage(numberDisplay, comp = false ) {
    messageContainer.innerText = numberDisplay;
    if (comp) {
        setTimeout(() => {
            numberDisplay.prepend(messageContainer);
            running = false;
        }, 500);
    } else {
        numberDisplay.prepend(messageContainer);
    }t
}
////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// the working Calculator \\
function calculator(number1, number2, operator = '*') {
    let calculator = document.getElementById('calculator');
    let header = document.getElementsByClassName ('header');
    let display = document.getElementById('numberDisplay');
    let allblocks = document.querySelectorAll('.block');
    let blocks = document.getElementById('blocks');
    let block = document.getElementsByClassName('.block');

    if (operator == '+') { return number1 + number2; }
        else if (operator == '-') { return number1 - number2; }
        else if (operator == '*') { return number1 * number2; }
        else if (operator == '/') { return number1 / number2; }
}    console.log(calculator(5, 5));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// testing different things
function testCalculator(number1, number2, operator = '+') {
    let block_1 = document.getElementById('block_1');
    let block_2 = document.getElementById('block_2');
    let block_3 = document.getElementById('block_3');
    let block_4 = document.getElementById('block_4');
    let block_5 = document.getElementById('block_5');
    let block_6 = document.getElementById('block_6');
    let block_7 = document.getElementById('block_7');
    let block_8 = document.getElementById('block_8');
    let block_9 = document.getElementById('block_9');
    let block_0 = document.getElementById('block_0');
    let block_plus = document.getElementById('plus');
    let block_minus = document.getElementById('minus');
    let block_multiply = document.getElementById('multiply');
    let block_divide = document.getElementById('divide');
    let block_equal = document.getElementById('equal');
//
//
//
//
    block_1.addEventListener('click', function (event) { block_1 = true;
        if (block_1 == true) {
        //     if (operator == '+') { number1 + number2 }
        //     else if (block_1 = true && operator == '-') { number1 - number2 }
        //     else if (block_1 = true && operator == '*') { number1 * number2 }
        //     else if (block_1 = true && operator == '/') { number1 / number2 }
            console.log(1);
            // addMessage('3');
        }
    });
    block_2.addEventListener('click', function (event) { block_2 = true;
        if (block_2 == true) {
            // if (operator == '+') { number1 + number2 }
            // else if (operator == '-') { number1 - number2 }
            // else if (operator == '*') { number1 * number2 }
            // else if (operator == '/') { number1 / number2 }
            console.log(2);
        }
    });
    block_3.addEventListener('click', function (event) { block_3 = true;
        if (block_3 = true) {
            console.log(3);
        }
    });
    block_4.addEventListener('click', function (event) { block_4 = true;
        if (block_4 == true) {
            // if (operator == '+') { number1 + number2 }
            // else if (operator == '-') { number1 - number2 }
            // else if (operator == '*') { number1 * number2 }
            // else if (operator == '/') { number1 / number2 }
            console.log(4);
        }
    });
    block_5.addEventListener('click', function (event) { block_5 = true;
        if (block_5 == true) {
            // if (operator == '+') { number1 + number2 }
            // else if (operator == '-') { number1 - number2 }
            // else if (operator == '*') { number1 * number2 }
            // else if (operator == '/') { number1 / number2 }
            console.log(5);
        }
    });
    block_6.addEventListener('click', function (event) { block_6 = true;
        if (block_6 == true) {
            // if (operator == '+') { number1 + number2 }
            // else if (operator == '-') { number1 - number2 }
            // else if (operator == '*') { number1 * number2 }
            // else if (operator == '/') { number1 / number2 }
            console.log(6);
        }
    });
    block_7.addEventListener('click', function (event) { block_7 = true;
        if (block_7 == true) {
            // if (operator == '+') { number1 + number2 }
            // else if (operator == '-') { number1 - number2 }
            // else if (operator == '*') { number1 * number2 }
            // else if (operator == '/') { number1 / number2 }
            console.log(7);
        }
    });
    block_8.addEventListener('click', function (event) { block_8 = true;
        if (block_8 == true) {
            // if (operator == '+') { number1 + number2 }
            // else if (operator == '-') { number1 - number2 }
            // else if (operator == '*') { number1 * number2 }
            // else if (operator == '/') { number1 / number2 }
            console.log(8);
        }
    });
    block_9.addEventListener('click', function (event) { block_9 = true;
        if (block_9 == true) {
            // if (operator == '+') { number1 + number2 }
            // else if (operator == '-') { number1 - number2 }
            // else if (operator == '*') { number1 * number2 }
            // else if (operator == '/') { number1 / number2 }
            console.log(9);
        }
    });
    block_0.addEventListener('click', function (event) { block_0 = true;
        if (block_0 == true) {
            // if (operator == '+') { number1 + number2 }
            // else if (operator == '-') { number1 - number2 }
            // else if (operator == '*') { number1 * number2 }
            // else if (operator == '/') { number1 / number2 }
            console.log(0);
        }
    });
        
    block_plus.addEventListener('click', function (event) {
        block_plus = true;
        if (block_plus == true) { operator = '+'; console.log('+'); }
    });
    block_minus.addEventListener('click', function (event) {
        block_minus = true;
        if (block_minus == true) { operator = '-'; console.log('-'); }
    });
    block_multiply.addEventListener('click', function (event) {
        block_multiply = true;
        if (block_multiply == true) { operator = '*'; console.log('*'); }
    });
    block_divide.addEventListener('click', function (event) {
        block_divide = true;
        if (block_divide == true) { operator = '/'; console.log('/'); }
    });
    block_equal.addEventListener('click', function (event) {
        block_equal = true;
        if (block_equal == true) { operator = '='; console.log('='); }
    });
}    console.log(testCalculator(50, 50));
