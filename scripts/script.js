//array contendo as respostas corretas
//let corretas = [3,1,3,2,3];
let corretas = [];

//array para guardar as respostas que o usuário selecionou
let opcao_escolhida=[];

let quantidade_corretas=0;

//função que pega o numero da pergunta e o input escolhido dessa pergunta

function resposta(num_pergunta, selecionada){
    //guarda a resposta escolhida
    opcao_escolhida[num_pergunta] = selecionada.value;

    //o seguinte codigo é para por na cor branco o fundo dos inputs para quando escolher outra opção 
    //configura o id para selecionar a seção correspondente
    id="p" + num_pergunta;

    labels = document.getElementById(id).childNodes;

    labels[3].style.backgroundColor = "white";
    labels[5].style.backgroundColor = "white";
    labels[7].style.backgroundColor = "white";

    //muda a cor do label selecionado
    selecionada.parentNode.style.backgroundColor = "#02a9f7";

}
//perg1 [2,3,2,1]
//perg2 [3,2,3,1,2,3,1]
//perg3 [2,3,3,1,2,3]
//perg4 []
//perg5 [1,3,3,2,3,1,2]
//perg6 [3,3,2,2,1,3]
//perg7 [1,3,1,3,2,2]
//perg8 [3,3,2,1,2,1,3]
//perg9 [2,1,3,1,3,2]
//perg10 [2,2,1,3,1,2,1]
//perg11 [2,1,1,3,2,3]
//perg12 [2,3,1,3,3,2,1]
//perg13 [3,2,1,2,1,3,3]
//perg14 [2,2,1,3,2,1,3]
//perg15 [1,3,2,1,2,3]
//perg16 [3,3,2,1,2,1,1]
//perg17 [1,1,3,3,2,2,2]
var objt = { 
    gabaritos: [[2,3,2,1],[3,2,3,1,2,3,1],[2,3,3,1,2,3],[],[1,3,3,2,3,1,2],[3,3,2,2,1,3],[1,3,1,3,2,2],[3,3,2,1,2,1,3],[2,1,3,1,3,2],[2,2,1,3,1,2,1],[2,1,1,3,2,3],[2,3,1,3,3,2,1],[3,2,1,2,1,3,3],[2,2,1,3,2,1,3],[1,3,2,1,2,3],[3,3,2,1,2,1,1],[1,1,3,3,2,2,2]]
}

function corrigir(numero_da_pagina_de_perguntas){
        corretas = objt.gabaritos[numero_da_pagina_de_perguntas];
    quantidade_corretas=0;
        for(i=0; i < corretas.length; i++){
                if(corretas[i] == opcao_escolhida[i]){
                    quantidade_corretas++;
                }   

                let id = "p" + i;
                    let labels = document.getElementById(id).childNodes;
        
                    // destaca a resposta correta com a cor verde
                    if (corretas[i] == 1)
                        labels[3].style.backgroundColor = "#3ddc84";
                    if (corretas[i] == 2)
                        labels[5].style.backgroundColor = "#3ddc84";
                    if (corretas[i] == 3)
                        labels[7].style.backgroundColor = "#3ddc84";
        }
        document.getElementById("resultado").innerHTML = quantidade_corretas;
}