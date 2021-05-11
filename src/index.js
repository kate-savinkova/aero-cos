/*arrow*/
const headerArrow = document.querySelector('#arrow');
const infoBlock = document.querySelector('#about');

headerArrow.addEventListener('click', () =>
  infoBlock.scrollIntoView({behavior: 'smooth' })
);