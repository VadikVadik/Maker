        var menuToggle = document.querySelector('.main-nav__toggle');
        var menu = document.querySelector('.main-nav__menu');
        
        menu.classList.remove('main-nav__menu--nojs');
        
        menuToggle.addEventListener('click', function(){
            if(menu.classList.contains('main-nav__menu--close')){
                menu.classList.remove('main-nav__menu--close');
                menu.classList.add('main-nav__menu--open');
            }else{
                menu.classList.add('main-nav__menu--close');
                menu.classList.remove('main-nav__menu--open');
            }
        });