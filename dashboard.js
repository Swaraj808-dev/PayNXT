let balanceEl = document.getElementById("walletBalance");
let addBtn = document.getElementById("addMoneyBtn");
let transList = document.getElementById("transactionList");
let balance = Number(balanceEl.innerText.replace("₹", "").replace(",", ""));
addBtn.addEventListener("click", () => {
    balance += 100;
    balanceEl.innerText = "₹" + balance.toLocaleString();
    addTransaction("Money Added", "+₹100", "green");
});
function addTransaction(desc, amount, colorClass) {
    let item = document.createElement("div");
    item.classList.add("trans-item");
    item.innerHTML = `<div class="trans-info"><img src="arrow-${colorClass}.png" class="trans-icon">
            <div><p>${desc}</p><small>Just now</small></div></div>
        <span class="amount ${colorClass}">${amount}</span>`;
    transList.prepend(item);
}