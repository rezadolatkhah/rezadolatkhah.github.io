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
    // Fade-in sections on page load
    //------------------------------
    const allSections = gsap.utils.toArray("main section");

    gsap.timeline({ delay: 0.8, defaults: { ease: "power3.out" } })
        .from(allSections, {
            opacity: 0,
            y: 40,
            duration: 1.1,
            stagger: 0.22
        });


    //------------------------------
    // Scroll-trigger per section
    //------------------------------
    allSections.forEach(section => {

        // Animate <h2>
        const h2 = section.querySelector("h2");
        if (h2) {
            gsap.from(h2, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 85%",
                    once: true
                },
                x: -80,
                opacity: 0,
                duration: 0.9,
                ease: "power3.out"
            });
        }

        // Animate normal content but EXCLUDE skills (to avoid double-animation & hiding)
        const items = section.querySelectorAll(
            ".entry, .skills-category, ul.cert-list li, #references p, .institution, .date"
        );

        if (items.length > 0) {
            gsap.from(items, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 85%",
                    once: true
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: "power3.out",
                delay: 0.2
            });
        }
    });


    //------------------------------
    // Skills Wave Animation (fixed)
    //------------------------------
    gsap.utils.toArray("ul.skills li").forEach((li, index) => {
        gsap.from(li, {
            scrollTrigger: {
                trigger: li.closest("section"), // ★ مهم — مشکل اپاسیتی 0 را کامل حل می‌کند
                start: "top 90%",
                once: true
            },
            scale: 0.7,
            y: 45,
            opacity: 0,
            duration: 0.55,
            delay: index * 0.09,
            ease: "back.out(2)"
        });
    });

});
