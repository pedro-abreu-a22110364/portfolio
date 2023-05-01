function displayDate() {
    const dataAtual = new Date();

    const meses = [
        'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];

    const dia = dataAtual.getDate();
    const mes = meses[dataAtual.getMonth()];
    const ano = dataAtual.getFullYear();

    const dataFormatada = `${dia} de ${mes}, ${ano}`;

    document.getElementById("date").innerHTML = dataFormatada;
}

function displayText() {
    document.getElementById("date").innerHTML = "Data aqui!";
}

function calcular() {
    const expressao = document.getElementById("expressao").value;
    const resultado = eval(expressao);
    document.getElementById("result").innerText = resultado;
}
  
function limparResultado() {
    document.getElementById("result").innerText = "";
}