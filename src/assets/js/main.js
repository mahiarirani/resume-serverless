window.addEventListener('scroll', function () {
    if (document.getElementsByClassName('keep-scroll').length)
        localStorage.top = window.scrollY;
})
window.addEventListener('load', function () {
    if (document.getElementsByClassName('keep-scroll').length)
        window.scrollTo({top: localStorage.top || 0, behavior: 'smooth'});
})