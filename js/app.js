const burger = document.querySelector('.header_burger');
const nav_media = document.querySelector('.nav_media');
const nav_media_close = document.querySelector('.nav_close');


burger.addEventListener('click', () => {
    nav_media.classList.toggle('active')
});

nav_media_close.addEventListener('click', () => {
    nav_media.classList.remove('active')
})