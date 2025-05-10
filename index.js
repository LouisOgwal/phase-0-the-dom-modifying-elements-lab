// Remove the <main> element with id 'main'
document.querySelector('main#main').remove();

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Assign it the id of 'victory'
newHeader.id = 'victory';

// Set the innerHTML or textContent to your custom message
newHeader.textContent = 'Louis is the champion';

// Add it to the DOM (optional based on tests — but safe to include)
document.body.append(newHeader);
