document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email-input');
    const btnSeguinte = document.getElementById('btn-seguinte');

    emailInput.addEventListener('input', function() {
        if (emailInput.value.trim() !== '') {
            btnSeguinte.classList.add('active'); // Ativa o botão
            btnSeguinte.disabled = false; // Habilita o botão
        } else {
            btnSeguinte.classList.remove('active'); // Desativa o botão
            btnSeguinte.disabled = true; // Desativa o botão
        }
    });
});

document.getElementById('criar-conta').addEventListener('click', function() {
    window.location.href = 'https://encurtador.com.br/jSveO';
});
