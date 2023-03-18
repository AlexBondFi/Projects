const header = document.querySelector('.myheader');
const backButton = document.querySelector('#toTop');
const nav = document.querySelector('nav ul')
const menuItems = document.querySelectorAll('nav ul li a');
const topButton = document.querySelector('.mobile');


window.addEventListener('scroll', () => {
  if (window.pageYOffset > 0) {
  backButton.style.display = 'block';
  header.classList.add('scrolled');
  topButton.classList.add('scrolled');
  menuItems.forEach((a) => {
    a.classList.add('scrolled');
  });
  } else {
  backButton.style.display = 'none';
  topButton.classList.remove('scrolled');
  header.classList.remove('scrolled');
  menuItems.forEach((a) => {
    a.classList.remove('scrolled');
  });
  }
  });

const toTopp = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const toMenu = () => {
  for(const menuItem of menuItems){
      menuItem.addEventListener('click', toMenu)
  }
  if (nav.classList.contains('responsive')){
      nav.classList.remove('responsive')
  }
  else{
      nav.classList.add('responsive')
  }
}

backButton.addEventListener('click', toTopp)
topButton.addEventListener('click', toMenu)
