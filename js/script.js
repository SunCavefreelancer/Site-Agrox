$(document).ready(function() {
    $(`.header__burger`).click(function(event){
        $( `.header__burger,.header__menu`).toggleClass(`active`);
    })
});

/* ---------------------------------БУРГЕР МЕНЮ---------------------------------------- */


/* -------------------------делаем СЛАЙД ШОУ ------------------------------------------ */
$(document).ready(function(){
    $('.slider').slick({        /* теперь мы обращаемся к нашему слайдеру_ Все - слайдер у нас включен!*/ /* здесь картинки пропадают */
    arrows:true,  /* кнопки: true - включить, false - выключить */   
    dots:true,    /* точки для переключения кратинок */  
    slidesToShow:1, /* здесь указываем количество слайдов, которое хотим отобразить за 1 раз */    
    adaptiveHeight:true,  /* автоматическая высота слайда-картинки */ 
})
    });  
/* -------------------------делаем СЛАЙД ШОУ ------------------------------------------ */
