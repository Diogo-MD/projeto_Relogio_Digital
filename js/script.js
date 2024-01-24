updateClock();

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);

// Puxa os horários do sistema e insere nas div's do HTML
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById('horas').textContent = hours;
    document.getElementById('minutos').textContent = minutes;
    document.getElementById('segundos').textContent = seconds;

    // Se o horário for entre 6 e 17 o Background Color será azul claro
    // Se o horário for entre 18 e 5 o Background Color será azul escuro
    if (hours >= 18 || hours <= 5) {
        document.body.style.backgroundColor = '#010e18';
    } else {
        document.body.style.backgroundColor = '#aee1ff';
    }
}
