// Esta é a função que será chamada quando o botão for clicado (definido no HTML com onclick="calcularPorcentagem()").
function calcularPorcentagem() {
    // 1. OBTER OS VALORES DOS CAMPOS DE ENTRADA

    // valor1 será a porcentagem (X%)
    // valor2 será o valor base (Y)
    let valor1String = document.getElementById('valor1').value;
    let valor2String = document.getElementById('valor2').value;

    // 2. CONVERTER OS VALORES DE TEXTO PARA NÚMERO
    let porcentagem = parseFloat(valor1String);
    let valorBase = parseFloat(valor2String);

    // 3. VERIFICAR SE OS VALORES SÃO NÚMEROS VÁLIDOS
    if (isNaN(porcentagem) || isNaN(valorBase)) {
        alert("Por favor, digite valores numéricos válidos em ambos os campos.");
        return;
    }

    // 4. CALCULAR A PORCENTAGEM
    let resultado = (porcentagem / 100) * valorBase;

    // 5. EXIBIR O RESULTADO NA PÁGINA
    document.getElementById('resultado').innerHTML = 
        `${porcentagem}% de ${valorBase} é: ${resultado}`;
}
