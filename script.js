function showcontent(){
    const sidebar=document.querySelector('.sidebar');
    sidebar.style.display='flex'
}
function hidecontent(){
    const sidebar=document.querySelector('.sidebar');
    sidebar.style.display='none'
}


let item1=document.getElementById('sidebaritem1');
  item1.addEventListener('click',()=>{
       hidecontent();
       item1.click();

  })
  let item2=document.getElementById('sidebaritem2');
  item2.addEventListener('click',()=>{
       hidecontent();
       item2.click();

  })
  let item3=document.getElementById('sidebaritem3');
  item3.addEventListener('click',()=>{
       hidecontent();
       item3.click();

  })
  let item4=document.getElementById('sidebaritem4');
  item4.addEventListener('click',()=>{
       hidecontent();
       item4.click();

  })
  let item5=document.getElementById('sidebaritem5');
  item5.addEventListener('click',()=>{
       hidecontent();
       item5.click();

  })
  let item6=document.getElementById('sidebaritem6');
  item6.addEventListener('click',()=>{
       hidecontent();
       item6.click();

  })


  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
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
  