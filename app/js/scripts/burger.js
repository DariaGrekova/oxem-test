export function burger(){

  const menuBtn = document.querySelector('.menu-btn');
  const closeBtn = document.querySelector('.menu-close-btn');
  const menu = document.querySelector('.header__menu');
  const bg = document.querySelector('.header-mobile-overlay');
  const applyBtn = menu.querySelector('.submit-application');


  menuBtn.addEventListener('click', function () {
  openMenu();
  });

  closeBtn.addEventListener('click', function () {
    closeMenu();
    });

  window.addEventListener('resize', function(){
    if(menu.classList.contains('_active')) {
      closeMenu ();
    }
    });

    function openMenu () {
      menuBtn.classList.add('_active');
      menu.classList.add('_active');
      bg.classList.add('_visible');
      closeBtn.classList.add('_visible')

      if(menu.classList.contains('_active')) {
        applyBtn.classList.remove('transparent-orange-btn')
        applyBtn.classList.add('orange-btn');
      }
      document.body.style.overflow = menu.classList.contains('_active') ? 'hidden' : '';
    }

    function closeMenu () {
      menuBtn.classList.remove('_active');
      menu.classList.remove('_active');
      bg.classList.remove('_visible');
      closeBtn.classList.remove('_visible')

      document.body.style.overflow = '';
    }
}