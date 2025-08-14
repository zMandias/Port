// Espera o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão e o parágrafo pelo ID
    const botao = document.getElementById('meuBotao');
    const paragrafo = document.getElementById('meuParagrafo');
    const musicaInput = document.getElementById('musicaInput');
    const musica = new Audio('relaxed-scene-made-with-Voicemode.mp3');
    musica.loop = true;
    musica.play(); 
});