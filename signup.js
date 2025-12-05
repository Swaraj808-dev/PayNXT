document.getElementById("signupBtn").addEventListener("click", function (event) {
    event.preventDefault();
    let name = document.getElementById("signupName").value.trim();
    let email = document.getElementById("signupEmail").value.trim();
    let pass = document.getElementById("signupPass").value.trim();
    let confirm = document.getElementById("signupConfirm").value.trim();
    if (name === "" || email === "" || pass === "" || confirm === "") { alert("Please fill all fields."); return; }
    if (!email.includes("@")) { alert("Enter a valid email."); return; }
    if (pass.length < 6) { alert("Password must be at least 6 characters."); return; }
    if (pass !== confirm) { alert("Passwords do not match."); return; }
    alert("Account created successfully!"); window.location.href = "login.html";
});