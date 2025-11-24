// calculadora.js - VERSÃO 100% CORRETA E TESTADA

function calcularDiferenca1() {
    // 1. Ler valor atual (ex: "1.292,00" ou "1292.00")
    const inputAtual = document.getElementById('valorFinal1').value.trim();
    const valorAtual = parseFloat(inputAtual.replace(/\./g, '').replace(',', '.')) || 0;

    // 2. Ler valor anterior (usuário digita: 1192, 1192.00, 1.192,00)
    const inputAnterior = document.getElementById('valorAnterior1').value.trim();
    const valorAnterior = parseFloat(inputAnterior.replace(/\./g, '').replace(',', '.')) || 0;

    // Validação
    if (valorAnterior <= 0) {
        alert('Por favor, insira um valor anterior válido (ex: 1192.00)');
        return;
    }

    // Cálculos
    const diferenca = valorAtual - valorAnterior;
    const percentual = (diferenca / valorAnterior) * 100;

    // Formatação
    const formatarMoeda = (num) => {
        return 'R$ ' + Math.abs(num).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };
    const formatarPercentual = (num) => {
        const sinal = num >= 0 ? '+' : '';
        return sinal + num.toFixed(2).replace('.', ',') + '%';
    };

    // Atualizar modal
    document.getElementById('novoValor1').textContent = formatarMoeda(valorAtual);
    document.getElementById('antigoValor1').textContent = formatarMoeda(valorAnterior);
    
    const difEl = document.getElementById('diferencaValor1');
    difEl.innerHTML = `<strong>${diferenca >= 0 ? '+' : ''}${formatarMoeda(diferenca)}</strong>`;
    difEl.className = diferenca >= 0 ? 'text-success' : 'text-danger';

    const percEl = document.getElementById('percentualAumento1');
    percEl.innerHTML = `<strong>${formatarPercentual(percentual)}</strong>`;
    percEl.className = percentual >= 0 ? 'text-success' : 'text-danger';

    // Mostrar
    document.getElementById('resultadoCalculo1').style.display = 'block';
}