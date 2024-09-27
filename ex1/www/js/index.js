document.addEventListener('deviceready', onDeviceReady, false);

let numero1, numero2;

function onDeviceReady() {
    gerarNovaOperacao();
    var botao = document.getElementById('botao');
    botao.addEventListener('click', verifica);
}


function gerarNovaOperacao() {
    numero1 = Math.floor(Math.random() * 10) + 1; 
    numero2 = Math.floor(Math.random() * 10) + 1;
    var conta = document.getElementById('conta');
    conta.textContent = `${numero1} + ${numero2} = `;
}


function verifica() {
    var campo = document.getElementById('campo');
    var resposta = parseInt(campo.value); 

    if (!isNaN(resposta) && resposta === (numero1 + numero2)) {
        
        navigator.notification.alert('Você acertou!', alertDismissed, 'Resposta Correta', 'OK');
    } else {
        
        console.log('Resposta errada');
    }
}


function alertDismissed() {

    var campo = document.getElementById('campo');
    campo.value = '';
    

    gerarNovaOperacao();
}
