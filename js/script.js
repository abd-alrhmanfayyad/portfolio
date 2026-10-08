const toggle = document.getElementById("theme-toggle");
const root = document.documentElement;

// Use the saved choice, or the device setting the first time
const saved = localStorage.getItem("theme");
if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    root.setAttribute("data-theme", "dark");
}
updateIcon();

toggle.addEventListener("click", () => {
    if (root.getAttribute("data-theme") === "dark") {
        root.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
    } else {
        root.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    }
    updateIcon();
});

function updateIcon() {
    toggle.textContent = root.getAttribute("data-theme") === "dark" ? "☀️" : "🌙";
}