/**
 * This code validates the information that was input
 * into the contact form.
 */
function validateForm()
{
    let x = document.forms["Contact"]["fname"].value;
    if(x == "")
    {
        alert("Name must be filled out");
        return false;
    }
}