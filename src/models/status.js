// Models responsáveis pelo tratamento das entidades
// Ela irá chamar os schemas quando necessário para criar validação dos dados
// E irá chamar a DAO para conexão com o Banco de Dados
import StatusDAO from '../DAO/StatusDAO.js'
import StatusSchema from './schema/StatusSchema.js'

class Status{
    constructor(db){
        this.dao = new StatusDAO(db)
    }

    pegaStatusEntrega = async ()=>{
        try {
            return await this.dao.pegaStatusEntrega()
        } catch (error) {
            return {
                "mensagem": error.message,
                "erro" : true
            }
        }
    }

    pegaUmaEntrega = async (email)=>{
        try {
            return await this.dao.pegaUmaEntrega(email)
       } catch (error) {
            return {
                "mensagem": error.message,
               "erro" : true
            }
        }
    }

    insereStatus = async (entrega)=>{
        try {
            const novaEntrega = new StatusSchema(entrega)
            return await this.dao.insereStatus(novaEntrega)
        } catch (error) {
            return ({
                "mensagem": error.message,
                "erro" : true
            })
        }
    }

    deletaENtrega = async (id)=>{
        try {
            // verifica se registro existe
            // por ser uma chamada assincrona tb precisa do await
            await this._verificaEntrega(id)
            
            return await this.dao.deletaENtrega(id)
        } catch (error) {
            return {
                "mensagem": error.message,
                "erro" : true
            }
        }
    }

    atualizaEntrega = async (id, entrega)=>{
        try {
            // verifica registro existe
            await this._verificaEntrega(id)

            // utiliza a classe para validação dos dados recebidos
            const statusAtualizado = new StatusSchema(Status.entrega)

            return await this.dao.atualizaStatus(id, statusAtualizado)
        } catch (error) {
            return ({
                "mensagem": error.message,
                "erro" : true
            })
        }
    }

    //criar um metodo privado que verifica se o dado existe
    _verificaStatus = async (id)=>{
        const resposta = await this.dao.pegaUmStatusId(id)
        if(resposta.Status.length === 0){
            throw new Error(`Entrega de id ${id} não existe`)
        }
    }
}

export default Status