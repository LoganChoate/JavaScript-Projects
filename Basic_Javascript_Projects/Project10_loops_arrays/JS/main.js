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

/**
 * This code creates a constant function,
 * changes and adds a property, then display them.
 */
function constant_function()
{
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$850";
    document.getElementById("Constant").innerHTML = "The cost of the "
     + Musical_Instrument.type + " was "
      + Musical_Instrument.price + ".";
}

/**This code creates an object, defines is,
 * and then uses a function to diplay its contents.
 */
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + 
        this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

/**
 * This code uses a break statement to exit a loop.
 */
function break_Loop()
{
    var text = "";
    for(let i = 0; i < 10; i++)
    {
            if(i === 3)
            {
                break;
            }
            text += "The number is " + i + "<br>";
            document.getElementById("Break").innerHTML = text;
    }
}

/**
 * This code uses a continue statement to skip a value.
 */
function continue_Loop()
{
    var text = "";
    for(let i = 0; i < 10; i++)
    {
            if(i === 3)
            {
                continue;
            }
            text += "The number is " + i + "<br>";
            document.getElementById("Continue").innerHTML = text;
    }
}