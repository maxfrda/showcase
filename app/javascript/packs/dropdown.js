const dropdown = document.querySelector('.dropdown');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  if (dropdown.style.display !== 'block') {
    dropdown.style.display = 'block';
    hamburger.style.opacity = '100%';
  } else {
    dropdown.style.display = 'none'
    hamburger.style.opacity = '50%';

  }
});
