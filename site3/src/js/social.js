document.addEventListener('DOMContentLoaded', function() {
    // Инициализация социальных иконок
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
});