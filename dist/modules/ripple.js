export function enableRipple() {
    const btn = document.getElementById("getStartedBtn");
    const contactSection = document.querySelector("#contact");
    btn.addEventListener("click", (e) => {
        // --- Smooth scroll ---
        contactSection === null || contactSection === void 0 ? void 0 : contactSection.scrollIntoView({ behavior: "smooth" });
        // --- Ripple effect ---
        const ripple = e.currentTarget;
        ripple.classList.remove("active"); // reset if clicked fast again
        void ripple.offsetWidth; // trigger reflow
        ripple.classList.add("active");
    });
}
