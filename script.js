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