// Crie um array para armazenar os nomes
let amigos = [];

// Implementa uma função para agregar amigos
function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    let nomeAmigo = document.getElementById('amigo');

    // Validar a entrada
    if (nomeAmigo.value == '') {
        // Se estiver vazio, exiba um alerta com a mensagem de erro
        alert('Por favor, insira um nome.');
    } else {
        // Se o valor for válido, adicione-o ao array que armazena os nomes dos amigos
        amigos.push(nomeAmigo.value);
        // Limpar o campo de entrada
        nomeAmigo.value = '';
        atualizarLista();
    }

}
