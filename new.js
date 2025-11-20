document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // stops page refresh

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please fill out all fields.");
    } else {
        alert("Login successful!");
    }
});
