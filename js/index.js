let div = document.querySelector('.botao-acessar')

document.querySelector('html').addEventListener('mouseleave', function(){
     alert('Não se vá :) Vem com a gente aprender hacks para a sua saúde mental? Se inscreva no formulário da sympla, boraaa!')
})

//Contador
let target_date = new Date("Julho 09, 2020 19:00:00").getTime();
let dias, horas, minutos, segundos;
let regressiva = document.getElementById("regressiva");

setInterval(function () {
    let current_date = new Date().getTime();
    let segundos_f = (target_date - current_date) / 1000;

    dias = parseInt(segundos_f / 86400);
    segundos_f = segundos_f % 86400;
    
    horas = parseInt(segundos_f / 3600);
    segundos_f = segundos_f % 3600;
    
    minutos = parseInt(segundos_f / 60);
    segundos = parseInt(segundos_f % 60);

    document.getElementById('dia').innerHTML = dias;
    document.getElementById('hora').innerHTML = horas;
    document.getElementById('minuto').innerHTML = minutos;
    document.getElementById('segundo').innerHTML = segundos;
}, 1000);