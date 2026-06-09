
    // 1. Pega o menu select pelo ID
const seletorSetor = document.getElementById('setor');

// 2. Pega TODAS as seções de perguntas de uma vez só
const todasAsSecoes = document.querySelectorAll('.secao-checklist');

// 3. Escuta quando o usuário muda a opção no menu
seletorSetor.addEventListener('change', function() {
    const setorSelecionado = this.value; // Pega o id do setor escolhido (ex: "manutencao")

    // PASSO A: Esconde todas as seções primeiro (limpa a tela)
    todasAsSecoes.forEach(secao => {
        secao.style.display = 'none';
    });

    // PASSO B: Se o usuário escolheu um setor válido, mostra só ele
    if (setorSelecionado) {
        const secaoAtiva = document.getElementById(setorSelecionado);
        if (secaoAtiva) {
            secaoAtiva.style.display = 'block'; // Faz a seção aparecer na tela
        }
    }
});
