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

/**
 * This code will define a "For Loop".
 */
var Instruments = ["Guitar", "Drums", "Piano", "Bass", 
"Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop()
{
    for(Y = 0; Y < Instruments.length; Y++)
    {
        content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}