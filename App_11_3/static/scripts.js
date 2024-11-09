// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.pop-out');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('fade-in');
        }, index * 200);
    });
});
