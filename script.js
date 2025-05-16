const modes = ['light', 'midnight', 'dark'];
let current = modes.indexOf(localStorage.getItem('theme')) !== -1 ? modes.indexOf(localStorage.getItem('theme')) : 0;

const applyTheme = () => {
  document.documentElement.setAttribute("data-theme", modes[current]);
  document.getElementById("themeBtn").textContent = `Theme: ${modes[current]}`;
  localStorage.setItem('theme', modes[current]);
};

document.getElementById("themeBtn").addEventListener("click", () => {
  current = (current + 1) % modes.length;
  applyTheme();
});

applyTheme();

// Scroll-based animation
function revealOnScroll() {
  const fadeEls = document.querySelectorAll('.fade-in, .slide-in-left');
  const trigger = window.innerHeight * 0.85;

  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < trigger) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Typing animation for cyber.html
function runTypingEffect() {
  const el = document.querySelector('.typing-text');
  if (!el) return;
  const text = el.dataset.text;
  let i = 0;

  function type() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i++);
      setTimeout(type, 40);
    }
  }

  type();
}

document.addEventListener('DOMContentLoaded', runTypingEffect);

// Ripple effect on buttons
document.querySelectorAll('.ripple-btn').forEach(button => {
  button.addEventListener('click', function (e) {
    const circle = document.createElement("span");
    circle.classList.add("ripple");
    const rect = this.getBoundingClientRect();
    circle.style.left = `${e.clientX - rect.left}px`;
    circle.style.top = `${e.clientY - rect.top}px`;
    this.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  });
});
