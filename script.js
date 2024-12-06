/* Resume.html */
/* make linkedin& Github logo clickable*/
// Query the LinkedIn logo
let linkedinLogo = document.getElementById('linkedinLogo');
let githubLogo = document.getElementById('githubLogo');

// Function to handle the click event
function handleLinkedInClick() {
    // Display a message or perform any action
    alert('You are about to visit my LinkedIn profile!');

    // Redirect to LinkedIn
    window.location.href = linkedinLogo.href;
}

function handleGithubClick() {
    // Display a message or perform any action
    alert('You are about to visit my Github profile!');

    // Redirect to LinkedIn (if you stopped default behavior)
    window.location.href = githubLogo.href;
}

// Add the event listener
linkedinLogo.addEventListener('click', handleLinkedInClick);
githubLogo.addEventListener('click', handleGithubClick);

// Reset button adding to the form
function resetForm() {
    // Query the form element
    const form = document.querySelector('form');

    // Reset all form fields
    form.reset();

    // Optional: Display a confirmation message
    alert('The form has been reset!');
}