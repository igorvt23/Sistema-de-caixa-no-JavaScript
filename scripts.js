var valorCompra = parseFloat(0);

function menu(){

    for(var i = 0; i < 10; i--){  
        var resp = parseInt(prompt(
            "|1 - SALGADO     ----- >     R$ 5.00\n|2 - DOCE     ----- >     R$ 2.00\n|3 - SUCO     ----- >     R$ 1.50\n|4 - REFRIGERANTE     ----- >     R$ 12.00\n|5 - FINALIZAR COMPRA\n\n Digite a sua resposta:", ""))

        switch(resp){
            case 1:
                valorCompra = valorCompra + 5;
                alert("Pedido cadastrado");
            break;
            case 2:
                valorCompra = valorCompra + 2;
                alert("Pedido cadastrado");
            break;
            case 3:
                valorCompra = valorCompra + 1.50;
                alert("Pedido cadastrado");
            break;
            case 4:
                valorCompra = valorCompra + 12;
                alert("Pedido cadastrado");
            break;
            case 5:
                i = 100;
                alert("Pedido cadastrado");
            break;
            default:
                alert("Erro!")
            break;
        }
    }
}

function caixa(valorCompra){
    document.write(`Valor compra: ${valorCompra} <br>`);
    var valorPago = parseFloat(prompt("Informe a quantidade de dinheiro que irá entregar para pagar:", ""));
    document.write(`Valor pago: ${valorPago} <br>`); 
    document.write(`Troco: ${valorPago - valorCompra} <br>`);

    var troco = 0; notas50 = 0; notas20 = 0; notas10 = 0; notas5 =  0; notas2 = 0; moeda1 = 0;

    if(valorCompra <= valorPago){
        troco = valorPago - valorCompra;
        notas50 = parseInt(troco/50);
        troco %= 50;
        notas20 = parseInt(troco/20);
        troco %= 20;
        notas10 = parseInt(troco/10);
        troco %= 10;
        notas5 = parseInt(troco/5);
        troco %= 5;
        notas2 = parseInt(troco/2);
        troco %= 2;

  
   


        document.write(`Notas de R$50,00: ${parseInt(notas50)} <br>`);

        document.write(`Notas de R$20,00: ${parseInt(notas20)} <br>`);

        document.write(`Notas de R$10,00: ${parseInt(notas10)} <br>`);

        document.write(`Notas de R$5,00: ${parseInt(notas5)} <br>`);

        document.write(`Notas de R$2,00: ${parseInt(notas2)} <br>`);

        document.write(`Moedas de R$1,00: ${parseInt(troco)} <br>`);
    }
    else 
        document.write("A quantia paga é insuficiente para realizar a compra!")
}
menu()
caixa(valorCompra)