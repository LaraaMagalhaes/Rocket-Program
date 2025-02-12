
//Criar uma calculadora de impostos

//A calculadora precisa conter 3 variáveis: uma que recebe um preço de um
//produto(em decimal, por favor), uma que informe se o produto tem direito
//a desconto (desconto de 10%),
//e o ICMS (que pode variar entre 12 e 25%) 
//O ICMS deverá ser calculado após o produto receber (ou não desconto). 

//O progama deverá retornar o valor do produto original, se ele teve 
//desconto, o valor do produto com desconto 
// e o valor do produto com o imposto aplicado. 
//Pra tornar as coisas mais interessantes, como o valor do imposto é 
//variável, vamos brincar de loteria e 
// deixar o valor do imposto randômico (entre os valores informados.... 
// 12 a 25%)

let precoProduto = 585.00
console.log("preço original: " + precoProduto);

let valor = 1
if(valor == true ){
    precoProduto = precoProduto - precoProduto*0.1 ;
    console.log("tem desconto");
    console.log(precoProduto);
} else{
    console.log("Nao tem desconto")
}

let imposto = Math.floor(Math.random() * (25 - 12) + 12);
let precoFinal = ((imposto * precoProduto)/100) + precoProduto

console.log("valor do ICMS: " + imposto );
console.log(precoFinal);



