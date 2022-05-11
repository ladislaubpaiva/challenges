const main = document.querySelector('main').addEventListener('click', () => {
  const slider = document.querySelector('.slider').style.left;
  if (slider != '50%') {
    document.querySelector('.slider').style.left = '50%';
    document.querySelector('img').src = './assets/moon.svg';
  } else {
    document.querySelector('.slider').style.left = '0%';
    document.querySelector('img').src = './assets/sun.svg';
  }
});
