
// Formas de inicializar arrays

//1°
let predio = [];

predio[0] = "pedro"
predio[1] = "maria "
predio[2] = "fernando"
predio[3] = "felipe"
predio[4] = "luis"
predio[5] = "raquel"
predio[6] = "louise"
predio[7] = "lucas"

console.log(predio);
console.log(predio[3]);


//2° ---------------------------------------------------------------------------------------
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(numeros);
console.log(numeros[5]);


//3° ---------------------------------------------------------------------------------------
let lista = new Array();
//pode colocar dentro da chaves mas esse .push funciona para adc em qualquer array
lista.push("abacaxi")
lista.push("mamao")// se perceber esse n precisa saber a posição, é mais flexivel 

console.log(lista);


// Aplicação prática -----------------------------------------------------------------------
let teste = [];
for(let i = 0; i<10; i++){
    teste[i] = i + 1
    //teste.push(i + 1)
}

console.log(teste);


let anna = new Array();
anna.push("Anna")
anna.push(7, 6, 8, 5, 9)

let julia = new Array();
julia.push("julia")
julia.push(9, 8, 10, 7, 8, 9)

let debora = new Array();
debora.push("debora")
debora.push(5, 6, 7, 6, 5)

let luisa = new Array();
luisa.push("luisa")
luisa.push(1, 2, 3, 7, 4, 9, 6, 8)

let equipe = new Array(anna, julia, debora, luisa)


 console.log(equipe[0])
 console.log(equipe[1])
 console.log(equipe[2])
 console.log(equipe[3])