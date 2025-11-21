gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

    //------------------------------
    // Header animations
    //------------------------------
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


    //------------------------------
    // Initial sections fade-in (LOAD animation)
    //------------------------------
    const allSections = gsap.utils.toArray("main section");

    gsap.timeline({ delay: 1, defaults: { ease: "power3.out" } })
        .from(allSections, {
            opacity: 0,
            y: 40,
            duration: 1.1,
            stagger: 0.22
        });


    //------------------------------
    // Scroll animations for each section
    //------------------------------
    allSections.forEach(section => {

        // Title <h2>
        if (section.querySelector("h2")) {
            gsap.from(section.querySelector("h2"), {
                scrollTrigger: {
                    trigger: section,
                    start: "top 85%",
                    once: true
                },
                x: -120,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });
        }

        // Content inside the section
        gsap.from(
            section.querySelectorAll(
                ".entry, .skills-category, ul.cert-list li, ul.skills li, #references p, .institution, .date"
            ),
            {
                scrollTrigger: {
                    trigger: section,
                    start: "top 85%",
                    once: true
                },
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                delay: 0.2
            }
        );
    });


    //------------------------------
    // Skills Wave Animation (Bouncy + Nice)
    //------------------------------
    gsap.utils.toArray("ul.skills li").forEach((li, index) => {
        gsap.from(li, {
            scrollTrigger: {
                trigger: li,
                start: "top 90%",
                once: true
            },
            scale: 0.7,
            y: 40,
            opacity: 0,
            duration: 0.65,
            delay: index * 0.09,
            ease: "back.out(2)"
        });
    });

});
