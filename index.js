document.querySelector(".wave")
.animate(
    {
        borderRadius:[
            "70% 60% 50% 70%/-70% -50% -70% -60%",
            "70% 30% 80% 60%/60% 70% 80% 90%",
            "80% 80% 70% 40%/30% 50% 40% 80%"]
    },
    {
        iterations:Infinity,
        direction:"alternate",
        duration:6500
    }
);

const text1 = document.querySelector('h1')
const text2 = document.querySelector('header p')
const TimeLine = gsap.timeline()

TimeLine

.from(text1,{duration: 1.8, y: -100, autoAlpha: 0, ease:"power2.out",scrub: true})
.from(text2,{duration: 2.0, x: 0, autoAlpha: 0, scrub: true})

window.addEventListener("load", function(){
gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections,{
    xPercent: -100 * (sections.length -1),
    ease:"none",
    scrollTrigger:{
        trigger:".container",
        pin:true,
        scrub: 0.5,
        snap: 1 /(sections.length -1),
        end: "+=3000",
    }
    });
});

const bp = document.querySelector('.bp');
const scrollTrigger = {
    trigger:'.bp',
    start:"top",
    end:"bottom 30%",
    ease: Power3.out,
    scrub:0.7,
    // anticipatePin: 1
};
gsap.to(bp,{
    scrollTrigger,
    scale:0.6,
    xPercent:-93,
    yPercent:4
  
});

const ap = document.querySelector('#test');
const scrollTrigger2 = {
    trigger: ap,
    start:"top",
    end:"bottom 30%",
    ease: Power3.out,
    scrub:0.7,
    onEnter: () => console.log("PEEKABOO!")
};
gsap.to(ap,{
    scrollTrigger:scrollTrigger2,   
    scale:0.6,
    xPercent:106,
    y:-680,
    
});
// gsap.set(bp,{
//     y: 50,
//     opacity: 0,
//     duration: 1,
//     ease: 'power3.out',
//     overwrite: 'auto',
// });

// ScrollTrigger.create({
//     trigger: '.bp',
//     start: 'top 30%',
//     end: 'bottom 20%',
//     onEnter: () => gsap.to(bp,{
//         y: -50,
//         opacity: 0,
//         stagger:0.2,
//     })


// gsap.from(".bp img",{
//     duration:1.2,
//     autoAlpha: 0,
//     y:20,
//     scale:0.2,
//     scrollTrigger:{
//         trigger:".bp img",
//         scrub: true,
//     }
// });
// ScrollTrigger.create({
//     trigger:".bp",
//     // start: "top 20%",
//     // end: "bottom %",
//     pin: true,
   
//     // duration: 1.2,
//     markers: true
// })

// const img2 = document.querySelector('.panel2')
// const img1 = document.querySelector('.panel1')
// TimeLine.to()


// ScrollTrigger.create({
//     trigger:'.sections',
//     pin:'.top-text',
//     start:'top bottom',
//     end:'bottom top',
//     markers: true
// })




// const src = [
//     "./images/alexis-chloe-XPnL0v_S6Mk-unsplash.jpg",
//     "./images/bouquets1.jpeg",
// ];

// const titles = [
//     "Plants / Planters",
//     "Bouquets",
// ];

// ScrollTrigger.create({
//     trigger:'.panel',
//     pin:'.top-text',
//     start:'top',
//     end:'bottom',
//     markers: true
// })

// const panels= document.querySelectorAll('.panel')
// panels.forEach((panel,index) => {

//     // console.log(index);
//     ScrollTrigger.create({
//         trigger: ".new",
//         start:'top',
//         end: 'bottom',
//         onEnter:() => {
//             gsap.set('.top-text-img',{
//                 attr: { src: src[index]}
//             })
//             gsap.set('.panel1 h2',{
//                 innText: titles[index]
//             })
//         },
//         onEnterBack: () =>{
//             gsap.set('.top-text-img',{
//                 attr: { src: src[index]}
//             })
//             gsap.set('.top-text h2',{
//                 innText: titles[index]
//             })
//         }
//     })
// })



