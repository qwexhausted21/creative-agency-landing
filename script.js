document.addEventListener('DOMContentLoaded', () => {
    
    // Анимация появления элементов портфолио при скролле
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Применяем к каждому проекту в сетке
    document.querySelectorAll('.work-item').forEach(item => {
        observer.observe(item);
    });

});