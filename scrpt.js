document.addEventListener("DOMContentLoaded", () => {
    
    const navLinks = document.querySelectorAll(".nav-item, .transition-link");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); 
            
            const targetUrl = link.getAttribute("href") || link.getAttribute("data-href");
            
            if (!targetUrl || targetUrl === "#") return;
 
            document.body.classList.add("fade-out-left");
 
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 600); 
        });
    });

    const magneticBtn = document.querySelector(".magnetic-btn");
    if (magneticBtn) {
        magneticBtn.addEventListener("mousemove", (e) => {
            const bounds = magneticBtn.getBoundingClientRect();
            const x = e.clientX - bounds.left - bounds.width / 2;
            const y = e.clientY - bounds.top - bounds.height / 2;
            magneticBtn.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px) scale(1.02)`;
            
            const glare = magneticBtn.querySelector(".btn-glare");
            if (glare) {
                glare.style.left = `${e.clientX - bounds.left}px`;
                glare.style.top = `${e.clientY - bounds.top}px`;
            }
        });

        magneticBtn.addEventListener("mouseleave", () => {
            magneticBtn.style.transform = `translate(0px, 0px) scale(1)`;
        });
    }

    window.addEventListener("mousemove", (e) => {
        const xRatio = e.clientX / window.innerWidth;
        const yRatio = e.clientY / window.innerHeight;

        const orb1 = document.querySelector(".orb-1");
        const orb2 = document.querySelector(".orb-2");
        const orb3 = document.querySelector(".orb-3");

        if (orb1) orb1.style.transform = `translate(${xRatio * 50}px, ${yRatio * 50}px)`;
        if (orb2) orb2.style.transform = `translate(${xRatio * -60}px, ${yRatio * -40}px)`;
        if (orb3) orb3.style.transform = `translate(${xRatio * 30}px, ${yRatio * -70}px)`;
    });

    const serviceCards = document.querySelectorAll(".interactive-tilt");
    serviceCards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty("--mouse-x", `${(x / rect.width) * 100}%`);
            card.style.setProperty("--mouse-y", `${(y / rect.height) * 100}%`);
            
            const rotateX = ((y / rect.height) - 0.5) * -12;
            const rotateY = ((x / rect.width) - 0.5) * 12;
            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = `rotateX(0deg) rotateY(0deg) translateY(0px)`;
        });
    });
});