$( document ).ready(function() {

    var btnMenuMobile = $('.iconify');

    $(btnMenuMobile).on('click', function() {

        $('.nav-container ul').toggleClass('open');

    })

});
