const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
  const isHidden = menu.classList.contains('hidden');
  if (!isHidden) {
    menu.classList.add('hidden');
  } else {
    menu.classList.remove('hidden');
  }
});
