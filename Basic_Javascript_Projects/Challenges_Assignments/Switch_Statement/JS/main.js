/**
 * This code defines and uses a switch function.
 */
 function Color_Function()
 {
     var Color_Output;
     var Colors = document.getElementById("Color_Input").nodeValue;
     var Color_String = " is a great color!";
     switch(Colors)
     {
         case "Red":
             Color_Output = "Red" + Color_String;
         break;
         case "Yellow":
             Color_Output = "Yellow" + Color_String;
         break;
         case "Green":
             Color_Output = "Green" + Color_String;
         break;
         case "Blue":
             Color_Output = "Blue" + Color_String;
         break;
         case "Pink":
             Color_Output = "Pink" + Color_String;
         break;
         case "Purple":
             Color_Output = "Purple" + Color_String;
         break;
         default:
         Color_Output = "Please enter a color exactly as written on the above list.";
     }
     document.getElementById("Output").innerHTML = Color_Output;
 }
