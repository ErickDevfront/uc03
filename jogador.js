class jogador{
      #nome;
      #aposta;
     constructor(nome, aposta){
        this.#nome = nome
        this.#aposta = aposta
        object.freeze(this)
     }
    setNome (nome){
        this.#nome = nome
    setAposta (aposta)
        this.#aposta = aposta
       
    }
    getNome (){
        return this.#nome
    }
    getAposta(){
        return this.#aposta
    }
    }
module.exports = {jogador, aposta}
