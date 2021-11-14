(() => {
    const refs = {
      openMenuBtn: document.querySelector('.menu-open-btm'),
      closeMenuBtn: document.querySelector('.menu-close-btm'),
      menu: document.querySelector('.backdrop'),
      menuItem: document.querySelector('.mob-menu')
    };
  
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
    refs.menu.addEventListener('click', removeMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle('is-hidden');
    }
    function removeMenu(e) {
      if (e.target === refs.menu) {
        refs.menu.classList.add('is-hidden');
      }
    }
  })();