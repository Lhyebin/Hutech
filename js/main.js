$(function () {
    // <풀페이지>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    $('main').fullpage({
        anchors: ['main_visual', 'main_product', 'main_event', 'main_tech', 'main_content'],
        // -> 스크롤 내릴때마다 한 풀페이지마다 주소url에 이름 변경하기
        navigation: false,
        // -> 왼쪽에 몇번째 풀페이지인지 도트 표기 할지 안할지
        css3: false,
        // ->풀페이지 fixed한 sub02 이미지 고정
        responsiveWidth: 700,
        afterRender: function () {
            $('.main .section').eq(0).addClass('on')
        },
        afterLoad: function (link, idx) {
            console.log(link, idx);
            // $('.gnb li').eq(idx - 1).addClass('on').siblings().removeClass('on')
            $('.main .section').eq(idx - 1).addClass('on').siblings().removeClass('on')
        },
        // -> afterLoad : 풀페이지 페이지마자 왼쪽바 같이 연동되게
        onLeave: function (idx, nidx, dir) {
            $('.gnb li').eq(nidx - 1).addClass('on').siblings().removeClass('on')
            console.log(idx, nidx, dir);

            if (dir == 'up') {
                $('.header').addClass('on');
            } else {
                $('.header').removeClass('on');
            }
        }
    });







    // main_visual : 이미지 다음페이지
    $('.visual_wrap').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    // main_visual : 화살표
    $('.main_visual .visual_arrows .left').on('click', function () {
        $('.visual_wrap').slick('slickPrev')
    })
    $('.main_visual .visual_arrows .right').on('click', function () {
        $('.visual_wrap').slick('slickNext')
    })







    // main_event : 이미지 다음페이지
    $('.event_wrap').slick({
        arrows: false,
        autoplay: false,
        speed: 1000,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 2,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    variableWidth: false,
                }
            },
        ]
    });

    // main_event : 화살표
    $('.main_event .event_arrows .left').on('click', function () {
        $('.event_wrap').slick('slickPrev')
    })
    $('.main_event .event_arrows .right').on('click', function () {
        $('.event_wrap').slick('slickNext')
    })











    // main_tech : 이미지 다음페이지
    $('.tech_box').slick({
        arrows: false,
        autoplay: false,
        speed: 1000,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 4,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                }
            },
        ]
    });

    // main_tech : 화살표
    $('.main_tech .tech_arrows .left').on('click', function () {
        $('.tech_box').slick('slickPrev')
    })
    $('.main_tech .tech_arrows .right').on('click', function () {
        $('.tech_box').slick('slickNext')
    })
});