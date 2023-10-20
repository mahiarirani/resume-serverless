window.addEventListener('scroll', function () {
    localStorage.top = window.scrollY;
})
window.addEventListener('load', function () {
    window.scrollTo({top: localStorage.top || 0, behavior: 'smooth'});
})
