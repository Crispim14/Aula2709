document.addEventListener('deviceready', onDeviceReady, false);
var temaAtual = 'warning'; 

function onDeviceReady() {
    var botao = document.getElementById('botao');
    botao.addEventListener('click', escolherCorTema);
}

function escolherCorTema() {
    navigator.notification.prompt(
        'Escolha uma cor para o tema: primary, secondary, success, danger, warning, info, light e dark', 
        temaEscolhido,         
        'Mudar Tema',                
        ['Ok', 'Cancelar'],            
        'warning'                       
    );
}

function temaEscolhido(result) {
    if (result.buttonIndex === 1) {
        var corEscolhida = result.input1.toLowerCase();

        var coresValidas = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

        if (coresValidas.includes(corEscolhida)) {
            temaAtual = corEscolhida;
        } else {
            temaAtual = 'warning';
            console.log('Cor inválida, usando tema padrão: warning');
        }

        aplicarTema(temaAtual);
    } else {
        console.log('Ação cancelada, tema não foi alterado.');
    }
}

function aplicarTema(cor) {
    document.body.classList.remove('bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info', 'bg-light', 'bg-dark');
    document.body.classList.add('bg-' + cor);
}
