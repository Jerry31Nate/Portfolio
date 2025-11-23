window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) { // Cambia este valor según necesites
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});


// --------- Theme toggle ----------
const THEME_KEY = 'theme-preference';
const body = document.body;
const themeBtn = document.querySelector('header .button-theme'); // botón del header

function applyTheme(theme){
  if(theme === 'dark') body.classList.add('dark');
  else body.classList.remove('dark');
}

function toggleTheme(){
  const isDark = body.classList.toggle('dark');
  localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
  // opcional: actualizar atributo aria
  if(themeBtn) themeBtn.setAttribute('aria-pressed', isDark);
}

// aplicar preferencia al cargar
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem(THEME_KEY);
  if(saved) applyTheme(saved);
  else {
    // opcional: detectar preferencia del sistema
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  if(themeBtn) themeBtn.addEventListener('click', toggleTheme);
});