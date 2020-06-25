  // load
  $("#bg_txt").css("opacity", "1");

  window.addEventListener("scroll", function(event) {
    scrollFunction();
  });

  var logo, page, art, i;

  logo = document.getElementById("logo");
  function scrollFunction() {
    // if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ||
    // if (document.body.scrollTop > window.innerHeight*0.8 || document.documentElement.scrollTop > window.innerHeight*0.8 || window.pageYOffset > window.innerHeight*0.8) {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 || window.pageYOffset > 80) {
      logo.style.opacity = "1";
      logo.style.width = "62px";
    } else {
      logo.style.opacity = "0";
      logo.style.width = "107px";
    }
  }

  page = document.getElementsByClassName("page");
  art = document.getElementsByTagName("article");
  for (i = 0; i < page.length; i++) {
    page_event(i);
  }
  function page_event(j) {
    page[j].addEventListener("click", function(event){
      art[j].scrollIntoView();
      var opa = j > 0 ? "1" : "0"
      logo.style.opacity = opa;
    });
  }

  var wy1 = window.pageYOffset;    // wy2 보다 더 늦게 반응 함

  window.onscroll = function() {
  // window.addEventListener("scroll", function(event){
    var wy2 = window.pageYOffset;    // wy1 보다 더 빨리 반응 함
    if (wy1 > wy2) {
      logo.style.width = "107px";
      // logo.style.transition = "width ease-out .5s 0s";
    } else {
      logo.style.width = "62px";
    }
    // console.log(wy1 + ", " + wy2);
    wy1 = wy2;
  };

  // mobile top btn
  $("#top_btn").on("click", function(event){
    window.scrollTo(0, 0);
  });

  // content2
  function over() {
    $("#content2 > .con2").on("mouseover", function(event){
      $(this).css({
        "width": "60%",
        "padding-top": "6%"
      });
      $(".con2_images img").css("margin", "6% 4% 0");
    });
    $("#content2 > .con2").on("mouseout", function(event){
      $(this).css({
        "width": "50%",
        "padding-top": "7%"
      });
      $(".con2_images img").css("margin", "8% 4% 0");
    });
  }
  over();
  $("#content2 > .con2").on("click", function(event){
    console.log("div");
    $("#content2 > .con2").off("mouseover");
    $("#content2 > .con2").off("mouseout");
    $(this).css({
      "width": "100%",
      "cursor": "auto",
      "padding-top": "4%"
    });
    $(this).find(".close").css({
      "opacity": "1",
      "visibility": "visible"
    });
    $(".con2_images img").css("margin", "2% 4%");
    $("#content2 > .con2").not(this).css("width", "0");
  });
  $(".close").on("click", function(event){
    console.log("close");
    over();
    $("#content2 > .con2").css({
      "width": "50%",
      "cursor": "pointer",
      "padding-top": "8%"
    });
    $(this).css({
      "opacity": "0",
      "visibility": "visible"
    });
    $(".con2_images img").css("margin", "8% 4% 0");
    return false;        // ㅠㅠ
  });
