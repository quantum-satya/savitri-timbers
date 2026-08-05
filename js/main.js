(() => {
  const header = document.querySelector('.home-page header');

  if (!header) return;

  const updateHeader = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
})();
