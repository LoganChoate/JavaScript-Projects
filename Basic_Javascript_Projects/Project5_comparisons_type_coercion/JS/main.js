/**This code uses a document.write call to 
 * display a string variable.
 */
document.write(typeof "Word");
document.write("<br>");

/**This code uses a document.write call to
 * display a numerical variable.
 */
document.write(typeof 3);
document.write("<br>");

/**This code demonstrates type coercion */
document.write("10" + 5);
document.write("<br>");

/**This code displays +infinity*/
document.write(2E310);
document.write("<br>");

/**This code displays -infinity */
document.write(-3E310);
document.write("<br>");

/**This code uses boolean logic to display true*/
document.write(100 > 1);
document.write("<br>");

/**This code uses boolean logic to diplay false*/
document.write(5 > 50);
document.write("<br>");

/**This code throws output to the console */
console.log(5 + 5);

/**This code displays "false" using boolean logic,
 *  its output is routed to the console*/
console.log(8 > 16);

/**This code displays "true" using a comparator */
document.write(10 == 10);
document.write("<br>");

/**This code displays "false" using a comparator */
document.write(3 == 11);
document.write("<br>");

/**This code displays true using  the "===" comparator
 * on numerical data types
 */
x = 10;
y = 10;
document.write(x === y);
document.write("<br>");

/**This code displays false using the "===" comparator
 * on mixed data types.
 */
X = 82;
Y = "82";
document.write(X === Y);
document.write("<br>");

/**This code disppalys true using
 *  the "===" comparator on strings */
A = "Magnus";
B = "Magnus";
document.write(A === B);
document.write("<br>");

/**This code diplays false using
 *  the "===" comparator on different values 
 * and data types. */
Name = "Steve";
Number = "808";
document.write(Name === Number);
document.write("<br>");

/**This code diplays true using the && operator */
document.write(5 > 2 && 10 > 4);
document.write("<br>");

/**This code displays false using the && operator */
document.write(5 > 10 && 10 > 4);
document.write("<br>");

/**This code displays true using the || operator */
document.write(5 > 10 || 10 > 4);
document.write("<br>");

/**This code displays false using the || operator */
document.write(5>10 || 10>20);
document.write("<br>");

/**This code diplays ! negation ot "not"
 *  operator in action. It results in "False" */
function not_Function1()
{
    document.getElementById("Not").innerHTML = !(20>10);
}

/**This code displays the! negation or "not"
 * operator in action. It results in "True" */
function not_Function2()
{
    document.getElementById("Not").innerHTML = !(5 > 10);
}
