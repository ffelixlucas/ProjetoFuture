document.addEventListener('DOMContentLoaded', function() {
    var iframe = document.querySelector('.neon iframe');

    // Esperar até que o iframe esteja completamente carregado
    iframe.addEventListener('load', function() {
        // Aplicar o efeito de brilho após o carregamento completo do iframe
        var glow = document.querySelector('.glow');
        glow.style.display = 'block'; // Mostrar o elemento de brilho
    });
});
