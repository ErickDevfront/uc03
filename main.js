const prompt = require ("prompt-sync")();
const {dado} = require ("./dado");
const {jogador} = require ("./jogador");
const {SistemaAzar} = require ("./sistemaAzar");



function iniciarSistema(){
     
    let novoTurno = "";
    console.log ("Bem vindo ao undefined177");
    do{
     let nome = prompt ("informe seu nome")
     let aposta = parseInt(prompt("Digite um valor de 1 a 6:"));
     let lançamentodedado = new dado();
     let jogador = new jogador (nome);
     
   
    }while (novoTurno !== "N");
}

