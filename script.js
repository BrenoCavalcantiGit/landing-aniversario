// ====== EDITE AQUI ======
var DIA = 15;   // dia do seu aniversário
var MES = 12;   // mês do seu aniversário (1 a 12)
var HORA = 19;  // hora da festa
// ========================

// animações (biblioteca AOS)
AOS.init({ duration: 800, once: true });

var meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho",
             "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

function proximaData() {
    var agora = new Date();
    var data = new Date(agora.getFullYear(), MES - 1, DIA, HORA, 0, 0);
    if (data.getTime() < agora.getTime()) {
        data = new Date(agora.getFullYear() + 1, MES - 1, DIA, HORA, 0, 0);
    }
    return data;
}

var alvo = proximaData();
document.getElementById("data-texto").textContent = DIA + " de " + meses[MES - 1] + " de " + alvo.getFullYear();

function doisDigitos(n) {
    return n < 10 ? "0" + n : String(n);
}

var intervalo;

function atualizar() {
    var diferenca = alvo.getTime() - new Date().getTime();

    if (diferenca <= 0) {
        clearInterval(intervalo);
        document.getElementById("contador").innerHTML = "<p>A festa começou! 🎉</p>";
        return;
    }

    var segundos = Math.floor(diferenca / 1000);
    document.getElementById("dias").textContent = doisDigitos(Math.floor(segundos / 86400));
    document.getElementById("horas").textContent = doisDigitos(Math.floor((segundos % 86400) / 3600));
    document.getElementById("minutos").textContent = doisDigitos(Math.floor((segundos % 3600) / 60));
    document.getElementById("segundos").textContent = doisDigitos(segundos % 60);
}

atualizar();
intervalo = setInterval(atualizar, 1000);
