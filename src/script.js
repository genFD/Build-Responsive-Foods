const icons = document.querySelectorAll('.image-slide-show i');
let i = 1;
const menuItem = document.querySelector('.menu');
const navAndMenu = document.querySelectorAll('.target');
menuItem.addEventListener('click', () => {
  navAndMenu.forEach((item) => {
    item.classList.toggle('change');
  });
});

setInterval(() => {
  i++;
  const icon = document.querySelector('.image-slide-show .change');
  icon.classList.remove('change');
  if (i > icons.length) {
    icons[0].classList.add('change');
    i = 1;
  } else {
    icon.nextElementSibling.classList.add('change');
  }
}, 4000);
