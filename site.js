const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px 40px 0px' });
  document.querySelectorAll('[data-reveal]').forEach(element => observer.observe(element));
} else {
  document.querySelectorAll('[data-reveal]').forEach(element => element.classList.add('is-visible'));
}

const languageSwitch = document.querySelector('.language-switch');
if (languageSwitch && location.hash && document.getElementById(location.hash.slice(1))) {
  languageSwitch.href += location.hash;
}
