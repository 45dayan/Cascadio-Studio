// ================================
// Form Elements
// ================================
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");

// ================================
// Switch Forms
// ================================
showRegister.addEventListener("click", () => {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
});

showLogin.addEventListener("click", () => {
    registerForm.style.display = "none";
    loginForm.style.display = "block";
});

// ================================
// Register
// ================================
const register = registerForm.querySelector("form");

register.addEventListener("submit", function (e) {

    e.preventDefault();

    const fullName = register.querySelectorAll("input")[0].value;
    const email = register.querySelectorAll("input")[1].value;
    const password = register.querySelectorAll("input")[2].value;
    const confirmPassword = register.querySelectorAll("input")[3].value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find(user => user.email === email);

    if (exists) {
        alert("Account already exists!");
        return;
    }

    users.push({
        fullName,
        email,
        password
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful!");

    register.reset();

    registerForm.style.display = "none";
    loginForm.style.display = "block";
});

// ================================
// Login
// ================================
const login = loginForm.querySelector("form");

login.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = login.querySelectorAll("input")[0].value;
    const password = login.querySelectorAll("input")[1].value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
        u => u.email === email && u.password === password
    );

    if (!user) {
        alert("Invalid Email or Password");
        return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(user));

    alert("Login Successful!");

    window.location.href = "index.html";
});