import { Countdown } from './countdown.js';

const year = getBirthdayYear();

console.log(year);

const digitalClock = document.querySelectorAll('span[data-time]');
const btnOpenForm = document.querySelector('.sign-btn');
const btnCloseForm = document.querySelector('#happy-form a');
const dialogContainer = document.querySelector('.container-dialog');
const dialog = document.querySelector('#happy-form');
const dialogForm = document.querySelector('#happy-form form');

const timeForBirthDay = new Countdown(`18 April ${year}`);

function getBirthdayYear() {
  const date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  if (month < 3) {
    return year;
  }
  if (month == 3) {
    if (day > 17) {
      return year + 1;
    } else {
      return year;
    }
  }
  return year + 1;
}

function showTimeForBirthDay() {
  digitalClock.forEach((time, index) => {
    time.innerText = fixZero(timeForBirthDay.total[index]);
  });
}

const fixZero = (time) => (time < 10 ? `0${time}` : time);

showTimeForBirthDay();

setInterval(showTimeForBirthDay, 1000);

btnOpenForm.addEventListener('click', () => {
  dialogContainer.style.display = 'flex';
  setTimeout(() => {
    dialog.setAttribute('open', '');
  }, 300);
});
btnCloseForm.addEventListener('click', (e) => {
  e.preventDefault();
  setTimeout(() => {
    dialog.removeAttribute('open');
    dialogContainer.style.display = 'none';
  }, 300);
});

const formValidator = {
  handleSubmit: (e) => {
    e.preventDefault();
    let send = true;

    const msgField = document.getElementById('msg');

    formValidator.clearError(msgField);

    const check = formValidator.checkInput(msgField);

    if (check !== true) {
      send = false;
      formValidator.showError(msgField);
    } else {
      send = true;
    }

    if (send) {
      dialogForm.submit();
    }
  },
  checkInput: (e) => {
    return e.value !== '' ? true : false;
  },
  showError: (e) => {
    e.style.borderBottomColor = 'red';
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error');
    errorMessage.textContent = 'Enter Your Message';
    e.parentElement.insertBefore(errorMessage, e.elementSibling);
  },
  clearError: (e) => {
    let errors = document.querySelectorAll('.error');
    for (let i = 0; i < errors.length; i++) {
      errors[i].remove();
    }
    e.style.borderBottomColor = '#6c63ff';
  },
};

dialogForm.addEventListener('submit', formValidator.handleSubmit);
