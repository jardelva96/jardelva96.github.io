document.addEventListener('DOMContentLoaded', () => {
    // Simple animation for smooth scrolling
    document.querySelectorAll('.nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
