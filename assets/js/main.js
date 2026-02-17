// BURGER MENU
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav ul');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// SMOOTH SCROLLING FOR NAV LINKS + HERO BUTTON
document.querySelectorAll('nav ul li a, .btn').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    const offset = 70; // navbar height
    const elementTop = target.getBoundingClientRect().top + window.scrollY - offset;
    
    window.scrollTo({
      top: elementTop,
      behavior: 'smooth'
    });
    
    if(nav.classList.contains('active')) nav.classList.remove('active');
  });
});

// HERO PARALLAX
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  let offset = window.scrollY;
  hero.style.backgroundPositionY = offset * 0.5 + 'px';
});

// ANIMATION ON SCROLL
const animatedElements = document.querySelectorAll('section, .project-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('animate');
    }
  });
}, { threshold: 0.2 });

animatedElements.forEach(el => observer.observe(el));