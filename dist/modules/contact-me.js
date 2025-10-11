"use strict";
const modal = document.getElementById("modalOverlay");
const openBtn = document.getElementById("openContactMe");
const closeBtn = document.getElementById("closeModalBtn");
// Open modal
openBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
});
// Close modal
closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});
// Close on backdrop click
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
    }
});
