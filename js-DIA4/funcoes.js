


//Uma maneira moderna de repetir o mesmo código de maneira estruturada
function bhaskara(a, b, c){
    let delta = b * b -4 * a*c;

    if(delta < 0){
        return "N existem raizes reais" // esse return te manda pra fora da função se a condição
                                        // for true ele n realiza o resto do bloco da func
    }

    let x1 = (-b + Math.sqrt(delta))/ (2 *a) //esse math.sqrt é uma func da biblioteca math
    let x2 = (-b - Math.sqrt(delta))/ (2 *a)

    return {x1, x2};

}

console.log(bhaskara(1, -3, 2)) // o console.log tambem é uma função :)
console.log(bhaskara(3, 3, 8))
console.log(bhaskara(6, -3, 1))
console.log(bhaskara(1, 3, 0))




//Funções anônimas---------------------------------------------------------------------------
//função sem nome

//pode ser feita assim oouu
const mensagem = function(){
    console.log("ฅ^•ﻌ•^ฅ");
    console.log(new Date().toLocaleString());
}

//setInterval(mensagem, 2000);

// assim
setInterval(function(){
    console.log("ฅ^•ﻌ•^ฅ");
    console.log("MEAW")
}, 1000);


//Funções Arrow------------------------------------------------------------------------------
/*
setInterval(() => { // conhecida como lambida em outras linguagens
    console.log("ฅ^•ﻌ•^ฅ");
    console.log("Arrow")
}, 5000);
*/
const teste1 = function(){
    return this;
};

const teste2 = () => {
    return this;
};

console.log(teste1());
console.log(teste2());