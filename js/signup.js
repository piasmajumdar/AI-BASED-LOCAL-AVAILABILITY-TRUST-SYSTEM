const form = document.getElementById("signupForm");
const nameField = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");

const googleBtn = document.getElementById("googleSignup");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    // Name validation
    if (nameField.value.length < 3) {
        nameError.classList.remove("hidden");
        valid = false;
    } else {
        nameError.classList.add("hidden");
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (!email.value.match(emailPattern)) {
        emailError.classList.remove("hidden");
        valid = false;
    } else {
        emailError.classList.add("hidden");
    }

    // Password validation
    if (password.value.length < 6) {
        passwordError.classList.remove("hidden");
        valid = false;
    } else {
        passwordError.classList.add("hidden");
    }

    // Confirm password
    if (password.value !== confirmPassword.value) {
        confirmError.classList.remove("hidden");
        valid = false;
    } else {
        confirmError.classList.add("hidden");
    }

    if (valid) {
        alert("Account Created Successfully (Backend pending)");
        form.reset();
    }
});

googleBtn.addEventListener("click", function () {
    alert("Google OAuth integration will be added later.");
});
