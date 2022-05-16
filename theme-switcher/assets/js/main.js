let isDark = false;

const right = document.querySelector('.theme-toggle').clientWidth - 5;
const sliderButton = document.querySelector('.theme-toggle__slider');
const sliderImage = document.querySelector('.theme-toggle img');
const switchTheme = () => {
  if (sliderButton.style.left == '') {
    setLightMode()
  } else {
    setDarkMode()
  }
}

function setLightMode() {
  sliderButton.style.left = right - 90 + 'px';
  sliderImage.style.right = right - 90 + 'px';
  sliderImage.src = './assets/icons/moon.svg'
  document.body.classList.add('dark')
}
function setDarkMode() {
  sliderButton.style.left = '';
  sliderImage.style.right = ''
  sliderImage.src = './assets/icons/sun.svg'
  document.body.classList.remove('dark')
}
