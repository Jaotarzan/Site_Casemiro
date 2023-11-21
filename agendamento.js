const button = document.getElementById("agendamento-button");
const agendamento = document.querySelector("dialog");
const butaodefecha = document.getElementById("agendamento-close");
const butaodecancela = document.getElementById("agendamento-cancela")

button.onclick = function () {
    agendamento.showModal();
}

butaodefecha.onclick = function () {
        agendamento.close();
        alert("Caso não seja possível agendar nesta data entraremos em contato");
};

butaodecancela.onclick = function () {
    agendamento.close();
}