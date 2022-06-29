(() => {
  const refs = {
    menuBtn: document.querySelector('[data-menu-button]'),
    menu: document.querySelector('[data-menu]'),
    bodyHide: document.querySelector('[data-menu-body]'),
    mobileMenu: document.querySelector('[data-menu-nav]'),
  };

  refs.menuBtn.addEventListener('click', toggleModal);
  refs.mobileMenu.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
    refs.bodyHide.classList.toggle('body-hide');
    refs.menuBtn.classList.toggle('is-open');
  }
})();
