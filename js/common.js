$(function() {
  $("#js-get-started").on("click", function(e){
    e.preventDefault();
    var sliderOffset = $("#slider").offset().top;

    $("html, body").animate({
      scrollTop: sliderOffset
    }, 500);
  });
});

var mainH = $("#js-main").height(),
    navH = $("#js-nav-container").innerHeight();

$(document).on("scroll", function(){
  var documentScroll = $(this).scrollTop();
  if (documentScroll > mainH) {
    $("#js-nav-container").addClass("fixed");
    $("#js-main").css("paddingTop", navH);
  } else {
    $("#js-nav-container").removeClass("fixed");
    $("#js-main").removeAttr("style");
  }
});

$(document).ready(function(){
  $('.header-contacts__button').on("click", function(){
    $(".overlay").show()
  });
  $('.popup-close').on("click", function(){
    $('.overlay').hide();
  });
});