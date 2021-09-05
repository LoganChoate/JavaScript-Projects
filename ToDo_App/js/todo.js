/**This function gets the task from the input */
function get_todos() {
    /**This creats an array of the tasks that are inputed */
    var todos = new Array;
    /**this pulls the task that was saced in the web browser memory*/
    var todos_str = localStorage.getItem('todo');
    /**If the input is not null then JSON.parse will communicate
     *  with the web browser to make the task a javascript object*/
    if(todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

/**This function adds the inputted task to the get_todos cuntion array */
function add() {
    /**This code takes the inputed tasks and creates a variable of it */
    var task = document.getElementById('task').value;

    var todos = get_todos();
    /**This adds a new task at the end of the array */
    todos.push(task);
    /**This code converts the task input to the a JSOPN string */
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById('task').value = "";
    show();

    return false;
}

/**This function keeps the tasks permanetly displayed on the screen */
function show() {
    /**This sets the task that was retrieved as a variable */
    var todos = get_todos();

    /**This sets up each task as an unorded list */
    var html = '</ul>';
    /**This displays a task to the list in the order that it is inputed */
    for(var i = 0; i < todos.length; i++) {
        /**This code also displays the task as a list and creates the
         * button with the "x"
          */
         html += '<li>' + todos[i] + '<button class="remove" id="' + i +'">x</button><li>';

    };
    html =+ '</ul>';
    /**This displays the task as a list */
    document.getElementById('todos').innerHTML = html;

    /**This code informs the browser how to display the todo
     * array after an item has been removed
     */
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons; i++){
        buttons[i].addEventListener('click', remove);
    };
}
/**This diplays the inputed task when the 'Add Item' button is clicked*/
document.getElementById('add').addEventListener('click', add);
/**This will keep the inputs displayed permanently on the screen */
show();

/**This code creates the functionality of removing a todo item from the array */
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    /**This looks in the show() how to display a removed item in the screen */
    show();

    return false;
}