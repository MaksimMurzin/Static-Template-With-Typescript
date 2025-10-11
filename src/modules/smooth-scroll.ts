export function enableSmoothScroll() {
  const btn = document.getElementById("getStartedBtn");

  btn?.addEventListener("click", () => {
    const contact = document.querySelector("#contact");
    contact?.scrollIntoView({ behavior: "smooth" });
  });
}
