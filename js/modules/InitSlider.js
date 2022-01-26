const InitSlider = ()=>{

   const swiper = new Swiper('.my-swiper', {
     
     slidesPerView: 1,
     spaceBetween: 20,
      loop: true,
      breakpoints:{
       1400:{
         slidesPerView:4,
       },
       992:{
         slidesPerView:4,
       },
       768:{
         slidesPerView:3,
       },
       540:{
         slidesPerView:2,
       },
     },
    
      navigation: {
        nextEl: '.my-swiper-button-next',
        prevEl: '.my-swiper-button-prev',
      },
   
    });
}
export default InitSlider;