export function enableSmoothScroll() {
    const btn = document.getElementById("getStartedBtn");
    btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
        const contact = document.querySelector("#contact");
        contact === null || contact === void 0 ? void 0 : contact.scrollIntoView({ behavior: "smooth" });
    });
}
