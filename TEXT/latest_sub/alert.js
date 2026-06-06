window.addEventListener('onWidgetLoad', function (obj) {
    // Cambiato da 'follower-latest' a 'subscriber-latest'
    const subscriber = obj.detail.session['subscriber-latest'];

    // Aggiorniamo il controllo per puntare ai dati del subscriber
    if (subscriber && subscriber.name) {
        updateUsername(subscriber.name);
    }
});

window.addEventListener('onEventReceived', function (obj) {
    // Cambiato il listener per ascoltare l'evento 'subscriber-latest'
    if (obj.detail.listener === 'subscriber-latest') {
        updateUsername(obj.detail.event.name);
    }
});

function updateUsername(username) {
    const container = document.getElementById('username-container');
    container.innerHTML = '';

    for (let i = 0; i < username.length; i++) {
        const span = document.createElement('span');
        span.className = 'animated-letter';
        span.innerText = username[i];
        span.style.animationDelay = (i * 0.1) + 's';
        container.appendChild(span);
    }
}