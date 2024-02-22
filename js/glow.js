document.addEventListener('DOMContentLoaded', function() {
    var iframe = document.querySelector('.neon iframe');

    // Esperar até que o iframe esteja completamente carregado
    iframe.addEventListener('load', function() {
        // Aplicar o efeito de brilho após o carregamento completo do iframe
        var glow = document.querySelector('.glow');
        glow.style.display = 'block'; // Mostrar o elemento de brilho
    });
});

// Captura o evento de rolagem dentro do iframe
document.querySelector('.neon iframe').contentWindow.addEventListener('scroll', function(event) {
    var iframe = document.querySelector('.neon iframe');
    var scrollTop = iframe.contentWindow.pageYOffset || iframe.contentDocument.documentElement.scrollTop || iframe.contentDocument.body.scrollTop || 0;
    var scrollLeft = iframe.contentWindow.pageXOffset || iframe.contentDocument.documentElement.scrollLeft || iframe.contentDocument.body.scrollLeft || 0;

    // Se a rolagem estiver no topo ou no fundo do iframe
    if (scrollTop === 0 || scrollTop + iframe.clientHeight >= iframe.contentDocument.documentElement.scrollHeight) {
        // Impede a propagação da rolagem para a página principal
        event.preventDefault();
    }
});