/*
Crie um programa simples que simula um gerenciador de lista de compras. O usuário
poderá adicionar itens à lista, remover itens e visualizar a lista de compras. O programa
deve usar vetores (arrays) e funções para organizar o código.
Instalando e Usando o Prompt no Node.js:
Como estamos usando o Node.js, não temos o prompt() nativo do navegador. Para capturar
a entrada do usuário no terminal, podemos usar a biblioteca prompt-sync.
Passo 1: Instalar o prompt-sync
Abra o terminal na pasta do projeto e execute o seguinte comando:
npm install prompt-sync
Passo 2: Importar o módulo no código
No início do arquivo .js, importe o prompt-sync:
const prompt = require("prompt-sync")();
Agora podemos capturar a entrada do usuário com:
let nome = prompt("Digite seu nome: ");
console.log(`Olá, ${nome}!`);
Regras:
1. O programa deve ter um array chamado listaDeCompras que começa vazio.
2. Deve oferecer as seguintes opções ao usuário:
o Adicionar um item à lista.
o Remover um item da lista.
o Exibir os itens da lista.
o Sair do programa.
3. O programa deve rodar até que o usuário escolha sair.
4. As funções devem ser utilizadas para organizar as operações principais:
o adicionarItem(item): Adiciona um item ao array.
o removerItem(item): Remove um item do array (se existir).
o exibirLista(): Mostra todos os itens da lista no console.
Dicas:
. Use console.log() para exibir mensagens.
. Para manter o programa rodando, utilize um loop while e um switch-case para as
opções.
. Você pode pesquisar na internet como usar ou como fazer alguma parte do
programa, mas tente não usar IA para resolver o desafio, não engane a si mesmo.
*/

const prompt = require("prompt-sync")();

console.log("1 - ADC item")
console.log("2 - remover item")
console.log("3 - olhar lista")
console.log("4 - sair da lista")

let listaDeCompras = []

function adicionar(listaDeCompras){
    let item = prompt("Digite o nome do item: ");
    listaDeCompras.push(item);
    console.log("Adicionado com  sucesso");
}

function remover(listaDeCompras){
    let itemRemover = prompt("qual item vc deseja remover? ") //pergunta qual item
    let indice = listaDeCompras.indexOf(itemRemover); // pergunta pra lista qual o indice dessa palavra q foi dita
    listaDeCompras.splice(indice, 1); //remove o item do array
    console.log(itemRemover + " foi removido com sucesso.");
}

let escolha = Number(prompt("Escolha uma opção: "))
while(escolha !== 4){
    if(escolha == 1){
        adicionar(listaDeCompras);
    }
    else if(escolha == 2){
        remover(listaDeCompras);
    }
    else if(escolha == 3){
        console.log(listaDeCompras)

    }
    console.log("1 - ADC item");
    console.log("2 - remover item");
    console.log("3 - olhar lista");
    console.log("4 - sair da lista");

    escolha = prompt("Escolha uma opção: ");
}

console.log("ok, saindo");



