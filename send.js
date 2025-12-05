let nameField = document.getElementById("sendName");
let upiField = document.getElementById("sendUPI");
let amountField = document.getElementById("sendAmount");
let sendBtn = document.getElementById("sendMoneyBtn");
document.querySelectorAll(".amount").forEach(btn => {
    btn.addEventListener("click", () => {
        amountField.value = btn.innerText.replace("₹", "");
    });
});
sendBtn.addEventListener("click", () => {
    let name = nameField.value.trim();
    let upi = upiField.value.trim();
    let amount = amountField.value.trim();
    if (name === "" || upi === "" || amount === "") { alert("Please fill all fields."); return; }
    if (amount <= 0) { alert("Enter a valid amount."); return; }
    alert(`₹${amount} sent to ${name} successfully!`);
    window.location.href = "dashboard.html";
});