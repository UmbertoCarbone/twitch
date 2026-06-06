window.addEventListener('onWidgetLoad', function (obj) {
    // Cerchiamo i dati nello storico
    const followers = obj.detail.session['follower-latest'];

    // Se c'è un nome, aggiorniamo. Se non c'è, non facciamo nulla (rimane vuoto)
    if (followers && followers.name) {
        updateUsername(followers.name);
    }
});

window.addEventListener('onEventReceived', function (obj) {
    if (obj.detail.listener === 'follower-latest') {
        updateUsername(obj.detail.event.name);
    }
});

function updateUsername(username) {
    const container = document.getElementById('username-container');
    container.innerHTML = ''; // Pulisce il contenitore

    // Crea le lettere animate
    for (let i = 0; i < username.length; i++) {
        const span = document.createElement('span');
        span.className = 'animated-letter';
        span.innerText = username[i];
        span.style.animationDelay = (i * 0.1) + 's';
        container.appendChild(span);
    }
}