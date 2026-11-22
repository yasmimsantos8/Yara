// Gerar Partículas Douradas Flutuantes no Fundo
window.addEventListener('DOMContentLoaded', () => {
    const bg = document.getElementById('bgAnimation');
    const particleCount = 24;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const size = Math.random() * 6 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        particle.style.animationDuration = `${Math.random() * 8 + 7}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;

        bg.appendChild(particle);
    }
});

// Máscara Automática de Telefone / WhatsApp
document.getElementById('telefone').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 6) {
        value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
        value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
        value = `(${value}`;
    }
    e.target.value = value;
});

// Validação e envio do cadastro
function handleCadastro(event) {
    event.preventDefault();

    const senhaInput = document.getElementById('senha').value;
    const msgErro = document.getElementById('msgErro');
    const form = document.getElementById('cadastroForm');
    const msgSucesso = document.getElementById('msgSucesso');

    msgErro.style.display = 'none';
    msgErro.textContent = '';

    if (senhaInput.length < 6) {
        msgErro.textContent = 'A senha deve conter no mínimo 6 caracteres para sua segurança.';
        msgErro.style.display = 'block';
        return;
    }

    form.style.opacity = '0.2';
    form.style.pointerEvents = 'none';
    msgSucesso.style.display = 'block';

    // Vai direto para a loja após 2 segundos
    setTimeout(() => {
        window.location.href = 'loja.html';
    }, 2000);
}