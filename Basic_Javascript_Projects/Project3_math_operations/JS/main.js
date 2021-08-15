//this code adds two numbers together
// and displays the result
function addition_Function()
{
    var Addition = 2 + 2;
    document. getElementById("Math").innerHTML = "2 + 2 = " + Addition;
}

//This function subtracts one number from another
//and diaplys the results
function subtraction_Function()
{
    var Subtraction = 5 - 2;
    document. getElementById("Math").innerHTML = "5 - 2 = " + Subtraction;
}

/* This function multiplies two numbers
ans displays the results */
function multiplication()
{
    var simple_Math = 6 * 8;
    document. getElementById("Math").innerHTML = "6 * 8 = " + simple_Math;
}

/* This function divides two numbers
and displays the results*/
function division()
{
    var simple_Math = 48 / 6;
    document. getElementById("Math").innerHTML = "48 / 6 = " + simple_Math;
}

/* This function completes a sequence of arithmetic
and display the results*/
function more_Math()
{
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " 
    +simple_Math;
}

/* This function calculates remainders and 
displays the results*/
function modulus()
{
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "when you divide 25 by 6, you have a remainder of:  " 
    + simple_Math;
}

/* This function takes a number and inverts it */
function negation_Operator()
{
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}

/*This code increments a number and displays it */
var x = 5;
x++;
document.write(x);
document.write("<br>");

/*This code decrements a number  */
var x = 5.25;
x--;
document.write(x);
document.write("\n");

/*This code generates a random number and displays it */
window.alert(Math.random());
document.write("<br>");

/* This code generates a random number between 0 and 100
and displays the result*/ 
window.alert(MAth.random() * 100);
document.write("<br>")
