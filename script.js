function promptForPassword() {
    // Prompt the user for the password
    var password = prompt("Enter the password:");

    // Check if the password is correct
    if (password === "joshi" || password === "ghuge") {
        // Password is correct, do nothing (allow access)
    } else {
        // Password is incorrect, reload the page
        alert("Incorrect password! Please try again.");
        location.reload();
    }
}

// Call the promptForPassword function when the page loads
window.onload = promptForPassword;
