/**This code defines a function that
 * calls a small dictionary object
 *  and its KVP's */
function my_Dictionary()
{
    var Animal = {
        Species:"Snake",
        Color:"Green",
        Breed:"Viper",
        Age:5,
        Sound:"Hiss!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}


