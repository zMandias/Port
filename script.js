// Espera o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão e o parágrafo pelo ID
    const botao = document.getElementById('meuBotao');
    const paragrafo = document.getElementById('meuParagrafo');

    // Adiciona evento de clique ao botão
    botao.addEventListener('click', function() {
        paragrafo.textContent = 'Você clicou no botão!';
    });
});