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
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop()
{
    for(Y = 0; Y < Instruments.length; Y++)
    {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

/**
 * This code will display a specific element of an array.
 */
function cat_pics()
{
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture the cat is " + Cat_Picture[2] + ".";
}