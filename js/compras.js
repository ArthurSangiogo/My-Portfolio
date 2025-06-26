let compras = JSON.parse(localStorage.getItem('compras')) || []; //inicializa como vazia
function comprar(){ // Função para adicionar itens à lista de compras
    let continuar = true; // Variável para controlar o loop
    while(continuar){// Loop para continuar adicionando itens
        let item = prompt("Digite um item:"); // Solicita ao usuário um item para adicionar                                                                     
        if (item && item.trim() !== "") { // Verifica se o item não é vazio
            compras.push(item); // Adiciona o item à lista de compras
            }
            let resposta = prompt("Adicionar outro item? (s/n");// Pergunta se o usuário deseja adicionar outro item
            if (!resposta || resposta.toLowerCase() !== 's') continuar = false; // Se a resposta não for 's', encerra o loop
            }
            localStorage.setItem("compras", JSON.stringify(compras)); // Salva a lista de compras no localStorage
}


function atualizarLista(){  // Função para atualizar a lista de compras exibida
    const lista = document.getElementById("listaCompras"); // Obtém o elemento da lista de compras
    lista.innerHTML = ""; // Limpa a lista antes de atualizar 
    compras.forEach((item, i) => {  // Itera sobre cada item na lista de compras
        const li = document.createElement("li");    // Cria um novo elemento de lista
        li.textContent = `${i + 1}. ${item}`;  // Define o texto do item da lista
        lista.appendChild(li);  // Adiciona o item à lista no HTML 
    });     
}


function  limparLista() {
  compras = [];
  localStorage.removeItem("compras");
  atualizarLista();
}

window.addEventListener("DOMContentLoaded", atualizarLista);








 