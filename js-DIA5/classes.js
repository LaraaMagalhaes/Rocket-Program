
// Melhor forma de criar um objeto atualmente
class Pessoa{
    construtor(nome, email, idade, senha){
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
    }

    login(email, senha){
        if(this.email == email && this.senha == senha){
            console.log("seja bem vindo")
        }else{
            console.log("senha incorreta")
        }
    }
}

const pessoa = new Pessoa("Lara", "lara@gmail.com", "17", "abc123");// isso é um array
pessoa.login("lara@gmail.com", "abc123" );

// Mesmo sendo const eu consigo mudar os atributos sem ter um erro, como aqui:
pessoa.nome = "Cintia";
console.log(pessoa);
//Mas por ser const ele tem suas limitações, como por exemplo se eu tentar criar
//uma nova pessoa eu n consigo, da erro. ex:
//pessoa = new Pessoa("Lara", "lara@gmail.com", "17", "abc123");

//expliocação prática do pq:
let i = 2;
let j = i;
i ++;

console.log(i, j);

const felipe = new Pessoa(" felipe", "felipe@gmail", 25, "abc123");
const cintia = felipe;
cintia.nome = "cintia";

console.log(felipe.nome, cintia.nome);

//os objetos n guardam valores igual o i e j, eles guardam referencias.
//objetos criados a partir de outros sao o mesmo objeto

//para burlar isso vc pode usar assim 
const cintia = JSON.parse(JSON.stringify(felipe));
// O stringify transforma em texto e o parse destransforma e isso acaba 
// dividindo para dois em vez de 1

// Isso faz com q ao dar um console.log, felipe seja uma referencia da classe
//pessoa mas cintia nao. entao tentar fazer login por exemplo, daria erro para cintia
