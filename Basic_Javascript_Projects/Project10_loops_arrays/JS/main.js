/**
 * This code defines a function
 * that counts to 10. Displaying the
 * output all the while.
 */
function count_to_Ten()
{
    var Digit = "";
    var x = 1;
    while(x < 11)
    {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}