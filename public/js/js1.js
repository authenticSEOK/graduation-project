$(document).ready(function () {
  // http://bxslider.com/options
  var slider = $(".bxslider").bxSlider({ auto: true, mode: "fade" });

  var slider = $(".bxslider_01").bxSlider({
    auto: true,
    mode: "horizontal",
    slideWidth: 800,
    slideMargin: 10,
    minSlides: 3,
    maxSlides: 9,
    controls: false,
  });
  var slider2 = $(".bxslider_02").bxSlider({
    auto: true,
    mode: "horizontal",
    slideWidth: 185,
    slideMargin: 15,
    minSlides: 5,
    maxSlides: 10,
    shrinkItems: true,
    pager: false,
  });
  var slider3 = $(".bxslider_03").bxSlider({
    auto: true,
    mode: "horizontal",
    slideWidth: 185,
    slideMargin: 15,
    minSlides: 5,
    maxSlides: 10,
    shrinkItems: true,
    pager: false,
  });

  $(document).on(
    "click mouseover",
    ".bx-prev,.bx-next,.bx-pager,#bx-pager1",
    function () {
      slider.startAuto();
      slider2.startAuto();
      slider3.startAuto();
    }
  );
  $(document).on("click", ".bx-pager,#bx-pager1", function () {
    return false;
  });
  $(".subm").css("visibility", "hidden");
  $("#sub_wrap li").hover(function () {
    $(this).children("ul .subm").css("visibility", "visible");
  },function(){
    $(this).children("ul .subm").css("visibility", "hidden");
  });
});
