let key = '';
const options = document.querySelectorAll('.rate-area .option');
console.log(options);
options.forEach((option) => {
  option.classList.remove('selected');
  option.addEventListener('click', (e) => {
    key = e.target.getAttribute('data-option');
    options.forEach((option) => {
      option.classList.remove('selected');
    });
    e.target.classList.add('selected');
  });
});
btnCard = document.querySelector('.btn-card').addEventListener('click', () => {
  if (key !== '') {
    document.querySelector('.card.rating').classList.add('hide');
    document.querySelector('.card.submitted').classList.remove('hide');
    document.querySelector('.rate-alert .key').innerText = key;
  }
});
