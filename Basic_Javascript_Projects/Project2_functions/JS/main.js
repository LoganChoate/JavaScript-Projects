/*The code below turns text green that is displayed by a button */
function My_First_Function()
{
    var str = "This text is green!";
    var result = str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result;
}


/*The code below displays a concatenated sentence when a paragraph is clicked on*/
function myFunction()
{
    var sentence = "I am learning";
    sentence += " a lot from this course!";
    document.getElementById("Concatenate").innerHTML = sentence;
}