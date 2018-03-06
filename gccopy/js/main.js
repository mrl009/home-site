$(document).ready(function () {
    $('.ani-slideInLeft1').addClass('animated slideInLeft');
    $('.ani-fadeInRight1').addClass('animated fadeInRight');
    setTimeout(function () {
        $('.ani-rotateIn1').addClass('animated rotateIn');
    }, 1000)
    setTimeout(function () {
        $('.ani-slideInDown1').addClass('animated slideInDown');
        $('.ani-slideInUp1').addClass('animated slideInUp');
    }, 1500)
    setTimeout(function () {
        $('.ani-flip1').addClass('animated flip');
    }, 2000)
    setTimeout(function () {
        $('.ani-rubberBand1').addClass('animated rubberBand');
    }, 2500)
})
$(function () {
    $('#dowebok').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        menu: '#nav_menu',
        onLeave: function (index, nextIndex, direction) {
            console.log(index)
            console.log(nextIndex)
            if (index == 1) {
                $('.ani-slideInLeft1').removeClass('animated slideInLeft');
                $('.ani-slideInDown1').removeClass('animated slideInDown');
                $('.ani-flip1').removeClass('animated flip');
                $('.ani-fadeInRight1').removeClass('animated fadeInRight');
                $('.ani-slideInUp1').removeClass('animated slideInUp');
                $('.ani-rotateIn1').removeClass('animated rotateIn');
                $('.ani-rubberBand1').removeClass('animated rubberBand');
            }
            if (index == 2) {
                $('.ani-slideInRight2').removeClass('animated slideInRight');
                $('.ani-slideInLeft2').removeClass('animated slideInLeft');
                $('.ani-rubberBand2').removeClass('animated rubberBand');
                $('.ani-fadeInLeft2').removeClass('animated fadeInLeft');
                $('.ani-fadeInRight2').removeClass('animated fadeInRight');
            }
            if (index == 3) {
                $('.ani-slideInLeft3').removeClass('animated slideInLeft');
                $('.ani-slideInUp3').removeClass('animated slideInUp');
                $('.ani-slideInDown3').removeClass('animated slideInDown');
                $('.ani-slideInRight3').removeClass('animated slideInRight');
            }
            if (index == 4) {
                $('.ani-lightSpeedIn4').removeClass('animated lightSpeedIn');
                // $('.ani-zoomIn4').removeClass('animated zoomIn');
                $('.ani-slideInUp4').removeClass('animated slideInUp');
            }
            if (index == 5) {
                $('.ani-slideInRight5').removeClass('animated slideInRight');
                $('.ani-slideInLeft5').removeClass('animated slideInLeft');
                $('.ani-rotateIn5').removeClass('animated rotateIn');
            }
            if (index == 6) {
                $('.ani-slideInRight6').removeClass('animated slideInRight');
                $('.ani-slideInLeft6').removeClass('animated slideInLeft');
                $('.ani-rotateIn6').removeClass('animated rotateIn');
                $('.ani-bounceIn6').removeClass('animated bounceIn');
            }

            if (nextIndex == 1) {
                $('.ani-slideInLeft1').addClass('animated slideInLeft');
                $('.ani-fadeInRight1').addClass('animated fadeInRight');
                setTimeout(function () {
                    $('.ani-rotateIn1').addClass('animated rotateIn');
                }, 1000)
                setTimeout(function () {
                    $('.ani-slideInDown1').addClass('animated slideInDown');
                    $('.ani-slideInUp1').addClass('animated slideInUp');
                }, 1500)
                setTimeout(function () {
                    $('.ani-flip1').addClass('animated flip');
                }, 2000)
                setTimeout(function () {
                    $('.ani-rubberBand1').addClass('animated rubberBand');
                }, 2500)
            }
            if (nextIndex == 2) {
                $('.ani-slideInRight2').addClass('animated slideInRight');
                $('.ani-slideInLeft2').addClass('animated slideInLeft');
                setTimeout(function () {
                    $('.ani-fadeInLeft2').addClass('animated fadeInLeft');
                }, 1000)
                setTimeout(function () {
                    $('.ani-fadeInRight2').addClass('animated fadeInRight');
                }, 1500)
                setTimeout(function () {
                    $('.ani-rubberBand2').addClass('animated rubberBand');
                }, 2000)
            }
            if (nextIndex == 3) {
                $('.ani-slideInLeft3').addClass('animated slideInLeft');
                $('.ani-slideInUp3').addClass('animated slideInUp');
                $('.ani-slideInDown3').addClass('animated slideInDown');
                $('.ani-slideInRight3').addClass('animated slideInRight');
            }
            if (nextIndex == 4) {
                $('.ani-slideInUp4').addClass('animated slideInUp');
                setTimeout(function () {
                    $('.ani-lightSpeedIn4').eq(0).addClass('animated lightSpeedIn');
                }, 1000)
                setTimeout(function () {
                    $('.ani-lightSpeedIn4').eq(1).addClass('animated lightSpeedIn');
                }, 1500)
                setTimeout(function () {
                    $('.ani-lightSpeedIn4').eq(2).addClass('animated lightSpeedIn');
                }, 2000)
                setTimeout(function () {
                    $('.ani-lightSpeedIn4').eq(3).addClass('animated lightSpeedIn');
                }, 2500)
            }
            if (nextIndex == 5) {
                $('.ani-slideInRight5').addClass('animated slideInRight');
                $('.ani-slideInLeft5').addClass('animated slideInLeft');
                setTimeout(function () {
                    $('.ani-rotateIn5').addClass('animated rotateIn');
                }, 1000)
            }
            if (nextIndex == 6) {
                $('.ani-slideInRight6').addClass('animated slideInRight');
                $('.ani-slideInLeft6').addClass('animated slideInLeft');
                setTimeout(function () {
                    $('.ani-rotateIn6').addClass('animated rotateIn');
                }, 1000)
                setTimeout(function () {
                    $('.ani-bounceIn6').addClass('animated bounceIn');
                }, 1500)
            }
        }

    });
});