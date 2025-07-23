
// subclass ou classe filha

const {Pessoa} = require ("./Pessoa")

// Aplicanto herança entre Pessoa e Alunoo//
class Aluno extends Pessoa{
    matricula;
    curso;
    
    constructor (nome, idade, matricula, curso){
        super(nome, idade); // passando os dados para o construtor da super classe
        this.matricula = matricula;
        this. curso = curso;
    }
    estudar(){
        return `${this.nome} está estudando no ${this.curso}`;

    }
}

module.exports = {Aluno}