/**This code defines a function
 *  that is linked to the "Ride" id */
function Ride_Function()
{
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}

/**This copde is a contructor that details a car object */
function Vehicle(Make, Model, Year, Color)
{
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

/**This code constructs new vehicle objects */
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

/**This code defines a function that is called
 *  by the index.html file */
function myFunction()
{
    document.getElementById("Keywords_and_Constructors").innerHTML=
    "Erik drives a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model
    + " manufactured in " + Erik.Vehicle_Year;
}

/**The following code is an example of nested functions */
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count()
    {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}

/**This code counts to 10 using a nested function */
function minus_Function()
{
    document.getElementById("Nested_Function").innerHTML = CountDown();
    function CountDown()
    {
        var num = 10;
        function Minus_one()
        {
            num -= 1;
        }
        Minus_one();
        return num;
    }
}