const { Dado } = require("./dado");
const { Jogador } = require("./jogador");



class SistemaAzar {
    #jogador;
    #dado;
    constructor(jogador, dado) {
        if (dado instanceof Dado && jogador instanceof Jogador) {
            this.#jogador = jogador;
            this.#dado = dado;
        }
        Object.freeze(this);
    }
    setJogador(jogador) {
        this.#jogador = jogador
    }
        setDado(aposta){
        this.#dado = aposta
    }

    getJogador() {
        return this.#jogador
    }
    gatDado() {
        return this.#dado
    }
    verificarGanhador() {

       
        if (this.#dado.getFaces() === this.#jogador.getAposta()) {
            console.log(`parabens ${this.#jogador.getNome()}, voce é o ganhador`)
            console.log(`parabens ${this.#jogador.getAposta()}, voce é o ganhador`)
            console.log(`parabens ${this.#dado.getFaces()}, voce é o ganhador`)

        } else {
            console.log(`parabens ${this.#jogador.getNome()}, voce é o ganhador`)
            console.log(`parabens ${this.#jogador.getAposta()}, voce é o ganhador`)
            console.log(`parabens ${this.#dado.getFaces()}, voce é o ganhador`)
        }
    }
}


module.exports = { SistemaAzar }