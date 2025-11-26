//Ensure all elements is loaded
document.addEventListener("DOMContentLoaded", function () {
  //Get the form element
  const form = document.getElementById("registration-form");

  //Get the feedback section
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", (event) => {
    //Prevent default behaviour
    event.preventDefault();

    //Get all input fields
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    //Validation setup
    let isValid = true;
    let messages = [];

    //Username validation
    if (username.length < 3) {
      isValid = false;
      messages.push("Username most be at least 3 characters");
    }

    if (!(email.includes("@") && email.includes("."))) {
      isValid = false;
      messages.push("Invalid email address");
    }

    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters");
    }

    //Feedback
    feedbackDiv.style.display = "block";

    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else {
      const errMessages = messages.join("<br>");
      feedbackDiv.innerHTML = errMessages;
      feedbackDiv.style.color = "#dc3545";
    }
  });
});
