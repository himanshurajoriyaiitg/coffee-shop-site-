function showcontent(){
    const sidebar=document.querySelector('.sidebar');
    sidebar.style.display='flex'
}
function hidecontent(){
    const sidebar=document.querySelector('.sidebar');
    sidebar.style.display='none'
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween:25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        0:{
            slidesPerView:1
        },
        850:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        }
    }
  
    
  });
  