window.addEventListener('scroll', function () {
    if (document.getElementsByClassName('keep-scroll').length) {
        sessionStorage.top = window.scrollY;
    }
})
window.addEventListener('load', function () {
    if (document.getElementsByClassName('keep-scroll').length) {
        window.scrollTo({top: sessionStorage.top || 0, behavior: 'smooth'});
    }
})