$( document ).ready(function() {


  $('.scrollspy').scrollSpy({scrollOffset: 0});

  // Header shadow //
  $(window).scroll(function (event) {
    let scroll = $(window).scrollTop();
    if (scroll > 3) {
      $('nav').addClass("header-shadow")
    } else {
      $('nav').removeClass("header-shadow")
    }
  });



  })
