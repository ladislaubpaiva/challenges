(function App() {
  let isDark = false;
  if (localStorage.getItem('dark-mode')) {
    isDark = true;
    setDarkTheme();
  }
  const themeToggle = document.querySelector('.theme-toggle');
  themeToggle.addEventListener('click', () => {
    if (isDark) {
      setLightTheme();
      isDark = false;
      manageLocalStorage('DELETE');
    } else {
      setDarkTheme();
      manageLocalStorage('ADD');
      isDark = true;
    }
  });
  function setLightTheme() {
    document.body.classList.remove('dark');
  }
  function setDarkTheme() {
    document.body.classList.add('dark');
  }
  function manageLocalStorage(cmd) {
    if (cmd === 'DELETE') {
      localStorage.removeItem('dark-mode');
    } else {
      localStorage.setItem('dark-mode', true);
    }
  }
})();
