$(".burger__container").click(function () {
    $('.burger__menu').toggleClass('burger__menu-open')
    $('body').toggleClass('burger__opened')
    $('.stick-1').toggleClass('stick1-close')
    $('.stick-2').toggleClass('stick2-close')
    $('.stick-3').toggleClass('stick3-close')
    $(".burger__container").toggleClass('burger__container-opened')
    $('.burger__container').toggleClass('close-burger')
});

$('.collapse__btn').on('click',function(e){
    e.preventDefault();

    let $dropdown = $(this).parents('.down__menu').find('.dropdown');
    let $collapseBtn = $(this).parents('.down__menu').find('.collapse__btn');
    let $closeBtn = $(this).parents('.down__menu').find('.close__btn');
    let $navLink = $(this).parents('.down__menu').find('.down__nav__link');

    $dropdown.toggleClass('dropdown-open');
    $collapseBtn.hide()
    $closeBtn.show()
    $navLink.css({ 'opacity': '0' })
})

$('.close__btn').on('click',function(e){
    e.preventDefault();

    let $dropdown = $(this).parents('.down__menu').find('.dropdown');
    let $collapseBtn = $(this).parents('.down__menu').find('.collapse__btn');
    let $closeBtn = $(this).parents('.down__menu').find('.close__btn');
    let $navLink = $(this).parents('.down__menu').find('.down__nav__link');

    $dropdown.toggleClass('dropdown-open');
    $collapseBtn.show()
    $closeBtn.hide()
    $navLink.css({ 'opacity': '1' })
})

$(".all__card").click(function (e) {
    $('.another__cards').fadeIn(500)
    $('.another__cards').html()
    $('.another__cards').css({ 'display': 'flex' })
    $(".all__card").css({ 'display': 'none' })
    $('.history__card').css({ 'display': 'flex' })
    $(".math__card").css({ 'display': 'flex' })
});

