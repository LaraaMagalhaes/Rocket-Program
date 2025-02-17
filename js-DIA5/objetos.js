console.log(typeof 1);
console.log(typeof "a");
console.log(typeof true);
console.log(typeof []);


//Objeto é uma forma de guardar dados de uma forma organizada
const pessoa = {};

pessoa.nome = "Lara"
pessoa.email = "lara@gmail.com"
pessoa.senha = "123"

console.log(pessoa);
console.log(pessoa.email);

console.log(console);

// pessoa tem valores, logo, é uma propriedade
// console tem funções, logo, é um método//log por exemplo é uma função do objeto console

pessoa.andar = function(){
    console.log(`${this.nome} está andando`)
};
pessoa.andar()

//outra forma de dar parametros a um objeto

const carro = {
    modelo: "Argo",
    marca: "Fiat",
    portas: 4,
    economico: true,
    andar(){
        console.log(`${this.marca} ${this.modelo} está andando`)
    },
    freiar: function(){
        console.log(`${this.marca} ${this.modelo} está freiando`) 
    }
}
carro.andar();
carro.freiar();

console.log(carro.marca);






