const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

window.onload = async function() {
  grant_effect();
  
  $(window).scroll(function(){
    grant_effect();
  });
}

function grant_effect() {
  $('.effect-fade').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll > elemPos - windowHeight) {
          $(this).addClass('effect-scroll09');
      }
  })
}