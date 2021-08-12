

function goBack() {
  window.history.back();
}
var website = document.getElementById('web').offsetWidth;
var xTo =  website;
var senseSpeed = 5;
var previousScroll = 0;

$(window).scroll(function(event){
  var scroller = $(this).scrollTop();
  if (scroller-senseSpeed > previousScroll){
    $("#rightbtnarea").addClass("slidedown");
    $("#rightbtnarea").removeClass("slideup");
  } else if (scroller+senseSpeed < previousScroll) {
    $("#rightbtnarea").addClass("slideup");
    $("#rightbtnarea").removeClass("slidedown");
  }
  previousScroll = scroller;
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".text",{
   scrollTrigger: {
    trigger: ".text",
     start: "top bottom",
    end: "bottom top",
     id:"text-id",
     toggleClass:"active",
 scrub: true,
   },
  x:"0%",
  duration:10
});

gsap.to(".photo-gallery",{
   scrollTrigger: {
    trigger: ".photo-gallery",
     start: "top bottom",
    end: "bottom top",
     id:"text-id",
     toggleClass:"active",
 scrub: true,
   },
  x:"0%",
  duration:10
});

gsap.to(".photo-gallery-1",{
   scrollTrigger: {
    trigger: ".photo-gallery-1",
     start: "top bottom",
    end: "bottom top",
     id:"text-id",
     toggleClass:"active",
 scrub: true,
   },
  x:"0%",
  duration:10
});

gsap.to(".photo-gallery-2",{
   scrollTrigger: {
    trigger: ".photo-gallery-2",
     start: "top bottom",
    end: "bottom top",
     id:"text-id",
     toggleClass:"active",
 scrub: true,
   },
  x:"0%",
  duration:10
});





ScrollTrigger.matchMedia({
 
  "(min-width: 1023px)": function() {
    ScrollTrigger.create({
      trigger: "#content",
      start: "top 150px",
    
      end: self => "+=" + (document.querySelector("#content").offsetHeight - self.pin.offsetHeight),
      pin: "#sidebar",
      markers: false,
    
      onRefresh: self => self.pin.parentNode.style.float = "right",
      pinSpacing: false
    });
  },
    "(min-width: 1025px)": function() {
     
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".website",
          start: "center center",
          end: "bottom center",
          scrub: true,
          pin: true,
          markers: false,
        }
          });
        tl.to(".website",  {x:-xTo ,  })
      
    },
    "(min-width: 501px) and (max-width: 1024px)": function() {

      ScrollTrigger.create({
        trigger: ".webwork",
        start: "top 250px",
      
        end: self => "+=" + (document.querySelector(".webwork").offsetHeight - self.pin.offsetHeight),
        pin: ".webtext",
        markers: false,
      
        onRefresh: self => self.pin.parentNode.style.float = "right",
        pinSpacing: false
      });
    },
 
   
   });


   
   filterSelection("web")
   function filterSelection(c) {
     var x, i;
     x = document.getElementsByClassName("filterDiv");
     if (c == "all") c = "";
     for (i = 0; i < x.length; i++) {
       w3RemoveClass(x[i], "show");
       if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
     }
   }
   
   function w3AddClass(element, name) {
     var i, arr1, arr2;
     arr1 = element.className.split(" ");
     arr2 = name.split(" ");
     for (i = 0; i < arr2.length; i++) {
       if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
     }
   }
   
   function w3RemoveClass(element, name) {
     var i, arr1, arr2;
     arr1 = element.className.split(" ");
     arr2 = name.split(" ");
     for (i = 0; i < arr2.length; i++) {
       while (arr1.indexOf(arr2[i]) > -1) {
         arr1.splice(arr1.indexOf(arr2[i]), 1);     
       }
     }
     element.className = arr1.join(" ");
   }
   
   // Add active class to the current button (highlight it)
   var btnContainer = document.getElementById("otherworkbtn");
   var btns = btnContainer.getElementsByClassName("btn");
   for (var i = 0; i < btns.length; i++) {
     btns[i].addEventListener("click", function(){
       var current = document.getElementsByClassName("active");
       current[0].className = current[0].className.replace(" active", "");
       this.className += " active";
     });
   }

         // Open the Modal
         function opendmmodal() {
          document.getElementById("dmmodal").style.display = "flex";
          document.body.style.overflowY = "hidden";
          document.body.style.position = "relative";
        }
        
        // Close the Modal
        function closedmmodal() {
          document.getElementById("dmmodal").style.display = "none";
          document.body.style.overflowY = "scroll";
          document.body.style.position = "static";
        }
        
        var slideDm = 1;
        showDm(slideDm);
        
        // Next/previous controls
        function plusSlides(n) {
          showDm(slideDm += n);
        }
        
        // Thumbnail image controls
        function currentSlide(n) {
          showDm(slideDm = n);
        }
        
        function showDm(n) {
          var i;
          var dmslides = document.getElementsByClassName("dmslides");
          var dots = document.getElementsByClassName("demo");
          if (n > dmslides.length) {slideDm = 1}
          if (n < 1) {slideDm = dmslides.length}
          for (i = 0; i < dmslides.length; i++) {
            dmslides[i].style.display = "none";
          }
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          
         
          dmslides[slideDm-1].style.display = "flex";
        }
        
        
        function openbannermodal() {
          document.getElementById("bannermodal").style.display = "flex";
          document.body.style.overflowY = "hidden";
          document.body.style.position = "relative";
        }
        function closebannermodal() {
          document.getElementById("bannermodal").style.display = "none";
          document.body.style.overflowY = "scroll";
          document.body.style.position = "static";
        }
        
        
        var slideBanner = 1;
        showBanner(slideBanner);
        
        // Next/previous controls
        function plusSlidesbanner(n) {
          showBanner(slideBanner += n);
        }
        
        // Thumbnail image controls
        function currentSlidesbanner(n) {
          showBanner(slideBanner = n);
        }
        
        function showBanner(n) {
          var i;
          var bannerslides = document.getElementsByClassName("bannerslides");
          var dots = document.getElementsByClassName("demo");
          if (n > bannerslides.length) {slideBanner = 1}
          if (n < 1) {slideBanner = bannerslides.length}
          for (i = 0; i < bannerslides.length; i++) {
            bannerslides[i].style.display = "none";
          }
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          
         
          bannerslides[slideBanner-1].style.display = "flex";
        }

            
