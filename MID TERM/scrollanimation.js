document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(
        ".fade-in-up, .fade-in-left, .fade-in-right, .fade-in"
    );

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target); // Run once
            }
        });
    }, {
        threshold: 0.15 // Trigger when 15% visible
    });

    animatedElements.forEach(el => observer.observe(el));
});
