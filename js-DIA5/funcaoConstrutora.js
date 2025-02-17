
//funções construtoras: permite que o objeto seja criado de maneira
//personalizada
function Pessoa(nome, email, idade, senha){
    this.nome = nome;
    this.email = email;
    this.idade = idade;
    this.senha = senha;
    this.maiiorIdade = true;

    if(this.idade <= 12){
        throw new Error('Menor de 13 anos nopodi') // lança um erro
    }
    if(this.maiiorIdade < 18){
        this.maiiorIdade = false
    }

    this.login = function(email, senha){
        if(this.email == email && this.senha == senha){
            console.log("seja bem vindo")
        }else{
            console.log("senha incorreta")
        }
    }
}

const pessoa1 = new Pessoa("Lara", "lara@gmail.com", "17", "abc123")

console.log(pessoa1);

pessoa1.login("lara@gmail.com", "abc123" )
