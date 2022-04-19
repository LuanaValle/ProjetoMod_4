// Model que cuida da criação do objeto da nossa entidade
// validando as entradas

class StatusSchema{
    constructor(localizacao){
        this.localizacao = localizacao
    }
// ?????
    _validaSenha = (senha)=>{
        if(senha.length >= 6){
            return senha
        }
        else{
            throw new Error("A senha precisa ter mais de 6 caracteres")
        }
    }

}

export default StatusSchema