$(document).ready(function() {
   const hero = $("#hero");
   const slider = $("#slider");
   const logo = $("#logo");
   const hamburger = $(".hamburger");
   const navgroup = $(".navbar-fade");
   const laterFade = $(".later-fade");
   const htmlElement = $("html");
   const elementFadeIn = $(".fade-in");
   const aboutSectionDiv = $("#about-section");
   const windowWidth = window.innerWidth;

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

   function largeImage(event) {
      event.preventDefault();
      let selectedImg = $(this).attr("data-small-img");
      let showThisImg = "#";

      switch (selectedImg) {
         case "image-1":
            showThisImg += "about-img-1";
            break;
         case "image-2":
            showThisImg += "about-img-2";
            break;
         default:
            showThisImg += "about-img-3";
      }

      console.log(showThisImg);

      aboutSectionDiv.fadeOut(250);
      setTimeout(() => {
         $(showThisImg).fadeIn(250);
      }, 250);
   }

   function closeLargeImage(event) {
      event.preventDefault();

      $(".large-image").fadeOut(250);
      setTimeout(() => {
         aboutSectionDiv.fadeIn(250);
      }, 250);
   }

   function onLoad() {
      elementFadeIn.fadeIn(500);

      if (windowWidth <= 400) {
         switch ($(".hero-image").attr("data-hero-img")) {
            case "home":
               $(".hero-image").attr(
                  "src",
                  "assets/images/colin-stevens-baltimore-web-developer-mobile-2.jpg"
               );
         }
      }
   }

   $(".nav-fade").on("click", pageChange);
   $(".img-about").on("click", largeImage);
   $(".fa-times-circle").on("click", closeLargeImage);

   onLoad();
});
