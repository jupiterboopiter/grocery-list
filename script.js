let button = document.getElementById('enter');
let input = document.getElementById('userinput');
let ul = document.querySelector('ul');

// Select all the initial li's
let lis = document.querySelectorAll('li');
// Create a variable for future delete buttons
let deleteButton;


// Return lengh of input
function inputLength() {
    return input.value.length;
}

//Create delete buttons and append it to their parents(li)
function createDeleteButton(parent) {
    // Create element button
    let button = document.createElement('button');
    // Create and append text inside button
    button.appendChild(document.createTextNode('X'));
    // Give class=delete to buttons - it's going to be used to select them in the future
    button.className = 'delete';
    // Append or insert the button to the parent element(li)
    parent.appendChild(button);
}

// Toggle class=done when you invoke the function - use "this" to toggle only the one you selected
function toggleDoneClass() {
    this.classList.toggle("done");
}

//Create the "li" with everything it needs inside of it(text ,button, class)
function createListElement() {
    //Create "li"
    let li = document.createElement("li");
    let span = document.createElement("span");
    // Create text for the li according to what you put in the input
    li.appendChild(span);
    span.appendChild(document.createTextNode(input.value));
    // Append or insert the new li to the ul
    ul.appendChild(li);

    //Create the delete button calling the funtion with the new li
    createDeleteButton(li);
    //Updates the selector to the new number of buttons with class=delete
    deleteButton = document.querySelectorAll(".delete")

    //Applies the functionality to remove the li
    updateDeleteButtons()

    //add the click listener to toggle class=done
    li.addEventListener('click', toggleDoneClass)

    //Makes the input go back to blank when this function is done
    input.value = "";
}