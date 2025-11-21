gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

    
    gsap.from("header .profile-photo", {
        duration: 1.2,
        y: -100,
        opacity: 0,
        ease: "elastic.out(1,0.6)"
    });

    gsap.from("header h1", {
        duration: 1,
        x: -200,
        opacity: 0,
        ease: "power3.out",
        delay: 0.3
    });

    
    gsap.from(".job-title", {
        duration: 0.9,
        y: 40,
        opacity: 0,
        ease: "power3.out",
        delay: 0.5
    });

    gsap.from(".contact-details p", {
        duration: 0.8,
        x: 200,
        opacity: 0,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.6
    });

    
    const allSections = gsap.utils.toArray("main section");

    gsap.timeline({
        defaults: { ease: "power4.out" },
        delay: 1.0 
    })
    .from(allSections, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.28,        
    })
    .from(allSections, {
        scale: 0.95,
        duration: 1.4,
        stagger: 0.28,
        ease: "power2.inOut"
    }, "-=1.6"); 


    allSections.forEach(section => {
        
        gsap.from(section.querySelector("h2"), {
            scrollTrigger: {
                trigger: section,
                start: "top 82%",
                once: true 
            },
            x: -120,
            opacity: 0,
            duration: 1.1,
            ease: "power3.out"
        });


        gsap.from(section.querySelectorAll(".entry, .skills-category, ul.cert-list li, ul.skills li, #references p, .institution, .date"), {
            scrollTrigger: {
                trigger: section,
                start: "top 82%",
                once: true
            },
            y: 70,
            opacity: 0,
            duration: 0.9,
            stagger: 0.18,
            ease: "power3.out",
            delay: 0.25
        });
    });


    gsap.utils.toArray("ul.skills li").forEach((li, i) => {
        gsap.from(li, {
            scrollTrigger: {
                trigger: li.parentElement,
                start: "top 85%",
                once: true
            },
            scale: 0.7,
            y: 50,
            opacity: 0,
            duration: 0.75,
            delay: i * 0.09,
            ease: "back.out(2.0)"  
        });
    });
});
