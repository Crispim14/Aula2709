document.addEventListener('deviceready', onDeviceReady, false);
var temaAtual = 'warning'; // Tema padrão

function onDeviceReady() {
    var botao = document.getElementById('botao');
    botao.addEventListener('click', escolherCorTema);
}

function escolherCorTema() {
    // Exibe o prompt para o usuário inserir a cor do tema
    navigator.notification.prompt(
        'Escolha uma cor para o tema: primary, secondary, success, danger, warning, info, light e dark',   // Mensagem
        temaEscolhido,                    // Callback quando a cor for escolhida
        'Mudar Tema',                     // Título
        ['Ok', 'Cancelar'],               // Botões
        'warning'                         // Texto padrão
    );
}

function temaEscolhido(result) {
    // Verifica se o usuário pressionou "Ok" (índice 1)
    if (result.buttonIndex === 1) {
        var corEscolhida = result.input1.toLowerCase();

        // Lista de cores válidas do Bootstrap
        var coresValidas = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

        // Verifica se a cor inserida é válida, caso contrário, define como 'warning'
        if (coresValidas.includes(corEscolhida)) {
            temaAtual = corEscolhida;
        } else {
            temaAtual = 'warning';
            console.log('Cor inválida, usando tema padrão: warning');
        }

        // Atualiza o tema da página
        aplicarTema(temaAtual);
    } else {
        console.log('Ação cancelada, tema não foi alterado.');
    }
}

function aplicarTema(cor) {
    // Remove todas as classes de tema existentes no body
    document.body.classList.remove('bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info', 'bg-light', 'bg-dark');
    
    // Adiciona a classe de tema escolhida
    document.body.classList.add('bg-' + cor);
}
