const category_btn = document.querySelector('.category_btn');
const region_btn = document.querySelector('.region_btn');
const category_list_one = document.querySelector('.category_list_one');
const category_list = document.querySelector('.category_list');

category_btn.addEventListener('click', () => {
    category_list_one.classList.toggle('active')
});
region_btn.addEventListener('click', () => {
    category_list.classList.toggle('active')
});



const burger = document.querySelector('.header_burger');
const nav_media = document.querySelector('.nav_media');
const nav_media_close = document.querySelector('.nav_close');


burger.addEventListener('click', () => {
    nav_media.classList.toggle('active')
});

nav_media_close.addEventListener('click', () => {
    nav_media.classList.remove('active')
});


