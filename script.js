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
