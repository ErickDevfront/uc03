const prompt = require ("prompt-sync")();
const {Dado} = require ("./dado");
const {Jogador} = require ("./jogador");
const {SistemaAzar} = require ("./SistemaAzar");



function iniciarSistema(){
     
    let novoTurno = "";
    console.log ("Bem vindo ao undefined177");
    do{
     
     let nome = prompt ("informe seu nome")
     let aposta = parseInt(prompt("Digite um valor de 1 a 6:"));
     let lancamento = new Dado();
     let jogador = new Jogador (nome, aposta);
     const tigrinho = new SistemaAzar (lancamento, jogador)
     tigrinho.verificarGanhador();
     novoTurno = prompt("Digite S para uma nova ou N para encerrar...")
    
    }while (novoTurno.toUpperCase() !== "N");
}

iniciarSistema();