const swiper = new Swiper('.swiper', {

    slidesPerView: 2,
    

    spaceBetween: 48,
    loop:true,

   // 分頁、左右箭頭、滾動條若有使用則必需設定          
   // 分頁   
    pagination: {
        el: ".pageNum",
        type: "fraction",
    },
   // 左右箭頭    
   navigation: {
     nextEl: '.next-btn',
     prevEl: '.prev-btn',
   },
   // 滾動條
//    scrollbar: {
//      el: '.swiper-scrollbar',
//    },
 });

const swiper2 = new Swiper('.swiper-sm', {

    slidesPerView: 1.3,
    

    spaceBetween: 24,
    loop:true,

   // 分頁、左右箭頭、滾動條若有使用則必需設定          
   // 分頁   
    pagination: {
        el: ".pageNum-sm",
        type: "fraction",
    },
   // 左右箭頭    
   navigation: {
     nextEl: '.next-btn-sm',
     prevEl: '.prev-btn-sm',
   },
   // 滾動條
//    scrollbar: {
//      el: '.swiper-scrollbar',
//    },
 });

 const swiper3 = new Swiper('.sec5-swiper', {

    slidesPerView: 1.3,
    spaceBetween: 24,
    loop:true,

   // 分頁、左右箭頭、滾動條若有使用則必需設定          
   // 分頁   
    // pagination: {
    //     el: ".pageNum-sm",
    //     type: "fraction",
    // },
   // 左右箭頭    
  //  navigation: {
  //    nextEl: '.next-btn-sm',
  //    prevEl: '.prev-btn-sm',
  //  },
   // 滾動條
//    scrollbar: {
//      el: '.swiper-scrollbar',
//    },
 });

 const swiper4 = new Swiper('.sec7-swiper', {

    slidesPerView: 1.3,
    spaceBetween: 24,
    loop:true,

   // 分頁、左右箭頭、滾動條若有使用則必需設定          
   // 分頁   
    // pagination: {
    //     el: ".pageNum-sm",
    //     type: "fraction",
    // },
   // 左右箭頭    
  //  navigation: {
  //    nextEl: '.next-btn-sm',
  //    prevEl: '.prev-btn-sm',
  //  },
   // 滾動條
//    scrollbar: {
//      el: '.swiper-scrollbar',
//    },
 });
