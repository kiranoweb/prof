$(document).ready(function () {
    var Menu = {
        el: {
            ham: $('.burger-menu'),
            menuTop: $('.menu-top'),
            menuMiddle: $('.menu-middle'),
            menuBottom: $('.menu-bottom')
        },
        init: function () {
            Menu.bindUIactions();
        },
        bindUIactions: function () {
            Menu.el.ham
                .on(
                    'click',
                    function (event) {
                        Menu.activateMenu(event);
                        event.preventDefault();
                    }
                );
        },
        activateMenu: function () {
            Menu.el.menuTop.toggleClass('menu-top-click');
            Menu.el.menuMiddle.toggleClass('menu-middle-click');
            Menu.el.menuBottom.toggleClass('menu-bottom-click');
        }
    };
    Menu.init();
    $('.burger-menu').click(function () {
        if ($(this).hasClass('closed')) {
            $('header .navbar').addClass('d-flex').css('opacity', 0).animate({
                opacity: 1
            });
            $(this).removeClass('closed');
        } else {
            $('header .navbar').animate({
                opacity: 0
            }, 600, function () {
                $(this).removeClass('d-flex').css('opacity', 1);
            });
            $(this).addClass('closed');
        }
    })
});