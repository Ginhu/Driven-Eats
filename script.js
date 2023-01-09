let div, div1, div2, pratoN, pratoValor, bebidaN, valorBebida, sobremesaN, valorSobremesa, valorTotal, valorTotalString1;

function selecionarPrato (prato) {
    const anterior = document.querySelector('.prato-selecionado');
    /* const anteriorCheck = document.querySelector('.prato-selecionado .ion-icon'); */
        

    if (anterior != null) {
        anterior.classList.remove('prato-selecionado');
        anterior.querySelector('.ion-icon').classList.add('check-invisivel');
    }

    div = document.querySelector(prato);
    div.classList.add('prato-selecionado');
    div.querySelector('.ion-icon').classList.remove('check-invisivel');
    pratoN = div.querySelector('.nome-prato').innerHTML;

    if (pratoN == "Carne Yin Yang") {
        pratoValor = 14.9;
    } else if (pratoN == "Frango Yin Yang") {
        pratoValor = 15.9;
    } else if (pratoN == "Peixe Yin Yang") {
        pratoValor = 16.9;
    }

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
    bebidaN = div1.querySelector('.nome-prato').innerHTML;

    if (bebidaN == "Coquinha gelada") {
        valorBebida = 4.9;
    } else if (bebidaN == "Guaraná gelada") {
        valorBebida = 5.9;
    } else if (bebidaN == "Sprite gelada") {
        valorBebida = 6.9;
    }

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
    sobremesaN = div2.querySelector('.nome-prato').innerHTML;

    if (sobremesaN == "Pudim") {
        valorSobremesa = 7.9;
    } else if (sobremesaN == "Gelatina") {
        valorSobremesa = 8.9;
    } else if (sobremesaN == "Bolo") {
        valorSobremesa = 9.9;
    }

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
    document.querySelector('.overlay').classList.add('opacidade');
    document.querySelector('.confirme-pedido').classList.remove('check-invisivel');

    document.querySelector('.nome-p').innerHTML = pratoN;
    if (pratoN == "Carne Yin Yang") {
        document.querySelector('.valor-p').innerHTML = "14,90";
    } else if (pratoN == "Frango Yin Yang") {
        document.querySelector('.valor-p').innerHTML = "15,90";
    } else if (pratoN == "Peixe Yin Yang") {
        document.querySelector('.valor-p').innerHTML = "16,90";
    }

    document.querySelector('.nome-b').innerHTML = bebidaN;
    if (bebidaN == "Coquinha gelada") {
        document.querySelector('.valor-b').innerHTML = "4,90";
    } else if (bebidaN == "Guaraná gelada") {
        document.querySelector('.valor-b').innerHTML = "5,90";
    } else if (bebidaN == "Sprite gelada") {
        document.querySelector('.valor-b').innerHTML = "6,90";
    }

    document.querySelector('.nome-s').innerHTML = sobremesaN;
    if (sobremesaN == "Pudim") {
        document.querySelector('.valor-s').innerHTML = "7,90";
    } else if (sobremesaN == "Gelatina") {
        document.querySelector('.valor-s').innerHTML = "8,90";
    } else if (sobremesaN == "Bolo") {
        document.querySelector('.valor-s').innerHTML = "9,90";
    }

    valorTotal = ((pratoValor+valorBebida+valorSobremesa).toFixed(2));
    const valorTotalString = new String(valorTotal);
    valorTotalString1 = valorTotalString.replace(".", ",");
    console.log(valorTotalString);
    document.querySelector('.valor-t').innerHTML = `R$ ${valorTotalString1}`;
    
}

function cancelar() {
    document.querySelector('.overlay').classList.remove('opacidade');
    document.querySelector('.confirme-pedido').classList.add('check-invisivel');
}

function mensagem(){
    const mensagemString = encodeURIComponent(`
Olá, gostaria de fazer o pedido:\n
- Prato: ${pratoN}
- Bebida: ${bebidaN}
- Sobremesa: ${sobremesaN}
Total: ${valorTotalString1}
`);
const link = `https://wa.me/5511932584134?text=${mensagemString}`;

document.querySelector('.confirme-pedido a').setAttribute('href', link);
console.log(link);
}

document.querySelector('.confirme-pedido .confirmar').addEventListener('click', ()=>{
    mensagem();
});