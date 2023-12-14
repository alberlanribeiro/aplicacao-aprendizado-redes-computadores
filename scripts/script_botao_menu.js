
var dropdown = window.document.querySelector(".dropdown");


function botao_menu(){
    document.querySelector(".div-header").style.display = "block";
    document.querySelector(".botao").style.display = "none";
    
    dropdown.innerHTML += '<svg class="botao-home" onclick="voltar_pro_home()" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" style="fill: #CCE7F2;transform: ;msFilter:;"><path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path></svg>'
    dropdown.innerHTML += '<p><a href="../../paginas/pagina1/pagina1.html">O que é uma rede de computadores?</a></p>'
    dropdown.innerHTML += '<p><a href="../../paginas/pagina2/pagina2.html">O que são hospedeiros (hosts)?</a></p>'
    dropdown.innerHTML += '<p><a href="../../paginas/pagina3/pagina3.html">Meios de transmissão guiados</a></p>'
    dropdown.innerHTML += '<p><a href="../../paginas/pagina4/pagina4.html">Meios de transmissão não-guiados</a></p>'
    dropdown.innerHTML += '<p><a href="../../paginas/pagina5/pagina5.html">Dispositivos de rede</a></p>'
    dropdown.innerHTML += '<p><a href="../../paginas/pagina6/pagina6.html">Dispositivos de rede II</a></p>'
    dropdown.innerHTML += '<p><a href="../../paginas/pagina7/pagina7.html">Intranet x Extranet</a></p>'
    dropdown.innerHTML += '<p><a href="../../paginas/pagina8/pagina8.html">Classificação de redes por abrangência</a></p>'
    dropdown.innerHTML += '<p><a href="../../paginas/pagina9/pagina9.html">Como funciona a comunicação entre dois computadores?</a></p>'
    dropdown.innerHTML += '<p><a href="../../paginas/pagina10/pagina10.html">Modelo OSI</a></p>'
    dropdown.innerHTML += '<p><a href="../../paginas/pagina11/pagina11.html">Camadas do modelo OSI</a></p>'
    dropdown.innerHTML += '<p><a href="../../paginas/pagina12/pagina12.html">Camadas do modelo OSI II</a></p>'
    dropdown.innerHTML += '<p><a href="../../paginas/pagina13/pagina13.html">Modelo TCP/IP</a></p>'
    dropdown.innerHTML += '<p><a href="../../paginas/pagina14/pagina14.html">Endereçamento IP</a></p>'
    dropdown.innerHTML += '<p><a href="../../paginas/pagina15/pagina15.html">Endereçamento IP II</a></p>'
    dropdown.innerHTML += '<p><a href="../../paginas/pagina16/pagina16.html">Endereçamento IP III</a></p>'
    dropdown.innerHTML += '<p><a href="../../paginas/pagina17/pagina17.html">Endereçamento IP IV</a></p>'
    dropdown.innerHTML += '<p><a href="../../paginas/pagina18/pagina18.html">Endereçamento IP V</a></p>'
}

function botao_recuar_menu(){
    document.querySelector(".div-header").style.display = "none";
    document.querySelector(".botao").style.display = "block";
    dropdown.innerHTML = ' '
}

function recuar_menu_geral(){
    document.querySelector(".div-header").style.display = "none";
    document.querySelector(".botao").style.display = "block";
    dropdown.innerHTML =  ' ';
}

function voltar_pro_home(){
    window.location.href = '../pagina_inicial.html';
}