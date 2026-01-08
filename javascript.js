// For the Scrolling Navigation Bar //
const nav = document.querySelector('nav')
const navOffset = nav.offsetTop;
window. addEventListener('scroll', () => {
    if (window.pageYOffset >= navOffset) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky')
    }
})



