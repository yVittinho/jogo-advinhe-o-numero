let numerosSorteados = [];
let limiteDeNumeros = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    const campo = document.querySelector(tag);
    campo.innerText = texto;
    // responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Adivinhe o número secreto");
    exibirTextoNaTela("p", "Escolha um número de 1 a 10");
}

exibirMensagemInicial();

function verificarResposta() {

    const numeroEscolhido = document.querySelector("input").value;
    
    if(numeroEscolhido == numeroSecreto){

        const formatarTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        exibirTextoNaTela("h1", "Parabéns! Você acertou.");
        exibirTextoNaTela("p", `O número secreto era ${numeroSecreto} e você precisou de ${tentativas} ${formatarTentativa} para acertá-lo`);

        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        const formatarMensagem = numeroEscolhido > numeroSecreto ? "menor" : "maior";
        exibirTextoNaTela("p", `O número secreto é ${formatarMensagem}`);
    }

    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio() {
    const numeroSorteado = parseInt(Math.random() * limiteDeNumeros + 1);
    const quantidadeNumerosNaLista = numerosSorteados.length;

    if(quantidadeNumerosNaLista == limiteDeNumeros) {
        numerosSorteados = [];
    }

    if(numerosSorteados.includes(numeroSorteado)){
        return gerarNumeroAleatorio();
    } else {
        numerosSorteados.push(numeroSorteado);
        return numeroSorteado;
    }
}

function limparCampo() {
    const numeroEscolhido = document.querySelector("input");
    numeroEscolhido.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    exibirMensagemInicial();
    limparCampo();
    tentativas = 1;
    document.getElementById("reiniciar").setAttribute("disabled", true);
    
}

