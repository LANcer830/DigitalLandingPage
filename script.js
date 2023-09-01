gsap.from("#img1",
{
    delay:0.4,
    opacity:0,
    duration:1,
    y:60,

})
gsap.from("#img2",
{
    delay:0.4,
    opacity:0,
    duration:1,
    x:60,

})
gsap.from("#img3",
{
    delay:0.4,
    opacity:0,
    duration:1,
    x:-60,

})
gsap.from("#main h1",
{
    delay:0.4,
    opacity:0,
    duration:1,
})
gsap.from("#nav h1",{
    scale:0.5,
    duration:2,
})
gsap.from("#page2 h5",{
    opacity:0,
    stagger:0.6,
    scrollTrigger:{
        trigger:"#page2 h5",
        scroller:"body",
        start:"top 60%",
    }
})
gsap.from("#page2 #About-us",{
    opacity:0,
    duration:2,
    scale:0.7,
    scrollTrigger:{
        trigger:"#page2 #About-us",
        scroller:"body",
        start:"top 80%"
        
    }
})
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });