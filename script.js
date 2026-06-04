document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            alert(`მადლობა ${name}, შეტყობინება გაიგზავნა!`);
            form.reset();
        });
    }

    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = "#ff4757";
        });
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = "rgba(255,255,255,0.1)";
        });
    });
});
