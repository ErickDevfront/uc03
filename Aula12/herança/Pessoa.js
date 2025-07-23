//superclasse ou classe pai
class Pessoa{
    constructor (nome, idade){
        this.nome = nome
        this.idade = idade
    }

    apresentar(){
        return `Ola, meu nome é ${this.nome}e tenho ${this.idade} anos`;
    }
}

module.exports = {Pessoa}

