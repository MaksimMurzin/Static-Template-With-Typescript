export function enableRipple() {
  const btn = document.getElementById("getStartedBtn") as HTMLButtonElement;
  const contactSection = document.querySelector("#contact");

  btn.addEventListener("click", (e) => {
    // --- Smooth scroll ---
    contactSection?.scrollIntoView({ behavior: "smooth" });

    // --- Ripple effect ---
    const ripple = e.currentTarget as HTMLElement;
    ripple.classList.remove("active"); // reset if clicked fast again
    void ripple.offsetWidth; // trigger reflow
    ripple.classList.add("active");
  });
}
