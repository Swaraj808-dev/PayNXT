let numField = document.getElementById("mobileNumber");
let amtField = document.getElementById("rechargeAmount");
let rechargeBtn = document.getElementById("rechargeBtn");
document.querySelectorAll(".amount").forEach(btn => {
    btn.addEventListener("click", () => {
        amtField.value = btn.innerText.replace("₹", "");
    });
});
document.querySelectorAll(".op").forEach(op => {
    op.addEventListener("click", () => {
        document.querySelectorAll(".op").forEach(btn => btn.classList.remove("active"));
        op.classList.add("active");
    });
});
rechargeBtn.addEventListener("click", () => {
    let num = numField.value.trim();
    let amt = amtField.value.trim();
    if (num.length !== 10 || isNaN(num)) { alert("Enter a valid 10-digit mobile number."); return; }
    if (amt <= 0) { alert("Enter a valid recharge amount."); return; }
    alert(`Recharge of ₹${amt} was successful for ${num}!`);
    window.location.href = "dashboard.html";
});