
/*
Vamos jogar dados?
 
O jogador inicia com 100 pontos, e pode ganhar ou perder pontos ao "jogar" 
um dado de 6 faces, de acordo com as regras abaixo:
 
1 - Se o resultado do dado for ímpar, o jogador recebe 10 pontos ok
2 - Se o resultado do dado for par, o jogador perde 5 pontos.ok
3 - Se a rodada for múltipla de 3, o jogador ganha 15 pontosok
4 - Se a rodada for múltipla de 4, o jogador perde 20 pontos
5 - Se a pontuação do jogador estiver negativa em qualquer momento, ele 
perde o dobro de pontos até a pontuação estar positiva
 
O jogo é composto por 20 rodadas, e o jogador ganha se ele chegar na 20ª 
rodada com uma pontuação igual ou superior a 50 pontos.
 
Vocês não podem usar arrays para a execução do desafio
Utilizem os conceitos estudados até o momento para executar
O cálculo da pontuação deverá ser exibido, assim como o número da rodada 
e o resultado do dado. A pontuação final deverá ser exibida na última rodada.
Poderá ser exibido em tela avisos de ganho e perda de pontos*/


let pontos = 100

for(let i = 0; i < 20; i++){

    let ladoDoDado = Math.floor(Math.random() * 6) + 1;
    console.log("Caiu no número: " + ladoDoDado)
    if(pontos < 0){
        if(ladoDoDado %2 !== 0){//se for impar
            pontos +=10
            console.log("Parabéns você ganhou 10 pontos, aqui sua pontuação atual: " + pontos)
        }else if(ladoDoDado %2 === 0){//se for par
            pontos -=5
            console.log("NOOOOO vc perdeu 5 pontos, aqui sua pontuação atual: " + pontos )
        }else if(ladoDoDado %3 === 0){//multiplo de 3
            pontos +=15
            console.log("Parabéns você ganhou 15 pontos, aqui sua pontuação atual: " + pontos)
        }else if(ladoDoDado %4 === 0){//multiplo de 4
            pontos -=20
            console.log("Parabéns você ganhou 15 pontos, aqui sua pontuação atual: " + pontos)
        }

    }else{
        if(ladoDoDado %2 !== 0){//se for impar
            pontos +=10
            console.log("Parabéns você ganhou 10 pontos, aqui sua pontuação atual: " + pontos)
        }else if(ladoDoDado %2 === 0){//se for par
            pontos -=5 *2
            console.log("NOOOOO vc perdeu 5 pontos, aqui sua pontuação atual: " + pontos )
        }else if(ladoDoDado %3 === 0){//multiplo de 3
            pontos +=15
            console.log("Parabéns você ganhou 15 pontos, aqui sua pontuação atual: " + pontos)
        }else if(ladoDoDado %4 === 0){//multiplo de 4
            pontos -=20 *2
            console.log("Parabéns você ganhou 15 pontos, aqui sua pontuação atual: " + pontos)
        }
    }
}

if(pontos > 0){
    console.log("Parabens hehe, ganhouuuu")
}else{
    console.log("perdeu")
}