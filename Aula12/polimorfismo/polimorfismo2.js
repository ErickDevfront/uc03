const {Usuario} = require ("./polimorfismo1";)
class IsiarioPadrao extends Usuario{
    acessarSistema(){
        return `${this.nome}(Usuário padrão) acessou o sistema com permissões limitadas`;

    }
    
    verPrfil(){
        return `${this.nome} nome do usuario `
    }
}

module.exports = {Usuario} 