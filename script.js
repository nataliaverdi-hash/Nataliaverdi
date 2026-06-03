// Aguarda o documento HTML carregar completamente
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona os elementos do HTML
    const botao = document.getElementById('btn-action');
    const mensagem = document.getElementById('message');

    // Adiciona o evento de clique ao botão
    botao.addEventListener('click', () => {
        // Altera o estilo para exibir a mensagem oculta
        if (mensagem.style.display === 'block') {
            mensagem.style.display = 'none';
            botao.textContent = 'Clique Aqui';
        } else {
            mensagem.style.display = 'block';
            botao.textContent = 'Ocultar';
        }
    });

});
