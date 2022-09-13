// Informa se o aluno 1 tem laudo ou necessita atendimento especial
temLaudo = () => {
    let checkBox = document.getElementById("checkLaudo1");
    if ( checkBox.checked == true) {
        document.getElementById('parceria1').value = "";
        document.getElementById('parceria1').readOnly = true;
        document.getElementById("desconto1").readOnly = true;
        document.getElementById("desconto1").style.color = "lightGray";
        document.getElementById("desconto1").value = 0;
        calculaMensalidade1()
    } else {
        checkBox.checked = false; 
        document.getElementById('parceria1').readOnly = false;
        document.getElementById("desconto1").readOnly = false;
        document.getElementById("desconto1").style.color = "black";
        calculaMensalidade1()
    }
}

// Informa se o aluno 2 tem laudo ou necessita atendimento especial
temLaudo2 = () => {
    let checkBox = document.getElementById("checkLaudo2");
    if ( checkBox.checked == true) {
        document.getElementById('parceria2').value = "";
        document.getElementById('parceria2').readOnly = true;
        document.getElementById("desconto2").readOnly = true;
        document.getElementById("desconto2").style.color = "lightGray";
        document.getElementById("desconto2").value = 0;
        calculaMensalidade2()
    } else {
        checkBox.checked = false; 
        document.getElementById('parceria2').readOnly = false;
        document.getElementById("desconto2").readOnly = false;
        document.getElementById("desconto2").style.color = "black";
        calculaMensalidade2()
    }
}

// Informa se o aluno 3 tem laudo ou necessita atendimento especial
temLaudo3 = () => {
    let checkBox = document.getElementById("checkLaudo3");
    if ( checkBox.checked == true) {
        document.getElementById('parceria3').value = "";
        document.getElementById('parceria3').readOnly = true;
        document.getElementById("desconto3").readOnly = true;
        document.getElementById("desconto3").style.color = "lightGray";
        document.getElementById("desconto3").value = 0;
        calculaMensalidade3()
    } else {
        checkBox.checked = false; 
        document.getElementById('parceria3').readOnly = false;
        document.getElementById("desconto3").readOnly = false;
        document.getElementById("desconto3").style.color = "black";
        calculaMensalidade3()
    }
}


// Informa se o aluno 4 tem laudo ou necessita atendimento especial
temLaudo4 = () => {
    let checkBox = document.getElementById("checkLaudo4");
    if ( checkBox.checked == true) {
        document.getElementById('parceria4').value = "";
        document.getElementById('parceria4').readOnly = true;
        document.getElementById("desconto4").readOnly = true;
        document.getElementById("desconto4").style.color = "lightGray";
        document.getElementById("desconto4").value = 0;
        calculaMensalidade4()
    } else {
        checkBox.checked = false; 
        document.getElementById('parceria4').readOnly = false;
        document.getElementById("desconto4").readOnly = false;
        document.getElementById("desconto4").style.color = "black";
        calculaMensalidade4()
    }
}

// Funções que calculam as mensalidades
function calculaMensalidade1() {

    let valor = parseFloat(document.getElementById('serie1').value)
    document.getElementById('valorSerie1').value = valor.toFixed(2)

    // Último input (valor final em 12x, sem negociações)
    document.getElementById('valorFinal1').value = valor.toFixed(2)
    let desconto = document.getElementById('desconto1').value
    let parceria = document.getElementById('parceria1').value

        if (parceria != "") {
            desconto = 10
            document.getElementById('desconto1').value = desconto
        }

    let parcelas = document.getElementById('parcelas1').value

    let valorFinal = (((valor*12)/parcelas)/100)*(100-desconto)

    // Último input (valor final negociado - com desconto e parcelamento)
    document.getElementById('valorFinal1').value = valorFinal.toFixed(2)
    somarValorFinal()
    mostraResumo1()

} 






function calculaMensalidade2() {
    
    let valor = parseFloat(document.getElementById('serie2').value)
    
    document.getElementById('valorSerie2').value = valor.toFixed(2)
    document.getElementById('valorFinal2').value = valor.toFixed(2)

    let desconto = document.getElementById('desconto2').value

    let parceria = document.getElementById('parceria2').value

        if (parceria != "") {
            desconto = 10
            document.getElementById('desconto2').value = desconto
        } 
    
    let parcelas = document.getElementById('parcelas2').value
    
    let valorFinal = (((valor*12)/parcelas)/100)*(100-desconto)
    document.getElementById('valorFinal2').value = valorFinal.toFixed(2)
    
    somarValorFinal()
    mostraResumo2()
}
function calculaMensalidade3() {
    
    let valor = parseFloat(document.getElementById('serie3').value)
    
    document.getElementById('valorSerie3').value = valor.toFixed(2)
    document.getElementById('valorFinal3').value = valor.toFixed(2)

    let desconto = document.getElementById('desconto3').value

    let parceria = document.getElementById('parceria3').value

        if (parceria != "") {
            desconto = 10
            document.getElementById('desconto3').value = desconto
        } 
    
    let parcelas = document.getElementById('parcelas3').value
    
    let valorFinal = (((valor*12)/parcelas)/100)*(100-desconto)
    document.getElementById('valorFinal3').value = valorFinal.toFixed(2)
    
    somarValorFinal()
    mostraResumo3()
}
function calculaMensalidade4() {
    let valor = parseFloat(document.getElementById('serie4').value)
    
    document.getElementById('valorSerie4').value = valor.toFixed(2)
    document.getElementById('valorFinal4').value = valor.toFixed(2)

    let desconto = document.getElementById('desconto4').value

    let parceria = document.getElementById('parceria4').value

        if (parceria != "") {
            desconto = 10
            document.getElementById('desconto4').value = desconto
        } 
    
    let parcelas = document.getElementById('parcelas4').value
    
    let valorFinal = (((valor*12)/parcelas)/100)*(100-desconto)
    document.getElementById('valorFinal4').value = valorFinal.toFixed(2)

    somarValorFinal()
    mostraResumo4()
}

// FUNÇÕES QUE MOSTRAM OS DADOS À DIREITA - NA TABELA RESUMO
function mostraResumo1() {
    let nome = document.getElementById('txtNome1').value
    let ser = document.getElementById("serie1");
    let text = ser.options[ser.selectedIndex].text;
    let vIntegral = document.getElementById('valorSerie1').value
    let vFinal = document.getElementById('valorFinal1').value
    let dMes = parseFloat(vIntegral) - parseFloat(vFinal).toFixed(2)
    let dAno = dMes*12

    document.getElementById('n1').innerHTML = nome
    document.getElementById('sr1').innerHTML = text
    document.getElementById('vI1').innerHTML = parseFloat(vIntegral).toFixed(2)
    document.getElementById('dm1').innerHTML = parseFloat(dMes).toFixed(2)
    document.getElementById('da1').innerHTML = parseFloat(dAno).toFixed(2)
    document.getElementById('vf1').innerHTML = parseFloat(vFinal).toFixed(2)

    // document.getElementById('d1').value = parseFloat(dMes).toFixed(2)
    // document.getElementById('dano1').value = parseFloat(dAno).toFixed(2)

}
function mostraResumo2() {
    let nome2 = document.getElementById('txtNome2').value
    let ser = document.getElementById("serie2");
    let text = ser.options[ser.selectedIndex].text;
    let vIntegral2 = document.getElementById('valorSerie2').value
    let vFinal2 = document.getElementById('valorFinal2').value
    let dMes2 = parseFloat(vIntegral2) - parseFloat(vFinal2).toFixed(2)
    let dAno2 = dMes2*12

    document.getElementById('n2').innerHTML = nome2
    document.getElementById('sr2').innerHTML = text
    document.getElementById('vI2').innerHTML = parseFloat(vIntegral2).toFixed(2)
    document.getElementById('dm2').innerHTML = parseFloat(dMes2).toFixed(2)
    document.getElementById('da2').innerHTML = parseFloat(dAno2).toFixed(2)
    document.getElementById('vf2').innerHTML = parseFloat(vFinal2).toFixed(2)

    // document.getElementById('d2').value = parseFloat(dMes2).toFixed(2)
    // document.getElementById('dano2').value = parseFloat(dAno2).toFixed(2)
    
}
function mostraResumo3() {
    let nome3 = document.getElementById('txtNome3').value
    let ser = document.getElementById("serie3");
    let text = ser.options[ser.selectedIndex].text;
    let vIntegral3 = document.getElementById('valorSerie3').value
    let vFinal3 = document.getElementById('valorFinal3').value
    let dMes3 = parseFloat(vIntegral3) - parseFloat(vFinal3).toFixed(2)
    let dAno3 = dMes3*12

    document.getElementById('n3').innerHTML = nome3
    document.getElementById('sr3').innerHTML = text
    document.getElementById('vI3').innerHTML = parseFloat(vIntegral3).toFixed(2)
    document.getElementById('dm3').innerHTML = parseFloat(dMes3).toFixed(2)
    document.getElementById('da3').innerHTML = parseFloat(dAno3).toFixed(2)
    document.getElementById('vf3').innerHTML = parseFloat(vFinal3).toFixed(2)

    // document.getElementById('d3').value = parseFloat(dMes3).toFixed(2)
    // document.getElementById('dano3').value = parseFloat(dAno3).toFixed(2)

}
function mostraResumo4() {
    let nome4 = document.getElementById('txtNome4').value
    let ser = document.getElementById("serie4");
    let text = ser.options[ser.selectedIndex].text;
    let vIntegral4 = document.getElementById('valorSerie4').value
    let vFinal4 = document.getElementById('valorFinal4').value
    let dMes4 = parseFloat(vIntegral4) - parseFloat(vFinal4).toFixed(2)
    let dAno4 = dMes4*12

    document.getElementById('n4').innerHTML = nome4
    document.getElementById('sr4').innerHTML = text
    document.getElementById('vI4').innerHTML = parseFloat(vIntegral4).toFixed(2)
    document.getElementById('dm4').innerHTML = parseFloat(dMes4).toFixed(2)
    document.getElementById('da4').innerHTML = parseFloat(dAno4).toFixed(2)
    document.getElementById('vf4').innerHTML = parseFloat(vFinal4).toFixed(2)

    // document.getElementById('d4').value = parseFloat(dMes4).toFixed(2)
    // document.getElementById('dano4').value = parseFloat(dAno4).toFixed(2)

}

// FUNÇÃO QUE SOMA O VALOR FINAL
function somarValorFinal() {
    let v1 = document.getElementById('serie1').value
    if (v1 === "") {v1 = 0}
    let va1 = document.getElementById('valorFinal1').value
    if (va1 === "") {va1 = 0} 

    let v2 = document.getElementById('serie2').value
    if (v2 === "") {v2 = 0}
    let va2 = document.getElementById('valorFinal2').value
    if (va2 === "") {va2 = 0} 

    let v3 = document.getElementById('serie3').value
    if (v3 === "") {v3 = 0}
    let va3 = document.getElementById('valorFinal3').value
    if (va3 === "") {va3 = 0} 

    let v4 = document.getElementById('serie4').value
    if (v4 === "") {v4 = 0} 
    let va4 = document.getElementById('valorFinal4').value
    if (va4 === "") {va4 = 0} 

    let totalIntegral = parseFloat(v1)+parseFloat(v2)+parseFloat(v3)+parseFloat(v4)
    let somatorio = parseFloat(va1) + parseFloat(va2) + parseFloat(va3) + parseFloat(va4)
    let descontoMes = parseFloat(v1-va1) + parseFloat(v2-va2) + parseFloat(v3-va3) + parseFloat(v4-va4)
    let descontoAno = descontoMes*12

    document.getElementById('somaIntegral').innerHTML = totalIntegral.toFixed(2)
    document.getElementById('dMes').innerHTML = descontoMes.toFixed(2)
    document.getElementById('dAno').innerHTML = descontoAno.toFixed(2)
    document.getElementById('divSomaTotal').innerHTML = somatorio.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    document.getElementById('somaTotal').innerHTML = somatorio.toFixed(2)
    
    return somatorio
}

// Exibe didáticos inclusos na área de impressão
function exibeDidaticos() {
    // Get the checkbox
    var checkBox = document.getElementById("checkDidaticos");
    // Get the output text
    var text = document.getElementById("textD");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
}

// Exibe opção de pagamento na área de impressão
function myFunctionPg() {
    // Get the buttons
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var btn4 = document.getElementById("btn4");
    // Get the output text
    var textPg = document.getElementById("textPg")
  
    // If the checkbox is checked, display the output text
    if (btn1.checked == true) {
        textPg.style.display = "block"
        textPg.innerHTML = btn1.value
  } else if (btn2.checked == true) {
        textPg.style.display = "block"
        textPg.innerHTML = btn2.value
  } else if (btn3.checked == true) {
        textPg.style.display = "block"
        textPg.innerHTML = btn3.value
  } else if (btn4.checked == true) {
        textPg.style.display = "block"
        textPg.innerHTML = btn4.value
    }
}

// Gera arquivo em PDF com todas as informações da negociação
function gerarPDF() {

    let resp = document.getElementById('input-responsaveis').value

    let contato = document.getElementById('input-melhor-contato').value

    document.getElementById('resp-e-contato').innerHTML = "Responsável: " + resp + " (" + contato + ")"

    const dados = document.getElementById('proposta_resumo')
    let aluno1 = document.getElementById('txtNome1')
    let aluno2 = document.getElementById('txtNome2')
    let aluno3 = document.getElementById('txtNome3')
    let aluno4 = document.getElementById('txtNome4')

    let ser1 = document.getElementById('sr1')
    let ser2 = document.getElementById('sr2')
    let ser3 = document.getElementById('sr3')
    let ser4 = document.getElementById('sr4')

    let parc1 = document.getElementById('parcelas1')
    let parc2 = document.getElementById('parcelas2')
    let parc3 = document.getElementById('parcelas3')
    let parc4 = document.getElementById('parcelas4')

    let valor1 = document.getElementById('valorFinal1')
    let valor2 = document.getElementById('valorFinal2')
    let valor3 = document.getElementById('valorFinal3')
    let valor4 = document.getElementById('valorFinal4')

    let somatoria = document.getElementById('divSomaTotal')

    document.getElementById('aluno1').innerText = aluno1.value
    document.getElementById('aluno2').innerText = aluno2.value
    document.getElementById('aluno3').innerText = aluno3.value
    document.getElementById('aluno4').innerText = aluno4.value

    document.getElementById('sre1').innerHTML = ser1.innerText
    document.getElementById('sre2').innerHTML = ser2.innerText
    document.getElementById('sre3').innerHTML = ser3.innerText
    document.getElementById('sre4').innerHTML = ser4.innerText
    
    if (document.getElementById('serie1').value === "0.0") {
        document.getElementById('p1').innerHTML = ""
    } else {
        document.getElementById('p1').innerHTML = parc1.value
    }
    if (document.getElementById('serie2').value === "0.0") {
        document.getElementById('p2').innerHTML = ""
    } else {
        document.getElementById('p2').innerHTML = parc2.value
    }
    if (document.getElementById('serie3').value === "0.0") {
        document.getElementById('p3').innerHTML = ""
    } else {
        document.getElementById('p3').innerHTML = parc3.value
    }
    if (document.getElementById('serie4').value === "0.0") {
        document.getElementById('p4').innerHTML = ""
    } else {
        document.getElementById('p4').innerHTML = parc4.value
    }

    document.getElementById('v1').innerHTML = valor1.value
    document.getElementById('val2').innerHTML = valor2.value
    document.getElementById('val3').innerHTML = valor3.value
    document.getElementById('val4').innerHTML = valor4.value

    document.getElementById('totalFinal').innerHTML = somatoria.innerText
    let taxa = document.getElementById('taxa').value
    document.getElementById('taxa-valor').innerHTML = parseFloat(taxa).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    let atendente = document.getElementById('select-atendentes').value
    document.getElementById('nome-atendente').innerHTML = "Atendente <br>" + atendente

    let obs = document.getElementById('input-obs').value

    if (obs !== "") {
        document.getElementById('observacoes-text-area').style.display = "block"
    } else {
        document.getElementById('observacoes-text-area').style.display = "none"
    }

    document.getElementById('obs-print').innerHTML = obs

    console.log('Gerar PDF')

    try {
        html2pdf()
            .from(dados)
            .save()
    }
    catch (e) {
        console.error(e)        
    }

    dataHoje()
}

// Exibe a data e hora atual e o contato do atendente
function dataHoje() {
    const d = new Date();
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const date = d.getDate();
    const year = d.getFullYear();
    const hora = d.getHours();
    const min = d.getMinutes();
    document.getElementById("dataAtual").innerHTML = 
    days[d.getDay()] + `, ` + date + ` de ` + months[d.getMonth()] + ` de ` + year + " - " + hora + ":" + min + ".";
}

// Exibem os modais
function toggleTaxa() {document.getElementById("popupTaxa").classList.toggle("active")}
function toggleCT() {document.getElementById("popupCt").classList.toggle("active")}
function toggleInclusao() {document.getElementById("popupInclusao").classList.toggle("active")}
function toggleMateriais() {document.getElementById("popupMateriais").classList.toggle("active")}
function toggleLivros() {document.getElementById("popupLivros").classList.toggle("active")}
function toggleUniformes() {document.getElementById("popupUniformes").classList.toggle("active")}
function toggleCantina() {document.getElementById("popupCantina").classList.toggle("active")}
function toggleTransporte() {document.getElementById("popupTransporte").classList.toggle("active")}
function toggleDocumentos() {document.getElementById("popupDocumentos").classList.toggle("active")}

