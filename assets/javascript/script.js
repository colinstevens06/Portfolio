$(document).ready(function() {
   const hero = $("#hero");
   const slider = $("#slider");
   const logo = $("#logo");
   const hamburger = $(".hamburger");
   const navgroup = $(".navbar-fade");
   const laterFade = $(".later-fade");
   const htmlElement = $("html");
   const elementFadeIn = $(".fade-in");

   const tl = new TimelineMax();

   tl.fromTo(
      hero,
      2,
      { height: "0%" },
      { height: "80%", ease: Power2.easeInOut }
   )
      .fromTo(
         hero,
         2,
         { width: "100%" },
         { width: "80%", ease: Power2.easeInOut }
      )
      .fromTo(
         slider,
         2,
         { x: "-100%" },
         { x: "0%", ease: Power2.easeInOut },
         "-=2"
      )
      .fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=1")
      .fromTo(
         hamburger,
         0.5,
         { opacity: 0, x: 30 },
         { opacity: 1, x: 0 },
         "-=1"
      )
      .fromTo(navgroup, 0.5, { opacity: 0 }, { opacity: 1 }, "-=1")
      .fromTo(laterFade, 0.5, { opacity: 0 }, { opacity: 1 });

   function pageChange(event) {
      event.preventDefault();
      let goToURL = $(this).attr("data-url");

      htmlElement.fadeOut(500);
      setTimeout(() => {
         document.location.href = goToURL;
      }, 500);
   }

   function onLoad() {
      elementFadeIn.fadeIn(500);
   }

   $(".nav-fade").on("click", pageChange);

   onLoad();
});
