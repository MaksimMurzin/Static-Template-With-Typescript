// modal.ts
export function initModal() {
  const modal = document.getElementById(
    "modalOverlay"
  ) as HTMLDivElement | null;
  const openBtn = document.getElementById(
    "openContactMe"
  ) as HTMLButtonElement | null;
  const closeBtn = document.getElementById(
    "closeModalBtn"
  ) as HTMLSpanElement | null;

  if (!modal || !openBtn || !closeBtn) {
    console.warn("⚠️ Modal elements not found in DOM.");
    return;
  }

  // Open modal
  openBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  // Close modal
  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Close when clicking the backdrop
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
}
