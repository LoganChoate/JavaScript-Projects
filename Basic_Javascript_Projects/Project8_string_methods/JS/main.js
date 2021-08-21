/**
 * this code shows the concatenate method.
 */
function full_Sentence(){
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

/**
 * This code shows the slice method and how it can be used to 
 * chop up strings. 
*/
function slice_Method(){
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

/**
 * This code show a string method that translates chars to nums.
 */
function string_Method(){
    var X = 162;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

/**
 * This code shows a method that formats a number to a specified length.
 */
function precision_Method(){
    var x = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = x.toPrecision(10);
}

/**
 * This code demonstrates the toFixed() method.
 */
function to_Fixed(){
    var num = 10.321654987654321;
    var n = num.toFixed(2);
    document.getElementById("Fixed").innerHTML = n;
}

/**
 * This code demonstrates the valueOf() method.
 */
function value_Of(){
    var string_1 = "These words are revealed!";
    document.getElementById("Value").innerHTML = string_1.valueOf();
}
