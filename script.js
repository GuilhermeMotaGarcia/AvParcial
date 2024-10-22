// --------------------------------
// Nome do arquivo: script.js
// Descrição: arquivo de script para o jogo de adivinhação.
// Autores:
//  Nome Luana Sá Blasco - RGM: 34079912
//  Nome Rafael Rodrigues - RGM: 37991833
//  Nome Guilherme Mota Garcia - RGM: 36913197
// --------------------------------

//file:///C:/Users/logonlb.CDS/Downloads/AvParcial/jogo1.html
const blocoJogo = document.getElementById("blocoJogo")
const btnEnviarPalpite = document.getElementById("btnEnviarPalpite")
const saida = document.getElementById("saida")

let valor_correto = parseInt(100 * Math.random())
let lista = []
btnEnviarPalpite.addEventListener("click", function() {
    
    const palpites = parseInt(document.getElementById("palpites"))
    let entrada = parseInt(document.getElementById("entrada").value)

    if(valor_correto == entrada){
        lista.push(entrada);
        document.getElementById("palpites").innerHTML = `Seus palpites foram ${lista}`;
        document.getElementById("saida").innerHTML = "Valor " + entrada + " é igual a " + valor_correto + " Parabéns"
        setInterval(function() {
            window.location.reload()
        },4000)
      
    }

    else if (entrada < valor_correto) {
        lista.push(entrada); // Não use "let" aqui, apenas chame o método push
        document.getElementById("palpites").innerHTML = `Seus palpites foram ${lista}`;
        document.getElementById("saida").innerHTML = "Valor " + entrada + " é menor que " + valor_correto;   
    }

    else{    
        lista.push(entrada)
        document.getElementById("palpites").innerHTML = `Seus palpites foram ${lista}`
        document.getElementById("saida").innerHTML = "Valor " + entrada + " é maior que " + valor_correto
    }
    

})
// jogo1.html - parte 1 (0.5 ponto)
// Crie um jogo para tentar adivinhar um número de 0 a 100
// Ao clicar em "Enviar Palpite" apresente no id "saida" um texto informando 
//se o palpite é menor, maior ou igual.

// jogo1.html - parte 2 (0.5 ponto)
// Se o usuário acertar, parabenize e atualize a página após 4 segundos.
// Obs: utilize a instrução 'window.location.reload()'

// jogo1.html - parte 3 (1 ponto)
// Imprima a sequência de palpites digitados no id "palpites".

// jogo1.html - parte 4 (1 ponto - participação)




// jogo2.html -  (0 ponto)
// Faça com que o usuário possa selecionar um nível de dificuldade antes de iniciar o jogo
// Por exemplo, se o usuário selecionar Fácil, ele só pode realizar 10 tentativas.
// Se chegar no limite, uma mensagem no id "saida" deve indicar que o jogador perdeu
// Realize a mesma atividade para o nível Médio e Difícil.





