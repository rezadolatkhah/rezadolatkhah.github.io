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

    gsap.from(".contact-details p", {
        duration: 0.8,
        x: 200,
        opacity: 0,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.6
    });

    gsap.utils.toArray(".section").forEach(section => {
        gsap.from(section.querySelector("h2"), {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
            },
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });

        gsap.from(section.querySelectorAll(".entry, .skills-category, ul.cert-list li, ul.skills li, #references p"), {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
            },
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15, 
            ease: "power3.out",
            delay: 0.3
        });
    });


    gsap.utils.toArray("ul.skills li").forEach((li, i) => {
        gsap.from(li, {
            scrollTrigger: {
                trigger: li.parentElement,
                start: "top 85%",
            },
            scale: 0.8,
            y: 40,
            opacity: 0,
            duration: 0.6,
            delay: i * 0.08,
            ease: "back.out(1.7)"
        });
    });
});
});
