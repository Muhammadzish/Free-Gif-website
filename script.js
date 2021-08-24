/*global $, window*/
// Top navnar (Khaled Section )


$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["zeeshan", "Photo grahpar", "Developer", "Web Designer",],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Muhammad zeeshan", "Developer", "Designer", "Photo grahpar"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
     
$(function () {
    /* -------------------------------------------------------------
          Menu Dropdown
      ------------------------------------------------------------- */
     $("#all-navbar").headroom({
            "offset": 100,
            "tolerance": 0,
            "classes": {
              "initial": "animated",
              "pinned": "slideInDown",
              "unpinned": "slideOutUp"
            }
          });
      $(".all-navbar .language-btn").mousedown(function(){ 
          $(".all-navbar #language-menu").toggle();
      });
      $(".all-navbar .currency-btn").mousedown(function(){
          $(".all-navbar #currency-menu").toggle();
      });
      
  
      $('#main-navbar .def').on('mouseenter',function(){
              $(this).find('.dropdown-menus').first().stop(true, true).delay(300).slideDown();
          });

      $('#main-navbar .def').on('mouseleave',function(){
              $(this).find('.dropdown-menus').first().stop(true, true).delay(100).slideUp();
  });
     $('#main-navbar .dropdown-submenus').on('mouseenter',function(){
              $(this).find('.dropdown-menus').first().stop(true, true).delay(100).slideDown();
  });    
      $('#main-navbar .dropdown-submenus').on('mouseleave',function(){
              $(this).find('.dropdown-menus').first().stop(true, true).delay(100).slideUp();
  });
    // Testimonail & Header Slider(mohammed section)
    
      $('.testim .bxslider').bxSlider({
         pager: false
      });
  
      $('.header .bxslider').bxSlider({
         controls: false
      });
    // Upcoming Event (Rasha Section)
   
      // caching the scroll top element 
  var scrollButton = $('#scroll-top');
  $(window).on('scroll', function () {
      
      if ($(this).scrollTop() >= 750) {
          
          scrollButton.fadeIn(1000);
          
      } else {
          
          scrollButton.fadeOut(1000);
      }
      
  });
  
  scrollButton.click(function () {
      
      $('html,body').animate({
          
          scrollTop : 0
          
      }, 1000);
      
  });
       var leftArrow = '<i class="fa fa-chevron-left"></i>',
        rightArrow = '<i class="fa fa-chevron-right"></i>',
        options = {
            loop : true, //عدد لا نهائي من التكرارات
            margin : 0, // المسافة بين العناصر
            nav : true, // اظهار زرين للتحرك قبل وبعد (next & prev)
            navText : [leftArrow, rightArrow],
            items : 1,
            merge : true
        };
     $(".upcoming-events .owl-carousel").owlCarousel(options);
      
  
      // Photos (Nisrin) section
      $('.photos .owl-carousel').owlCarousel({
            loop : true,
            margin : 0,
            nav : true,
            navText : [leftArrow, rightArrow],
            items : 4,
            dots : false
        });
});



function gettingUserInput() {

    function searchJsonp(url, callback) {

        var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
        window[callbackName] = function(data) {
            delete window[callbackName];
            document.body.removeChild(script);
            callback(data);
        };

        var script = document.createElement('script');
        script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
        document.body.appendChild(script);
    }


    var saveUserInput = document.getElementById("userInput").value;
    var autoCompleteUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${saveUserInput}&limit=8&namespace=0&format=json&callback=?`;


    searchJsonp(autoCompleteUrl, function(data) {
            document.getElementById('userInput').innerText = `<input>Hey fuck u</input>`;
        for(var i = 0; i < data[1].length; i++){
            document.getElementById("output4").innerHTML = "<div><div><a href= "+data[3][i]+"><h3>"+data[1][i]+"</h3></a><p>"+data[2][i]+"</p></div></div>"
        }
            console.log(data[1]);
        });
    // function get(url) {
    //     // Return a new promise.
    //     return new Promise(function(resolve, reject) {
    //         // Do the usual XHR stuff
    //         var req = new XMLHttpRequest();
    //         req.withCredentials = true
    //         req.open('GET', url);
    //         req.onload = function() {
    //             // This is called even on 404 etc
    //             // so check the status
    //             if (req.status == 200) {
    //                 // Resolve the promise with the response text
    //                 resolve(req.response);
    //             }
    //             else {
    //                 // Otherwise reject with the status text
    //                 // which will hopefully be a meaningful error
    //                 reject(Error(req.statusText));
    //             }
    //         };
    //
    //         // Handle network errors
    //         req.onerror = function() {
    //             reject(Error("Network Error"));
    //         };
    //
    //         // Make the request
    //         req.send();
    //     });



    // get(wikiTestOnly).then(function(response) {
    //     console.log(response);
    //     console.log(typeof(response));
    //    var json = JSON.parse(response)
    //     console.log(json);
    //
    //     for(var i = 0; i < json[1].length; i++){
    //         // document.getElementById("output4").innerHTML = "<div><div><a href= "+json[3][i]+"><h3>"+json[1][i]+"</h3></a><p>"+json[2][i]+"</p></div></div>"
    //     }
    // }, function(error) {
    //     console.error("Failed!", error);
    // })
}







function jsonp(url, callback) {


    var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    window[callbackName] = function(data) {
        delete window[callbackName];
        document.body.removeChild(script);
        callback(data);
    };

    var script = document.createElement('script');
    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
    document.body.appendChild(script);
}



function getJsonp() {
    var saveUserInput = document.getElementById("userInput").value;
    var autoCompleteUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${saveUserInput}&limit=8&namespace=0&format=json&callback=?`;
    jsonp(autoCompleteUrl, function(data) {
        document.getElementById('userInput').innerText = `<input>Hey fuck u</input>`;
        console.log(data[1]);
    });
}







// loading page screen fade out
$('.loading-page').fadeOut(2500);

(function($) {
  $.fn.animateNumbers = function(stop, commas, duration, ease) {
      return this.each(function() {
          var $this = $(this);
          var isInput = $this.is('input');
          var start = parseInt(isInput ? $this.val().replace(/,/g, "") : $this.text().replace(/,/g, ""));
          var regex = /(\d)(?=(\d\d\d)+(?!\d))/g;
          commas = commas === undefined ? true : commas;
          
          // number inputs can't have commas or it blanks out
          if (isInput && $this[0].type === 'number') {
              commas = false;
          }
          
          $({value: start}).animate({value: stop}, {
              duration: duration === undefined ? 1000 : duration,
              easing: ease === undefined ? "swing" : ease,
              step: function() {
                  isInput ? $this.val(Math.floor(this.value)) : $this.text(Math.floor(this.value));
                  if (commas) {
                      isInput ? $this.val($this.val().replace(regex, "$1,")) : $this.text($this.text().replace(regex, "$1,"));
                  }
              },
              complete: function() {
                  if (parseInt($this.text()) !== stop || parseInt($this.val()) !== stop) {
                      isInput ? $this.val(stop) : $this.text(stop);
                      if (commas) {
                          isInput ? $this.val($this.val().replace(regex, "$1,")) : $this.text($this.text().replace(regex, "$1,"));
                      }
                  }
              }
          });
      });
  };
})(jQuery);
$(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          $(".counter1").animateNumbers(78520, true, 2500, "linear");

$(".counter2").animateNumbers(9821, true, 2500, "linear");

$(".counter3").animateNumbers(25003, true, 2500, "linear");

$(".counter4").animateNumbers(103210, true, 2500, "linear");    
      }
  });