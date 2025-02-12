

//Até o momento, a pessoa poderia ganhar um desconto randomicamente (ou não). Agora, o comprador pode colocar um cupom "PROMO15",
// que garante 15% de desconto no valor do produto. A pessoa pode colocar o código OU ganhar o desconto. 
 
//Vamos também inserir questão de frete para o envio da compra. O comprador precisa colocar o estado em que ele está. Se for de SP, 
//o frete custa R$10,00. Se for do RJ, o frete é R$20,00 e, para os demais estados, o frete é R$30,00

// declaração do valor do produto 
let precoProduto = 1150.00
console.log("preço original: " + precoProduto);

// Código para saber o desconto
let cupom = "PROMO";
if( cupom == "PROMO15" && precoProduto >=1000 ){
    precoProduto = precoProduto - precoProduto*0.15 ;
    console.log("tem desconto de 20%");
    console.log("valor com desconto: " + precoProduto);
}
else if( precoProduto > 500 && precoProduto < 1000){
    precoProduto = precoProduto - precoProduto*0.10 ;
    console.log("tem desconto de 10%");
    console.log("valor com desconto: " + precoProduto);
}
else{
    console.log("Infelizmente vc nao está adapto a descontos :/")
}

// Parte de frete 
let estado = "Rio de janeiro"
let valorFrete 
if(estado == "São paulo"){
    console.log("O frete total será 10 reais");
    valorFrete = 10
}else if(estado == "Rio de janeiro"){
    console.log("O frete total será 20 reais");
    valorFrete = 20
}else{
    console.log("Seu frete será 30 reais");
    valorFrete = 30
}

// declaraçao dos impostos 
let imposto = Math.floor(Math.random() * (25 - 12) + 12);
let precoFinal = ((imposto * precoProduto)/100) + precoProduto + valorFrete

console.log("valor do ICMS: " + imposto );
console.log(precoFinal);