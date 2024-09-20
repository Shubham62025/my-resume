// Contact Form Submission Event
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Display a success message
    document.getElementById('form-response').innerText = `Thank you, ${name}! Your message has been sent.`;

    // Clear the form
    document.getElementById('contact-form').reset();
});
