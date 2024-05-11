


function mou(){
  Shery.mouseFollower();
  Shery.imageMasker(".mask-target" /* Element to target.*/, {
    //Parameters are optional.
    mouseFollower: true,
    text: "project",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.hoverWithMediaCircle(".f2 ,.textchyaatt ,.fifth_image ,.svgi", {
    images: ["image1.jpg", "image2.jpg", "image3.jpg"] /*OR*/,
    //videos: ["video1.mp4", "video2.mp4"],
  });
 
}
mou();


function hori(){
  
let container = document.querySelector(".main-wrapper");
let section = container.querySelectorAll("section");

let tl = gsap
  .timeline({
    scrollTrigger: {
      trigger: container,
      scrub: 1,
      pin: true,
      start: "top top",
      end: "+=4030",
      // markers:true,
    },
  })
  .to(container, {
    x: () =>
      -(container.scrollWidth - document.documentElement.clientWidth - 100) +
      "px",
    ease: "none",
    // duration: 1,
  })

 
}

hori();




function page1(){
  var tl = gsap.timeline({
    scrollTrigger:{
      trigger:".projectSection",
      start:"10% 60%",
      end:"10% 20%",
      // markers:true,
      scrub:2,
    }
  });
  
  
  tl.to(".same",{
    
    // markers:true,
    y:"-200",
    opacity:1,
    stagger:true
    })
}
page1();



function page2(){

  var t2 = gsap.timeline({
    scrollTrigger:{
      trigger:".section-2",
      start:"100% 60%",
      end:"100% 30%",
      // markers:true,
      scrub:3,
      duration:"2s",

    }
  });
  
  t2.to(".secleft",{
    opacity:1
  })
  var t3 = gsap.timeline({
    scrollTrigger:{
      trigger:".section-2",
      start:"100% 15%",
      end:"100% -10%",
      // markers:true,
      scrub:1,
      duration:"2s",
    }
  });
  
  t3.to(".secRight,.threepart",{
    opacity:1,
    x:20,
  })

}
page2();



  // Shery.mouseFollower({
  //   //Parameters are optional.
  //   skew: true,
  //   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  //   duration: 1,
  // });



function page3(){

  var t2 = gsap.timeline({
    scrollTrigger:{
      trigger:".section-3",
      start:"210% 50%",
      end:"210% 30%",
      // markers:true,
      scrub:3,
    }
  });
  
  t2.to(".sectionLeft",{
    opacity:1
  })
  var t2 = gsap.timeline({
    scrollTrigger:{
      trigger:".section-3",
      start:"210% 10%",
      end:"210% -10%",
      // markers:true,
      scrub:3,
    }
  });
  
  t2.to(".sectionRight",{
    opacity:1
  })

}
page3();



function page4(){

  var t2 = gsap.timeline({
    scrollTrigger:{
      trigger:".section-4",
      start:"310% 50%",
      end:"310% 30%",
      // markers:true,
      scrub:3,
    }
  });
  
  t2.to(".lastWala",{
    opacity:1
  })


}
page4();

function page5(){

  var t2 = gsap.timeline({
    scrollTrigger:{
      trigger:".section-5 , section_5_left",
      start:"430% 50%",
      end:"430% 30%",
      // markers:true,
      scrub:3,
    }
  });
  
  t2.to(".section_right_5 , .section_5_left",{
    opacity:1
  })


}
page5();














function cloud(){
  const Texts = [
    'HTML', 'CSS', 'JAVASCRIPT',
    'SWIFT', 'MONGOOSE', 'REACT',
    'PYTHON', 'SASS',
    'REACT JS', 'NODEJS', 'MONGODB',
    'EXPRESS', 'MYSQL', 'JQUERY', 'JAVA'
];

var tagCloud = TagCloud('.Sphere', Texts, {

    // Sphere radius in px
    radius: 270,

    // animation speed
    // slow, normal, fast
    maxSpeed: 'normal',
    initSpeed: 'fast',

    // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
    direction: 135,

    // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
    keep: true

});


// Giving color to each text in sphere
// var color = 'red';
document.querySelector('.Sphere').style.color = "#212121 ";
}
cloud();







// var tempo =0;

// function click(){

//   let bg = document.querySelector(".bg")

//   if(tempo % 2 == 0){

//     bg.setAttribute("fill","#0000ff");
//     ++tempo;
//     console.log(temp);
//   }
//   else{
//     bg.setAttribute("fill","#000000");
//     ++tempo;
//     console.log(tempo);

//   }



// }
// click()







// function marquee(){
//   let currentScroll = 0;
// let isScrollingDown = true;

// let tween = gsap.to(".marquee__part", {xPercent: -140, repeat: -1, duration: 2, ease: "linear"}).totalProgress(.5);

// gsap.set(".marquee__inner", {xPercent: -60});

// window.addEventListener("scroll", function(){
  
//   if ( window.pageYOffset > currentScroll ) {
//     isScrollingDown = true;
//   } else {
//     isScrollingDown = false;
//   }
   
//   gsap.to(tween, {
//     timeScale: isScrollingDown ? 1 : -1
//   });
  
//   currentScroll = window.pageYOffset
// });
// }

// marquee();






function lenis(){
  const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
}
lenis();
// -------------------------------------------------------

// gsap.registerPlugin(ScrollTrigger);

// gsap.registerPlugin(ScrollTrigger);








// let tl = gsap.timeLine({
//      default:{
//           ease:"none"
//      },
//      scrollTrigger:{
//           trigger:"#main",
//           pin:true,
//           scrub: true,
//           end: ()=> "+=" + "#main.offsetWidth",
//      }
// })


// tl.to(main ,{
//      xPercentage :-66
// })

// gsap.registerPlugin(ScrollTrigger);

// document.addEventListener('DOMContentLoaded', () => {

//     const sections = gsap.utils.toArray('section');

//     let scrollTween = gsap.to(sections, {
//         xPercent: -100 * (sections.length - 1),
//         ease: 'none',
//         scrollTrigger: {
//             trigger: '.wrapper',
//             pin: true,
//             scrub: 0.5,
//             snap: 1 / (sections.length - 1),
//             start: 'top top',
//             end: 3000,
//         }
//     })

// });