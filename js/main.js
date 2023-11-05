AOS.init(); 
$('[data-aos]').each(function(){
     $(this).addClass("aos-init"); 
});

$('#fullpage').fullpage({
  anchors: ['section0','section1','section2', 'section3', 'section4', 'section5', 'section6'],
  sectionsColor : ['#112d42', '#f9f7f7','#dbe2ef','#3f72af', '#dbe2ef', '#3f72af','#f9f7f7','#112d42'],
  slidesNavigation: true,
  responsiveWidth: 768,
  controlArrows: false,
  onLeave: function(){
      $('.section [data-aos]').each(function(){
          $(this).removeClass("aos-animate")
      });
  }, // 화면 전환 직전에 실행
  onSlideLeave: function(){
      $('.slide [data-aos]').each(function(){
          $(this).removeClass("aos-animate")
      });
  }, // 슬라이드 전환 직전에 실행
  afterSlideLoad: function(){
      $('.slide.active [data-aos]').each(function(){
          $(this).addClass("aos-animate")
      });
  }, // 슬라이드 화면이 전환되고 난 후에 실행
  afterLoad: function(){
      $('.section.active [data-aos]').each(function(){
          $(this).addClass("aos-animate")
      });
  }}); // 풀페이지 화면이 전환되고나서 실행

  $(function(){
    // Trigger 
    $('.trigger').click(function(){

      $(this).toggleClass('active')
      $('.gnb').toggleClass('active')
      $(".overlay").fadeToggle();
        console.log("오버레이");
    })
  
    $('.gnb a').click(function(){
      $('.gnb, .trigger').removeClass('active')
      $(".overlay").fadeOut();
    })
  })

