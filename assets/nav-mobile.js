const selectors = {
  parentLink: '.js-parent-link',
  childLink: '.js-child-link',
  backButton: '.js-back-btn',
  navTrigger: '.js-nav-mobile-trigger',
  navClose: '.js-nav-mobile-close',
  nav: '.js-nav-mobile',
};

const handleNavTabSwitch = () => {
  const parentLinks = document.querySelectorAll(`${selectors.parentLink} > a`);

  if (!parentLinks) return;

  parentLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      [...link.closest('.nav-mobile__links').children].forEach((sib) => {
        sib.classList.remove('is-active');
      });

      link.parentElement.classList.add('is-active');
    });
  });
};

const handleGrandchildrenNav = () => {
  const childrenLinks = document.querySelectorAll(`${selectors.childLink} > a`);

  if (!childrenLinks) return;

  childrenLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const nav = link.closest(selectors.nav);

      [...link.parentElement.children].forEach((sib) => sib.classList.remove('is-open'));
      link.parentElement.classList.add('is-open');
      nav.classList.add('grandchild-open');
      nav.scrollTo(0, 0);

      link.parentElement.querySelector(selectors.backButton).addEventListener('click', () => {
        link.parentElement.classList.remove('is-open');
        nav.classList.remove('grandchild-open');
      });
    });
  });
};

const handleNav = () => {
  const navTrigger = document.querySelector(selectors.navTrigger);
  const navClose = document.querySelector(selectors.navClose);
  const nav = document.querySelector(selectors.nav);

  if (!navTrigger || !nav) return;

  navTrigger.addEventListener('click', (e) => {
    e.preventDefault();

    nav.classList.add('is-open');
    window.disableBodyScroll(nav);
  });

  navClose.addEventListener('click', (e) => {
    e.preventDefault();

    window.enableBodyScroll(nav);
    navClose.previousElementSibling.classList.remove('is-open');
    nav.classList.remove('grandchild-open');
    document.querySelectorAll(selectors.childLink).forEach((link) => link.classList.remove('is-open'));
  });
};

handleNavTabSwitch();
handleGrandchildrenNav();
handleNav();
