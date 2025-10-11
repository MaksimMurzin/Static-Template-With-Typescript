function triggerRippleEffect(e) {
  const target = e.currentTarget;
  if (!target.classList.contains("ripple")) return;

  target.classList.remove("active"); // reset if clicked fast again
  void target.offsetWidth; // trigger reflow
  target.classList.add("active");
}

// Attach ripple to all elements with class "ripple"
document.querySelectorAll(".ripple").forEach((el) => {
  el.addEventListener("click", triggerRippleEffect);
});
