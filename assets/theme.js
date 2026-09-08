// Apply the saved preference before styles load; first-time visitors see white.
(() => {
  let theme = 'light';
  try { if (localStorage.getItem('theme') === 'dark') theme = 'dark'; } catch (_) {}
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#17191c' : '#ffffff';
})();
