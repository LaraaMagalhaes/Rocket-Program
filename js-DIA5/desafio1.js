/*
Crie um programa simples que permite ao usuário gerenciar um cadastro de 
pessoas.
Cada pessoa terá um nome, idade e e-mail armazenados como um objeto 
dentro de um array. O usuário poderá adicionar, remover e listar 
os cadastros.
Regras:
1. O programa deve armazenar os usuários em um array de objetos, 
onde cada objeto representa uma pessoa com as propriedades:
o nome
o idade
o email
2. O usuário poderá escolher entre as seguintes opções:
o Adicionar um novo usuário.
o Remover um usuário pelo email.
o Listar todos os usuários cadastrados.
o Sair do programa.
3. O programa deve rodar até que o usuário escolha sair.
4. Não pode haver mais de um usuário com o mesmo e-mail.
*/
const prompt = require("prompt-sync")();



console.log("Digite 1 para adicionar: ");
console.log("Digite 2 para remover: ");
console.log("Digite 3 para listar: ");
console.log("Digite 4 para Sair: ");

/*
const pessoa = {
    nome: prompt("nome do usuário: "),
    idade: prompt("idade do usuário: "),
    email: prompt("email do usuário: "),
}*/

function criarPessoas(){
    const nome = prompt("nome do usuário: ")
    const idade = prompt("idade do usuário: ")
    const email = prompt("email do usuário: ")

    const pessoa = {nome, email, idade}
    return pessoa;
}

let listaDePessoas = []

function adicionar(pessoa){
    listaDePessoas.push(pessoa)
    console.log(`${pessoa.nome} adicionado com sucesso`)
}

function remover(pessoa){
    let pessoaRemover = prompt("Digite o email da pessoa que vc deseja remover: ")
    let indice = listaDePessoas.findIndex(p => p.email === pessoaRemover);
    if (indice !== -1) {
        const removido = listaDePessoas.splice(indice, 1)[0];
        console.log(`${removido.email} removido com sucesso.`);
      } else {
        console.log("Email não encontrado.");
      }
}



let escolha = Number(prompt("Digite sua escolha: "))
while(escolha !== 4){
    if(escolha === 1){
        const novaPessoa = criarPessoas();
        adicionar(novaPessoa);
    }
    else if(escolha === 2){
        remover();
    }
    else if(escolha === 3){
        console.log(listaDePessoas)
    }
    escolha = Number(prompt("Digite sua escolha: "));
}
console.log("saindo");










