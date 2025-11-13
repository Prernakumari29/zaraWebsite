const images = [
    "img1.webp",
    "img2.webp",
    "img3.webp",
    "img3.webp",
    "img4.webp",
    "img5.webp",
    "img6.webp"
  ];
  index = 0
  var imgElement = document.querySelector("#slideImage")
  var btn = document.querySelector("#dicover-more")

  btn.addEventListener("click" ,function(){
    index = (index+1) % images.length
    setTimeout(() => {
      imgElement.src = images[index];    
    }, 300);
  });


// --------------------------------------page4--------------------------
  const hoverImages = document.querySelectorAll('.hoverImage img');

hoverImages.forEach(img => {
  const originalSrc = img.src;            
  const hoverSrc = img.dataset.hover;     


  img.addEventListener('mouseenter', () => {
    img.src = hoverSrc;
  });


  img.addEventListener('mouseleave', () => {
    img.src = originalSrc;
  });
});

// ---------------------------------------------annimation------------------------------
gsap.from("#zara", {
      y:-30,
      opacity:0,
    duration:1,
    delay:0.5,
})

var tel = gsap.timeline()

tel.from(".left-right a",{
  y:-30,
  opacity:0,
  duration:1,
  delay:0.3,
  stagger:0.3
})

// tel.from(".section2 h1" , {
//   opacity:0,
//   duration:0.8,
//   scale:0.2,
//   transformOrigin: "left center"
// })

// gsap.from(".video video" , {
//      scale:0,
//      delay:0.1,
//      duration:1,
//      stagger:0.3,
//      scrollTrigger:{
//       trigger:".video video",
//       scroller:"body",
//      }
// })


gsap.from("#left-text" , {
     scale:0,
     opacity:0,
     delay:0.1,
     duration:1,
     stagger:0.3,
     scrollTrigger:"#left-text"
})

gsap.to(".video video" , {
     scale:0.6,
     delay:0.1,
     duration:1,
     stagger:0.3,
     scrollTrigger:{
      trigger:".image",
      scroller:"body",
      start:"top 70%",
      end:"top 20%",
      scrub:2
     }
})
gsap.from(".zarasale img" , {
    //  scale:0.8,
     delay:0.6,
     duration:2,
     x:-2000,
     scrollTrigger:{
      trigger:"#page5",
      scroller:"body",
     }
})