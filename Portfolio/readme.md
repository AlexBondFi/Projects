## Add eventlistner on scroll:

1.  const header = document.querySelector('.myheader');

window.addEventListener('scroll', () => {
if (window.pageYOffset > 0) {
backButton.style.display = 'block';
header.classList.add('scrolled');
} else {
backButton.style.display = 'none';
header.classList.remove('scrolled');
}
});

2.  const header = document.querySelector('.myheader');

window.onscroll = function(){
scrollFunction()
};

const scrollFunction = () => {
if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
backButton.style.display = 'block';
header.classList.add('scrolled')

    } else{
        backButton.style.display = 'none'
        header.classList.remove('scrolled')
    }

};
