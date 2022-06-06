const btn__burger = document.querySelector('#burger_btn');
const btn__close = document.querySelector('#btn_close');
const menu__open = document.querySelector('.dropdown');
const header = document.querySelector('#dd_menu');


btn__burger.addEventListener('click', function(){
    header.classList.add('menu-open');

    btn__close.addEventListener('click', function(){

        header.classList.replace('menu-open', 'dd_menu')
    })
})