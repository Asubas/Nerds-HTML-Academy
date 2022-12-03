const first_button = document.querySelector('.button_first');
const second_button = document.querySelector('.button_second');
const thrid_button = document.querySelector('.button_thrid');
const first_slide = document.querySelector('.slide_first');
const second_slide = document.querySelector('.slide_second');
const thrid_slide = document.querySelector('.slide_thrid');


first_button.addEventListener('click', function(evt){
    evt.preventDefault();
    second_button.classList.remove('slider_button_active');
    thrid_button.classList.remove('slider_button_active');
    first_button.classList.add('slider_button_active');
    second_slide.classList.remove('slide_active');
    thrid_slide.classList.remove('slide_active');
    first_slide.classList.add('slide_active');
});

second_button.addEventListener('click', function(evt){
    evt.preventDefault();
    first_button.classList.remove('slider_button_active');
    thrid_button.classList.remove('slider_button_active');
    second_button.classList.add('slider_button_active');
    first_slide.classList.remove('slide_active');
    thrid_slide.classList.remove('slide_active');
    second_slide.classList.add('slide_active');
    
    });

thrid_button.addEventListener('click', function(evt){
    evt.preventDefault();
    second_button.classList.remove('slider_button_active');
    first_button.classList.remove('slider_button_active');
    thrid_button.classList.add('slider_button_active');
    first_slide.classList.remove('slide_active');
    second_slide.classList.remove('slide_active');
    thrid_slide.classList.add('slide_active');
});