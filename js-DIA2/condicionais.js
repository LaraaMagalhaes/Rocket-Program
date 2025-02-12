

//IF, ELSE E ELSE IF
let nota = 6;

if(nota >= 6){
    console.log("O aluno passou.");
}
else if (nota >= 5){
    console.log("Esta de recuperação.");
}
else {
    console.log("O aluno ta reprovado");
}



let pais = "Japão";

if (pais == "brasil") {
    console.log("brasileiro");
} 
else if (pais == "Japao" || pais == "Japão"){
    console.log("japonês");
} 
else if (pais == "Estados Unidos") {
    console.log("americano ou estadunidense");
} 
else if (pais == "China") {
    console.log("chinês");
} 
else {
    console.log("Não sei a nacionalidade");
}




//switch

let origem = "brasil";

switch(origem){
    case "brasil":
        console.log("brasileiro");
        break; // sem o break ele vai fazer os outros tambem, entao se o primeiro tiver certo ele vai printar todos os consoles
    
    case "JAPAO": // vai executar o bloco abaixo da mesma forma
    case "japao":
    case "japun":
    case "JAPAN":
        console.log("japones");
        break;
    
    case "eua":
        console.log("estadunidense");
        break;
    
    case "china":
        console.log("chines");
        break;
    
    default:
        console.log("n sei a nacionalidade");
        break;
}


