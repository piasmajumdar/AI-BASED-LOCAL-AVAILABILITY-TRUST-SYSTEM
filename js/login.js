const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const googleBtn = document.getElementById("googleLogin");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;

    if (!email.value.match(emailPattern)) {
        emailError.classList.remove("hidden");
        valid = false;
    } else {
        emailError.classList.add("hidden");
    }

    if (password.value.length < 6) {
        passwordError.classList.remove("hidden");
        valid = false;
    } else {
        passwordError.classList.add("hidden");
    }

    if (valid) {
        alert("Login Successful (Backend pending)");
        form.reset();
    }
});

googleBtn.addEventListener("click", function () {
    alert("Google OAuth integration will be added later.");
});
