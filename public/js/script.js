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

//Send Packages


// Carry Packages

const carrySubmitBtn = document.getElementById('carry-submit-btn');
const name = document.getElementById('name');
const uteid = document.getElementById('uteid');
const phoneNumber = document.getElementById('phone');
const homeAddress = document.getElementById('home-address');
const returnDate = document.getElementById('date');

const termsAndConditions = document.getElementById('toc');

const formInputs = [name, uteid, phoneNumber, homeAddress, returnDate];

let validate = (formElement) => {
  let valid = true;
  formInputs.forEach(elem => {
    if (elem.value.trim() === '') {
      elem.parentElement.classList.add('error');
      valid = false;
    }
  });
  return valid;
};

formInputs.forEach(elem => {
  elem.addEventListener('focus', (e) => {
    const parentClass = e.target.parentElement.classList;
    if (parentClass.contains('error')) {
      parentClass.remove('error');
    }
  });
});

termsAndConditions.addEventListener('click', (e) => {
  console.log('hi');
  carrySubmitBtn.disabled = !carrySubmitBtn.disabled;
});

carrySubmitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const carryForm = e.target.parentElement;
  if(!validate(carryForm)) {
    return;
  }
  e.target.parentElement.submit();
});

