// Import your styles (Vite supports direct CSS imports)
import "./styles/style.css";
import "./styles/buttons.css";
import "./styles/animations.css";
import "./styles/contact-me.css";
import "./styles/projects.css";
import "./styles/fonts.css";

// Import your feature modules
import { initModal } from "./modules/contact-me";
import { enableSmoothScroll } from "./modules/smooth-scroll";
import { attachRippleEffect } from "./modules/ripple";

// Wait for the DOM to load before initializing
window.addEventListener("DOMContentLoaded", () => {
  console.log("✅ DOM fully loaded, initializing app...");

  // Initialize feature modules
  initModal();
  enableSmoothScroll();
  attachRippleEffect();
});
