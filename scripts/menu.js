document.addEventListener('DOMContentLoaded', () => {

  /* ===== BURGER MENU ===== */
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.mobile-menu');

  if (burger && menu) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      menu.classList.toggle('active');
    });

    document.querySelectorAll('.mobile-menu a').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('active');
        menu.classList.remove('active');
      });
    });
  }

  /* ===== SCROLL TO TOP BUTTON ===== */
  const scrollBtn = document.getElementById('scrollTopBtn');

  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        scrollBtn.classList.add('show');
      } else {
        scrollBtn.classList.remove('show');
      }
    });

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

});

