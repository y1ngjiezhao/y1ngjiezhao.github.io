const themeButton = document.querySelector('.theme-button');
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
function updateThemeButton() {
  const dark = document.documentElement.dataset.theme === 'dark';
  themeButton.setAttribute('aria-pressed', String(dark));
  themeButton.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  themeButton.title = themeButton.getAttribute('aria-label');
  document.querySelector('meta[name="theme-color"]').content = dark ? '#17191c' : '#ffffff';
}
themeButton.hidden = false;
menuButton.hidden = false;
document.documentElement.classList.add('js');
updateThemeButton();
themeButton.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem('theme', theme); } catch (_) {}
  updateThemeButton();
});
window.addEventListener('storage', (event) => {
  if (event.key !== 'theme' && event.key !== null) return;
  document.documentElement.dataset.theme = event.newValue === 'dark' ? 'dark' : 'light';
  updateThemeButton();
});
function closeMenu() {
  navLinks.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}
menuButton.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navLinks.classList.contains('open')) { closeMenu(); menuButton.focus(); }
});
document.addEventListener('click', event => { if (!event.target.closest('nav')) closeMenu(); });
// Preserve incoming links to sections from the previous homepage.
if (location.pathname === '/' || location.pathname === '/index.html') {
  const section = location.hash.slice(1);
  if (['publications', 'experience'].includes(section)) location.replace('./' + section + '/');
}
