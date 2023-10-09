$(function(){

  // 스크롤시 메뉴색 변경
  var $header = $('header');

  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();

    if($(this).scrollTop() > 600){
      $header.find('nav ul li a').addClass('menu_black');
    } else {
      $header.find('nav ul li a').removeClass('menu_black');
    }

    var containerHeight = $("main").height();

    if (scrollTop + $(window).height() >= containerHeight) {
      $header.find('nav ul li a').removeClass('menu_black');
    }
  });


  // 슬라이드
  $('.myslider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
})

function clickEvent(){
  alert('준비중입니다.');
}

