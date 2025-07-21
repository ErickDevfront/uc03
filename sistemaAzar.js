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
    getJogador() {
        return this.#jogador;
    }

    getDado() {
        return this.#dado;
    }

    verificarGanhador(aposta) {
        const faces = this.#dado.getFaces();
        const resultado = Math.floor(Math.random() * faces) + 1;

        console.log(`Resultado do dado: ${resultado}`);
        if (aposta === resultado) {
            console.log("Jogador ganhou!");
            return true;
        } else {
            console.log("Jogador perdeu!");
            return false;
        }
    }
}

module.exports = { SistemaAzar };
