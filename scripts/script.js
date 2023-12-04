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

    //doy el color a label seleccionado
    selecionada.parentNode.style.backgroundColor = "#02a9f7";

}


function corrigir(numero_da_pagina_de_perguntas){

    switch (numero_da_pagina_de_perguntas){
        case 1:
            corretas = [2,3,2,1];
            break;
        case 2:
            corretas = [3,2,3,1,2,3,1];
            break;
        default:
            corretas = [];
            break;
    }

    quantidade_corretas=0;
        for(i=0; i < corretas.length; i++){
                if(corretas[i] == opcao_escolhida[i]){
                    quantidade_corretas++;
                }   

                let id = "p" + i;
                    let labels = document.getElementById(id).childNodes;
        
                    // destaca a resposta correta com a cor verde
                    if (corretas[i] == 1)
                        labels[3].style.backgroundColor = "green";
                    if (corretas[i] == 2)
                        labels[5].style.backgroundColor = "green";
                    if (corretas[i] == 3)
                        labels[7].style.backgroundColor = "green";
        }
        document.getElementById("resultado").innerHTML = quantidade_corretas;
}