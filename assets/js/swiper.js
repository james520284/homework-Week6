
// Swiper輪播
const swiper = new Swiper('.swiper', {
   slidesPerView: 1.3,
   spaceBetween: 24,
   loop:true,
   pagination: {
      el: ".pageNum-sm",
      type: "fraction",
   },
   navigation: {
      nextEl: '.next-btn-sm',
      prevEl: '.prev-btn-sm',
   },
   breakpoints: {
      992: {
      slidesPerView: 2,
      spaceBetween: 48,
      slidesPerGroup:2,
      pagination: {
      el: ".pageNum",
      type: "fraction",
      },
      navigation: {
         nextEl: '.next-btn',
         prevEl: '.prev-btn',
      },
      }
   }
})

const swiper2 = new Swiper('.index-sec5-swiper', {

   slidesPerView: 1.3,
   spaceBetween: 24,
   loop:true,
});

const swiper3 = new Swiper('.index-sec7-swiper', {

   slidesPerView: 1.3,
   spaceBetween: 24,
   loop:true,
});

const swiper4 = new Swiper('.blog-sec3-swiper', {

   slidesPerView: 1.3,
   spaceBetween: 24,
   loop:true,
});



