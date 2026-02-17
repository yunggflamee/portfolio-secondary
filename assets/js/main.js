const form = document.getElementById('contact-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Message sent! (Demo portfolio)');
  form.reset();
});

// Burger menu toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav ul');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Smooth scroll for nav links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    const offset = 70; // height of navbar
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = target.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    if(nav.classList.contains('active')) nav.classList.remove('active');
  });
});