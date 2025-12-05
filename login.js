document.getElementById("loginBtn").addEventListener("click", function (event) {
    event.preventDefault();
    let email = document.getElementById("loginEmail").value.trim();
    let pass = document.getElementById("loginPass").value.trim();
    if (email === "" || pass === "") { alert("Please fill in all fields."); return; }
    if (!email.includes("@")) { alert("Please enter a valid email."); return; }
    if (pass.length < 6) { alert("Password must be at least 6 characters."); return; }
    alert("Login successful!"); window.location.href = "dashboard.html";
});