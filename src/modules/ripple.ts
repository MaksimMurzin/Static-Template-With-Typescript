// export function enableRipple() {
//   const btn = document.getElementById("getStartedBtn") as HTMLButtonElement;
//   const contactSection = document.querySelector("#contact");

//   btn.addEventListener("click", (e) => {
//     // --- Smooth scroll ---
//     contactSection?.scrollIntoView({ behavior: "smooth" });

//     // --- Ripple effect ---
//     const ripple = e.currentTarget as HTMLElement;
//     ripple.classList.remove("active"); // reset if clicked fast again
//     void ripple.offsetWidth; // trigger reflow
//     ripple.classList.add("active");
//   });
// }

// Internal helper function (not exported)
function triggerRippleEffect(event: Event): void {
  const target = event.currentTarget as HTMLElement;

  if (!target.classList.contains("ripple")) return;

  target.classList.remove("active"); // reset if clicked fast again
  void target.offsetWidth; // trigger reflow
  target.classList.add("active");
}

// Public API: attach ripple effect to elements matching selector
export function attachRippleEffect(selector: string = ".ripple"): void {
  const elements = document.querySelectorAll<HTMLElement>(selector);
  elements.forEach((el) => {
    el.addEventListener("click", triggerRippleEffect);
  });
}