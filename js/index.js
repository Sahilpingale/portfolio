//Scroll Animation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Mobile Navigation
const openNav = document.querySelector('.btn-mobile');
const closeNav = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header');

openNav.addEventListener('click', () => {
  header.classList.add('nav-open');
});
closeNav.addEventListener('click', () => {
  header.classList.remove('nav-open');
});
