  // load
  $("#bg_txt").css("opacity", "1");
  // $("#logo").css("width", "62px");

  // scoll btn
  // var wih;
  // $(".page:first-child").on("click", function(event){
  //   window.scrollTo(0, 0);
  // });
  // $(".page:nth-child(2)").on("click", function(event){
  //   wih = window.innerHeight;
  //   window.scrollTo(0, wih);
  // });
  // $(".page:nth-child(3)").on("click", function(event){
  //   wih = window.innerHeight;
  //   window.scrollTo(0, 2*wih);
  // });
  // $(".page:last-child").on("click", function(event){
  //   wih = window.innerHeight;
  //   window.scrollTo(0, 3*wih);
  // });
  // itr = document.getElementById("intro");
  // con = document.getElementById("content");
  // con2 = document.getElementById("content2");
  // end = document.getElementById("end");

  // $(function() {        // 축약
  //   window.scrollTo(0, 0);
  // });

  window.addEventListener("scroll", function(event) {
    scrollFunction();
  });
  // window.onscroll = function() {
  //   scrollFunction()
  // }
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


  // window.addEventListener("wheel", function(event){
  //   var dy = event.deltaY;
  //   console.log(dy);
  //   event.preventDefault();
  //   // event.stopPropagation();
  //   if (dy > 0) {
  //     window.scrollBy(0, window.innerHeight/7);
  //   } else {
  //     window.scrollBy(0, -window.innerHeight/7);
  //   }
  // });


  // wheel scroll
  // window.addEventListener("wheel", function(event){
  //   var dy = event.deltaY;
  //   console.log(dy);
  //   if (dy > 0) {
  //     this.scrollBy(0, wih/6);
  //   }
  //   else {
  //     this.scrollBy(0, -wih/6);
  //   }
  //   event.preventDefault();
  // });

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

  // function over() {
  //   $("#content2 > .con2").on("mouseover", function(event){
  //     console.log("good");
  //     $(this).addClass("con2_over");
  //     $(".con2_images img").addClass(".con2_over_image");
  //   });
  //   $("#content2 > .con2").on("mouseout", function(event){
  //     $(this).revomeClass("con2_over");
  //     $(".con2_images img").removeClass(".con2_over_image");
  //   });
  // }
  // over();
  // $("#content2 > .con2").on("click", function(event){
  //   console.log("div");
    // $("#content2 > .con2").off("mouseover");
    // $("#content2 > .con2").off("mouseout");
  //   $(this).addClass("con2_click");
  //   $(this).find(".close").addClass("con2_click_close");
  //   $(".con2_images img").addClass("con2_click_image");
  //   $("#content2 > .con2").not(this).addClass("con2_click_hide");
  // });
  // $(".close").on("click", function(event){
  //   console.log("close");
    // over();
    // $(this).removeClass("con2_click");
    // $(this).find(".close").removeClass("con2_click_close");
    // $(".con2_images img").removeClass("con2_click_image");
    // $("#content2 > .con2").not(this).removeClass("con2_click_hide");
    // return false;        // ㅠㅠ
  // });
