let arrayOfFriends = [];
let sorteados = []; 

function cleanInput() {
    let nome = document.querySelector("#amigo");
    nome.value = "";
}

function adicionarAmigo() {
    let nome = document.querySelector("#amigo").value.trim();

    if (nome.length === 0) {
        alert("Por favor, insira um nome.");
        return;
    }

    arrayOfFriends.push(nome);
    cleanInput();
    setName();
}

function setName() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    arrayOfFriends.forEach((amigo, index) => {
        let item = document.createElement("li");
        item.textContent = amigo;

        // Adiciona a funcionalidade de clique para remover o nome
        item.onclick = () => {
            arrayOfFriends.splice(index, 1);
            setName(); // Atualiza a lista após remover
        };

        item.style.cursor = "pointer";
        item.title = "Clique para remover";

        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (arrayOfFriends.length === sorteados.length) {
        alert("Todos os amigos já foram sorteados!");
        return;
    }

    let amigoSorteado;
    do {
        let indiceSorteado = Math.floor(Math.random() * arrayOfFriends.length);
        amigoSorteado = arrayOfFriends[indiceSorteado];
    } while (sorteados.includes(amigoSorteado)); // Garante que o sorteado não foi sorteado antes

    sorteados.push(amigoSorteado); // Adiciona o sorteado à lista de já sorteados

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado foi: ${amigoSorteado}`;
}

document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evita que o formulário seja enviado (caso esteja dentro de um <form>)
        adicionarAmigo();
    }
});