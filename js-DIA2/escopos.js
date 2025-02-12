

let variavelGlobal = 2

if(true){
    variavelGlobal++;
    console.log("Global(if): "+ variavelGlobal);

    let variavelLocal = 2;
    console.log("local (if): " + variavelLocal);  
}

console.log("GLOBAL: " +  variavelGlobal);
console.log("LOCAL: " + variavelLocal); // vai da erro pois essa variável so existe dentro do if
// para printar uma variável fora do if eu preciso declarar ela fora do if. 
