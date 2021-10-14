/* 
Carne = 500g por pessoa + 6 horas - 650;
Cerveja = 1200 ml por pessoa + 6 horas - 2000 ml;
Refrigerante/Água - 1000 ml por pessoa + 6 horas 1500 ml;
crianças valem por 0,5 pessoa;
*/

let inpultAdultos = document.getElementById("adultos");
let inpultCriancas = document.getElementById("criancas");
let inpultDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...");

    let adultos = inpultAdultos.value;
    let criancas = inpultCriancas.value;
    let duracao = inpultDuracao.value;

    let quantidadeTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let quantidadeTotalCerveja = cervejaPP(duracao) * adultos;
    let quantidadeTotalRefri = refriPP(duracao) * adultos + (refriPP(duracao) /2 * criancas);

    resultado.innerHTML = `<p>${quantidadeTotalCarne} g de Carne</p>`
    resultado.innerHTML += `<p>${quantidadeTotalCerveja} Litros de Cerveja</p>`
    resultado.innerHTML += `<p>${quantidadeTotalRefri} Litros de Refrigerante</p>`
}

function carnePP(duracao){                      //carnePP = Carne Por Pessoa
    let carne = 400;
    if(duracao >= 6){
        return 650;
    } else{
        return 400;
    }
}

function cervejaPP(duracao){                      //cervejaPP = Cerveja Por Pessoa
    if(duracao >= 6){
        return 2;
    } else{
        return 1,2;
    }
}

function refriPP(duracao){                      //refriPP = refri Por Pessoa
    if(duracao >= 6){
        return 1,5;
    } else{
        return 1;
    }
}