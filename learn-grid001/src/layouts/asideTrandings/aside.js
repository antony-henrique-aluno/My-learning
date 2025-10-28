let data = new Date();
let dia = String(data.getDate()).padStart(2, "0");
let mes = String(data.getMonth() + 1).padStart(2, "0");
let ano = data.getFullYear();

const diasSemana = [
    "Dom",
    "Seg",
    "Ter",
    "Qua",
    "Qui",
    "Sex",
    "Sab"
];//Array com os nomes do dia
const date = document.querySelector("#DiaSemana");
const numeroDia = data.getDay();//Variavel que guarda o numero dos dias, de 0 a 6, usando o metodo getDay();
const nomeDia = diasSemana[numeroDia]; //Variavel que recebe o nome dos dias que está dentro da array [diasSemana]
if (true) {
    date.innerHTML = `${nomeDia} : ${dia} / ${mes} / ${ano}`;
}


