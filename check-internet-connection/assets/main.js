const popupNet = document.querySelector('.popupnet');

const updateState = () => {
  if (navigator.onLine) {
    popupNet.style.display = 'none';
  } else {
    popupNet.style.display = 'flex';
  }
};

window.addEventListener('online', updateState);
window.addEventListener('offline', updateState);

updateState();
