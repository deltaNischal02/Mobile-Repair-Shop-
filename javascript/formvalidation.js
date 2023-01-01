
  // Get the form element
  const form = document.getElementById('contactForm');

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Validate the form fields
    if (validateForm()) {
      // If form is valid, show an alert
      alert('Form submitted successfully!');
    }
  }

  // Function to validate the form fields
  function validateForm() {
    let isValid = true;

    // Validate the name field
    const nameInput = document.getElementById('name');
    if (nameInput.value.trim() === '') {
      isValid = false;
      nameInput.classList.add('error'); // Add error class to highlight the field
    } else {
      nameInput.classList.remove('error'); // Remove error class if field is valid
    }

    // Validate the email field
    const emailInput = document.getElementById('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      isValid = false;
      emailInput.classList.add('error');
    } else {
      emailInput.classList.remove('error');
    }

    // Validate the contact number field
    const numberInput = document.getElementById('number');
    if (numberInput.value.trim() === '' || isNaN(numberInput.value)) {
      isValid = false;
      numberInput.classList.add('error');
    } else {
      numberInput.classList.remove('error');
    }

    // Validate the comment field
    const commentInput = document.getElementById('comment');
    if (commentInput.value.trim() === '') {
      isValid = false;
      commentInput.classList.add('error');
    } else {
      commentInput.classList.remove('error');
    }

    return isValid;
  }

  // Add form submission event listener
  form.addEventListener('submit', handleSubmit);

