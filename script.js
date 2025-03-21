// Create a halo element
const halo = document.createElement('div');
halo.style.position = 'absolute';
halo.style.width = '750px';
halo.style.height = '750px';
halo.style.borderRadius = '50%';
halo.style.pointerEvents = 'none';
halo.style.background = 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)';
halo.style.transition = 'transform 0.2s, opacity 0.2s';
halo.style.transform = 'translate(-43%, -43%)'; // Center the halo
document.body.appendChild(halo);

document.addEventListener('mousemove', (e) => {
    halo.style.left = `${e.pageX - 75}px`;
    halo.style.top = `${e.pageY - 75}px`;
});

document.addEventListener('DOMContentLoaded', function() {
    const experiences = document.querySelectorAll('.experience');
    experiences.forEach(function(experience) {
        experience.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            if (url) {
                window.open(url, '_blank');
            }
        });
    });
});
