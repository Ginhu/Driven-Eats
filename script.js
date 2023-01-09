let div;
let div1;
let div2;
function selecionarPrato (prato) {
    const anterior = document.querySelector('.prato-selecionado');
    /* const anteriorCheck = document.querySelector('.prato-selecionado .ion-icon'); */
        

    if (anterior != null) {
        anterior.classList.remove('prato-selecionado');
        /* anteriorCheck.classList.add('check-invisivel'); */
        anterior.querySelector('.ion-icon').classList.add('check-invisivel');
    }

    div = document.querySelector(prato);
    div.classList.add('prato-selecionado');
    div.querySelector('.ion-icon').classList.remove('check-invisivel');
    /* const check = document.querySelector(prato, '.ion-icon');
    check.classList.remove('check-invisivel'); */

    botao();
}

function selecionarBebida (bebida) {
    const anterior = document.querySelector('.bebida-selecionado');

    if (anterior != null) {
        anterior.classList.remove('bebida-selecionado');
        anterior.querySelector('.ion-icon').classList.add('check-invisivel');
    }

    div1 = document.querySelector(bebida);
    div1.classList.add('bebida-selecionado');
    div1.querySelector('.ion-icon').classList.remove('check-invisivel');

    botao();
}

function selecionarSobremesa(sobremesa) {
    const anterior = document.querySelector('.sobremesa-selecionado');

    if (anterior != null) {
        anterior.classList.remove('sobremesa-selecionado');
        anterior.querySelector('.ion-icon').classList.add('check-invisivel');
    }

    div2 = document.querySelector(sobremesa);
    div2.classList.add('sobremesa-selecionado');
    div2.querySelector('.ion-icon').classList.remove('check-invisivel');

    botao();
}

function botao () {
    if(div != null && div1 != null && div2 != null) {
        const botao = document.querySelector('.rodape');

        botao.classList.add('ativado');
        botao.innerHTML = "Fechar Pedido";
        botao.disabled = false;
    }
}

function finalizarPedido() {
    
}