const username = '{{name}}';
const usernameContainer = document.getElementById('username-container');
const textContainer = document.querySelector('.text-content-container');

// Crea le lettere animate
if (usernameContainer) {
    usernameContainer.innerHTML = username.split('').map(char =>
        `<span class="animated-letter">${char}</span>`
    ).join('');
}

// Gestione media
const imgEl = document.querySelector('.image-container img');
const videoEl = document.querySelector('.image-container video');
const videoSrc = '{{video}}';

if (videoSrc && videoSrc.length > 5) {
    videoEl.src = videoSrc;
    videoEl.volume = parseFloat('{{videoVolume}}') || 0.5;
    videoEl.style.display = 'block';
    if (imgEl) imgEl.style.display = 'none';
} else {
    videoEl.style.display = 'none';
    if (imgEl) imgEl.style.display = 'block';
}

// Fade-in dell'alert
setTimeout(() => {
    if (textContainer) {
        textContainer.style.visibility = 'visible';
        textContainer.style.opacity = '1';
    }
}, 2000);