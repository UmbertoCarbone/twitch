window.addEventListener('onWidgetLoad', function (obj) {
    // Puntiamo ai dati dell'ultimo Cheer (Bit)
    const cheer = obj.detail.session['cheer-latest'];

    if (cheer && cheer.name) {
        updateUsername(cheer.name);
    }
});

window.addEventListener('onEventReceived', function (obj) {
    // Ascoltiamo l'evento 'cheer-latest'
    if (obj.detail.listener === 'cheer-latest') {
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