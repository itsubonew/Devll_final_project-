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
