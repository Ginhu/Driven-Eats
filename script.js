function selecionarPrato (prato) {
    const anterior = document.querySelector('.prato-selecionado');

    if (anterior != null) {
        anterior.classList.remove('prato-selecionado');
    }

    const div = document.querySelector(prato);
    div.classList.add('prato-selecionado');
}

function selecionarBebida (bebida) {
    const anterior = document.querySelector('.bebida-selecionado');

    if (anterior != null) {
        anterior.classList.remove('bebida-selecionado');
    }

    const div = document.querySelector(bebida);
    div.classList.add('bebida-selecionado');
}

function selecionarSobremesa(sobremesa) {
    const anterior = document.querySelector('.sobremesa-selecionado');

    if (anterior != null) {
        anterior.classList.remove('sobremesa-selecionado');
    }

    const div = document.querySelector(sobremesa);
    div.classList.add('sobremesa-selecionado');
}