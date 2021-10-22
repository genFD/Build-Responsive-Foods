// 1remove icons after 4s
const icons = document.querySelectorAll('.image-slide-show i');
let i = 1;

setInterval(() => {
  i++;
  const icon = document.querySelector('.image-slide-show .change');
  icon.classList.remove('change');
  if (i > icons.length) {
    // start over and add change class to the first item in the array, the first icon and also set counter back to 1
    icons[0].classList.add('change');
    i = 1;
  } else {
    icon.nextElementSibling.classList.add('change');
  }
}, 4000);
