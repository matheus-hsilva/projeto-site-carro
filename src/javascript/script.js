$(document).ready(function () {
  const sections = $('section');
  const navItens = $('.nav-item');
  
  $(window).on('scroll', function () {
    const header = $('header');
    const scrollPosition = $(window).scrollTop() - header.outerHeight();
    
    if (scrollPosition <= 0){
      header.css('box-shadow', 'none');
    } else{
      header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.5)');
    }
  });
  
  ScrollReveal().reveal('.hero-description h1, .hero-description h3, .hero-description .btn-hero', {
    scale: 0.85,
    delay: 200,
    duration: 1500,
    reset: true
  });
  
  ScrollReveal().reveal('.card-tecnhology, .card-model', {
    scale: 0.85,
    delay: 200,
    duration: 1500,
    reset: true
  });
  
  ScrollReveal().reveal('.storytelling-title', {
    origin: 'right',
    delay: 150,
    duration: 1500,
    distance: '17%',
    reset: true
  });
  
  ScrollReveal().reveal('.section-storytelling p', {
    origin: 'left',
    delay: 150,
    duration: 1500,
    distance: '17%',
    reset: true
  });
  
  ScrollReveal().reveal('.technology-title , .models-title, .galery-title', {
    scale: 0.85,
    delay: 150,
    duration: 1500,
    reset: true
  });
  
  ScrollReveal().reveal('.galery-images a', {
    scale: 0.85,
    delay: 200,
    duration: 1500,
    reset: true
  });
  
  ScrollReveal().reveal('.section-title h1, .section-title h3', {
    origin: 'left',
    delay: 150,
    duration: 1500,
    distance: '10%',
    reset: true
  });
  
  ScrollReveal().reveal('.box-model', {
    scale: 0.85,
    delay: 150,
    duration: 1500,
    reset: true
  });
  
  ScrollReveal().reveal('.model-description p, .model-description .btn-model', {
    origin: 'bottom',
    delay: 150,
    duration: 1500,
    distance: '15%',
    reset: true
  });
  
  ScrollReveal().reveal('.box-technology', {
    scale: 0.85,
    delay: 150,
    duration: 1500,
    reset: true
  })
  
  ScrollReveal().reveal('.technology-description p', {
    origin: 'bottom',
    delay: 150,
    duration: 1500,
    distance: '15%',
    reset: true
  });
  
  ScrollReveal().reveal('.technology-description h1', {
    scale: 0.90,
    delay: 150,
    duration: 1500,
    reset: true
  });
  
  ScrollReveal().reveal('.section-form', {
    scale: 0.85,
    delay: 150,
    duration: 1500,
    reset: true
  });
  
  ScrollReveal().reveal('.img-creator', {
    scale: 0.85,
    delay: 150,
    duration: 1500,
    reset: true
  });
  
  ScrollReveal().reveal('.creator-description', {
    origin: 'right',
    delay: 150,
    duration: 1500,
    distance: '15%',
    reset: true
  });
  
  ScrollReveal().reveal('.text-description-one', {
    origin: 'right',
    delay: 150,
    duration: 1500,
    distance: '15%',
    reset: true
  });
  
  ScrollReveal().reveal('.text-description-two', {
    origin: 'left',
    delay: 150,
    duration: 1500,
    distance: '17%',
    reset: true
  });
  
  ScrollReveal().reveal('.story-line-card', {
    scale: 0.85,
    delay: 150,
    duration: 1500,
    reset: true
  });
});