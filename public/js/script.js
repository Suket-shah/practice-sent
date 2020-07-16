// let mainNav = window.querySelector('.main-nav');

// window.onscroll((e) => {
//   if (window.body.scrollTop > 2) {
//     mainNav.setAttribute('background-color', '#000000');
//   }
// });

const mainNav = document.querySelector('.main-nav');
const sentLogo = document.querySelector('.main-nav a');

// window.onscroll((e) => {
//   if (window.pageYOffset > 20) {
//     mainNav.setAttribute('background-color', '#000000');
//   }
// });

window.addEventListener('scroll', (e) => {
  const SCROLL_LIMIT = 20;
  if (window.pageYOffset > SCROLL_LIMIT) {
    mainNav.classList.add('white-back');
  } else {
    mainNav.classList.remove('white-back');
  }
});

sentLogo.addEventListener('click', (e) => {
  window.pageYOffset = 0;
  window.pageXOffset = 0;
});
