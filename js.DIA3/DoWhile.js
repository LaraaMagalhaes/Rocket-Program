
// executa primeiro e pergunta dps

let i = 0;

//versao com while
while(i > 0 ){
    console.log("While: i > 0");
}

//mesma coisa so q com do while
do{
    console.log("Do while: i > 0 ")
} while (i > 0)

// isso acontece pq primeiro ele executa e dps pergunta, 
// entao ele fez uma vez, viu q n precisava e parou


//---------------------------------------------------------------
// oq acontece se eu colocar i++??
//versao com while
while(i > 0 ){
    console.log("While: i > 0");
    i++
}

//mesma coisa so q com do while
do{
    console.log("Do while: i > 0 ")
    i++
} while (i > 0)//MATA A EXECUÇÃO

// o while continua sem executar e o do while executa infinito
//(ATENÇÃP quase deu tela azul ATENÇÃO) 
// PRESTAR ATENÇÃO EM INFINITOS