new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween:30,
  
    // pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Resoponsive breackpoins
    breakpoints: {
        0: {
            slidePreview: 1
        },
        100: {
            slidePreview: 2
        },
        300:{
            slidePreview: 3
        },
    }
  });



