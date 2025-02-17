/*
Vocês vão criar um sistema de análise de desempenho de uma equipe. 
 
A quantidade de membros da equipe fica de acordo com o gosto de vocês, 
desde que seja um mínimo de 3 pessoas. 
 
Cada pessoa receberá uma pontuação com base na quantidade de tarefas que forem 
completadas e, para considerar a nota final, deverão ser levados em conta os 
seguintes critérios:
 
1) Cada tarefa recebe uma pontuação de 0 a 10
2) o número de tarefas varia entre 5 e 10, por pessoa da equipe.
 
A pontuação final de cada membro é feita de acordo com a média ponderada. Ou seja, 
tarefas ímpares recebem peso 2, enquanto tarefas pares recebem peso 1. 
 
Caso a média ponderada de um membro seja maior que 8, ele recebe um bônus de 2 pontos. 
 
O sistema precisa retornar o nome e a média de cada pessoa do time, quem teve o 
melhor desempenho, e quem teve o pior desempenho.
*/

// primeiro a estrutura da equipe 
// serão 4 pessoas.
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


// Função para calcular a pontuação de um membro
function calcularPontuacao(tarefas) {
    let soma = 0;
    let pesos = 0;

    for (let i = 0; i < tarefas.length; i++) {
        const nota = tarefas[i];
        const peso = (i + 1) % 2 === 1 ? 2 : 1; // Tarefas ímpares têm peso 2, pares têm peso 1
        soma += nota * peso;
        pesos += peso;
    }

    const media = soma / pesos;
    const pontuacaoFinal = media > 8 ? media + 2 : media; // Bônus de 2 pontos se média > 8

    return pontuacaoFinal;
}

// Função principal
function analisarEquipe(equipe) {
    let melhorDesempenho = { nome: "", pontuacao: 0 };
    let piorDesempenho = { nome: "", pontuacao: Infinity };

    for (let membro of equipe) {
        const nome = membro[0]; // Nome do membro (primeiro elemento do array)
        const tarefas = membro.slice(1); // Tarefas do membro (todos os elementos após o nome)
        const pontuacao = calcularPontuacao(tarefas);

        console.log(`${nome}: ${pontuacao.toFixed(2)}`);

        // Verifica melhor desempenho
        if (pontuacao > melhorDesempenho.pontuacao) {
            melhorDesempenho = { nome: nome, pontuacao: pontuacao };
        }

        // Verifica pior desempenho
        if (pontuacao < piorDesempenho.pontuacao) {
            piorDesempenho = { nome: nome, pontuacao: pontuacao };
        }
    }


    console.log(`Melhor desempenho: ${melhorDesempenho.nome} com ${melhorDesempenho.pontuacao.toFixed(2)}`);
    console.log(`Pior desempenho: ${piorDesempenho.nome} com ${piorDesempenho.pontuacao.toFixed(2)}`);
}

// Executa a análise
analisarEquipe(equipe);



