/** A global variable is described below,
 * the two functions that reference it
 * add the variable to another number and display the result..
*/
var x = 10;
function Add_numbers_1()
{
    document.write(20 + x + "<br>");
}

function Add_numbers_2()
{
    document.write(x + 100);
}
Add_numbers_1;
Add_numbers_2;

/**
 * The following code defines a local variable.
 * The value of the variable is then added to another
 * number and displayed.
 */
function Add_numbers_3()
{
    var x = 10;
    document.write(20 + x + "<br>");
}
function Add_numbers_4() 
{
    document.write(x + 100);
}
Add_numbers_3();
Add_numbers_4();

/**
 *The following code defines a variable,
 adds the variable to another number and
 outputs it to the console. 
 */ 
function Add_numbers_5() 
{
    var x = 10;
    console.log(15 + x);
}
function Add_numbers_6()
{
    console.log(x + 100);
}
Add_numbers_5();
Add_numbers_6();

/** 
 * The following code fetches a date and displays a greeting
 * if the date is less than 18.
*/
function get_Date()
{
    if(new Date().getHours() < 20)
    {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
    else
    {
        document.write("No greeting for you!");
    }
}

/**
 * This code takes numerical input for user age
 * and makes a choice on what to display.
 */
function Age_Function()
{
    Age = document.getElementById("Age").nodeValue;
    if(Age >= 18)
    {
        Vote = "You are old enough to vote!";
    
    }
    else
    {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

/**
 * This code takes grabs the current time
 * and displays a message based on that time.
 */
function Time_function()
{
    var Time = new Date().getHours();
    var Reply;
    if(Time <12 == Time > 0)
    {
        Reply = "It is the morning time!";
    }
    else if(Time >= 12 == Time < 18)
    {
        Reply = "It is afternoon."
    }
    else
    {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}