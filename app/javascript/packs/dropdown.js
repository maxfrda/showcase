
const dropdown = document.querySelector('.dropdown');
const hamburger = document.querySelector('.hamburger');
console.log('working')

hamburger.addEventListener('click', () => {
  if (dropdown.style.display !== 'block') {
    dropdown.style.display = 'block';
    hamburger.style.opacity = '100%';
  } else {
    dropdown.style.display = 'none'
    hamburger.style.opacity = '50%';
  }
});
