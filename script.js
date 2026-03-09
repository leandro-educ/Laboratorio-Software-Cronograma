
const body = document.body;
const themeButtons = [...document.querySelectorAll('[data-action="toggle-theme"]')];
const scrollTopBtn = document.getElementById('scrollTopBtn');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const revealItems = [...document.querySelectorAll('.reveal')];
const navLinks = [...document.querySelectorAll('.nav-list a[href^="#"]')];
const sections = [...document.querySelectorAll('.content > section[id], .campus-main > section[id]')];
const yearTargets = [...document.querySelectorAll('#anio')];

yearTargets.forEach(node => node.textContent = new Date().getFullYear());

const savedTheme = localStorage.getItem('labsoft-theme');
if (savedTheme === 'light') body.classList.add('light-theme');

function updateThemeButtons() {
  themeButtons.forEach(btn => {
    btn.textContent = body.classList.contains('light-theme') ? 'Tema oscuro' : 'Tema claro';
  });
}
updateThemeButtons();

themeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    localStorage.setItem('labsoft-theme', body.classList.contains('light-theme') ? 'light' : 'dark');
    updateThemeButtons();
  });
});

if (navLinks.length && sections.length) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
      }
    });
  }, { threshold: 0.42 });

  sections.forEach(section => sectionObserver.observe(section));
}

if (revealItems.length) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => revealObserver.observe(item));
}

function updateProgress() {
  const doc = document.documentElement;
  const scrollable = doc.scrollHeight - window.innerHeight;
  const pct = scrollable > 0 ? Math.min(100, Math.round((window.scrollY / scrollable) * 100)) : 0;
  if (progressFill) progressFill.style.width = `${pct}%`;
  if (progressText) progressText.textContent = `${pct}% recorrido`;
  if (scrollTopBtn) scrollTopBtn.classList.toggle('visible', window.scrollY > 380);
}

if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('load', updateProgress);
