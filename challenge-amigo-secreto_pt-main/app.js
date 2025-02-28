let listaAmigos = []; // Lista original de amigos
let listaSorteio = []; // Lista oculta para controle do sorteio
let sorteioIniciado = false; // Controla se o sorteio já começou

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // Remove espaços extras

    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }
    if (listaAmigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    listaAmigos.push(nome);
    listaSorteio.push(nome); // Copia para a lista de sorteio oculta
    atualizarLista();
    input.value = ""; // Limpa o campo de entrada
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de adicionar os itens

    listaAmigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (!sorteioIniciado && listaSorteio.length < 3) {
        alert("Adicione pelo menos três nomes antes de sortear!");
        return;
    }

    sorteioIniciado = true; // O sorteio foi iniciado

    if (listaSorteio.length === 0) {
        alert("Todos os amigos já foram sorteados!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaSorteio.length);
    let nomeSorteado = listaSorteio[indiceSorteado];

    // Remove apenas da lista oculta, sem afetar a tela
    listaSorteio.splice(indiceSorteado, 1);

    // Exibe o resultado do sorteio
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 Amigo Secreto: <strong>${nomeSorteado}</strong> 🎉</li>`;
}

function limparLista() {
    listaAmigos = []; // Zera a lista original
    listaSorteio = []; // Zera a lista de sorteio oculta
    sorteioIniciado = false; // Reinicia o controle do sorteio
    atualizarLista(); // Atualiza a exibição
    document.getElementById("resultado").innerHTML = ""; // Limpa o resultado do sorteio
}