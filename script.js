document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio Loaded!");
    
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = "translateY(-5px)";
            card.style.transition = "0.3s";
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = "translateY(0)";
        });
    });
});