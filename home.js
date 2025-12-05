document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("mouseenter", () => { btn.style.transform = "scale(1.05)"; });
    btn.addEventListener("mouseleave", () => { btn.style.transform = "scale(1)"; });
});
document.getElementById("getStartedBtn").addEventListener("click", () => { window.location.href = "signup.html"; });
document.getElementById("viewDashboardBtn").addEventListener("click", () => { window.location.href = "dashboard.html"; });
document.getElementById("journeyBtn").addEventListener("click", () => { window.location.href = "signup.html"; });