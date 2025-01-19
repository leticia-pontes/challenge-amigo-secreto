// Crie um array para armazenar os nomes
let amigos = [];
let botaoSortear = document.getElementById('botaoSortear');

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

// Implementa uma função para atualizar a lista de amigos
function atualizarLista() {
    // Obter o elemento da lista
    let listaAmigos = document.getElementById('listaAmigos');

    // Limpar a lista existente
    listaAmigos.innerHTML = '';

    // Use um loop for para percorrer o array amigos e criar elementos de lista (<li>) para cada nome
    for (contador = 0; contador < amigos.length; contador++) {
        // Para cada amigo, crie um novo elemento de lista
        let nome = document.createElement('li');
        nome.innerHTML = amigos[contador];
        // Adicionar elementos à lista
        listaAmigos.append(nome);
    }
}

// Implementa uma função para remover um amigo da lista, para evitar sortear o mesmo nome
function removerAmigoDaLista(nomeDoAmigo) {
    let indiceDoNome = amigos.indexOf(nomeDoAmigo);
    if (indiceDoNome != -1) {
        amigos.splice(indiceDoNome, 1);
    }
}

// Implementa uma função para sortear os amigos
function sortearAmigo() {
    // Validar que há amigos disponíveis
    if (amigos.length > 1) {
        // Desativa o botão "Sortear amigo" para impedir sobreposição
        if (!botaoSortear.disabled) {
            botaoSortear.setAttribute('disabled', true);
        }

        // Gerar um índice aleatório
        let indiceAleatorio = parseInt(Math.random() * amigos.length);

        // Obter o nome sorteado
        let nomeSorteado = amigos[indiceAleatorio];
        
        // Mostrar o resultado
        listaAmigos.innerHTML = '';
        
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `O amigo secreto sorteado é: ${nomeSorteado}`;
        
        removerAmigoDaLista(nomeSorteado);

        setTimeout(function() {
            let resposta = confirm('Deseja sortear outro amigo?');
            
            if (resposta) {
                resultado.innerHTML = '';
                setTimeout(function() {
                    sortearAmigo();
                }, 500);
            }
        }, 3000);
    } else {
        alert('Por favor, adicione pelo menos 2 amigos para sortear.');
        atualizarLista();
    }
}
