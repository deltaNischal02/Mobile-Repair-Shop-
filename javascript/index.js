// Get the number elements
const numberElement = document.querySelector('.number');
const number2Element = document.querySelector('.number2');

// Set the initial values
let number = 0;
let number2 = 0;

// Function to update the numbers
function updateNumbers() {
  if (number < 5012) {
    number++;
    numberElement.textContent =  number + " +" + " Happy Customers" ;
    // number.style.color "orange";
  }
  
  
  if (number2 < 5000) {
    number2++;
    number2Element.textContent = number2 + " +" + " Repair Orders" ;
  }
}

// Call the updateNumbers function every second
setInterval(updateNumbers, 1);
