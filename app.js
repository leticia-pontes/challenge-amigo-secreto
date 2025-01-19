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

// Função para criar uma imagem de botão
function criarImagemBotao(nomeDoBotao, caminhoDaImagem) {
    const botao = document.createElement('img');
    botao.src = caminhoDaImagem;
    botao.alt = nomeDoBotao;
    botao.style.cursor = 'pointer';
    botao.style.marginLeft = '10px';
    botao.style.height = '15px';
    return botao;
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
        let botaoExcluir = criarImagemBotao('Excluir', 'assets/excluir.png');

        botaoExcluir.addEventListener('click', ((indice) => {
            return () => {
                if (confirm("Você tem certeza que deseja excluir este amigo da lista?")) {
                    removerAmigoDaLista(indice)
                }
            };
        })(contador));
        
        nome.innerHTML = amigos[contador];
        nome.appendChild(botaoExcluir);
        // Adicionar elementos à lista
        listaAmigos.append(nome);
    }
}

// Implementa uma função para remover um amigo da lista, para evitar sortear o mesmo nome
function removerAmigoDaLista(indiceDoNome) {
    if (indiceDoNome != -1) {
        amigos.splice(indiceDoNome, 1);
    }
    atualizarLista();
}

// Implementa uma função para sortear os amigos
function sortearAmigo() {
    // Validar que há amigos disponíveis
    if (amigos.length > 1) {
        let listaAmigos = document.getElementById('listaAmigos');
        let resultado = document.getElementById('resultado');
        listaAmigos.innerHTML = '';
        resultado.innerHTML = '';

        // Desativa o botão "Sortear amigo" para impedir sobreposição
        botaoSortear.setAttribute('disabled', true);

        // Gerar um índice aleatório
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        // Obter o nome sorteado
        let nomeSorteado = amigos[indiceAleatorio];
        
        // Mostrar o resultado
        resultado.innerHTML = `O amigo secreto sorteado é: ${nomeSorteado}`;
        removerAmigoDaLista(indiceAleatorio);

        setTimeout(function() {
            let resposta = confirm('Deseja sortear outro amigo?');
            if (resposta) {
                resultado.innerHTML = '';
                sortearAmigo();    
            } else {
                botaoSortear.removeAttribute('disabled');
            }
        }, 1500);
    } else {
        alert('Por favor, adicione pelo menos 2 amigos para sortear.');
        // Garante que o botão esteja habilitado, caso reste 1 nome não sorteado, para que o sorteio possa acontecer de novo
        botaoSortear.removeAttribute('disabled');
        atualizarLista();
    }
}

function limparLista() {
    amigos = [];
    atualizarLista();
}
