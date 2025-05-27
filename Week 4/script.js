var isRaining = true;
var isGroundWet = false;
var isSnowing = true;

// && - 'AND' statement , both values have to be true for the whole statement to be true
// || - 'OR' statement, either one value is true, or both, but not neither

// if (true OR (false AND true))
if(isRaining || (isGroundWet && isSnowing))
{
    // alert('It is raining');
}

/*************************************  FUNCTIONs  ******************************************************** */

var x = 5;
var y = 9;

function calculatorAdd(num1, num2) {
    var z = num1 + num2;
    alert(z);

    return z; // Finish function, anyting after this will not run
}

calculatorAdd(3, 7);

// convert a number to a dollar amount string
function dollarAmount(value1, value2)
{
    var amount = calculatorAdd(value1, value2);
    var dollarString = "$" + amount.toFixed(2);
    return dollarString;
}

var convertedDollar = dollarAmount(5, 9);
console.log(convertedDollar);