// A classe DAO é responsável por acessar nosso banco de dados
// Cada arquivo DAO é responsável por uma entidade

class StatusDAO{

    constructor(db){
        this.db = db
    }

    // Metodo responsável pelo acesso aos bancos de dados
    pegaStatusEntrega = ()=>{
        // O método ira retornar a promise, que será excutada (com .then e .catch)
        // no controller
        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM STATUS', (error, rows)=>{
                if(error){
                    // No reject retorna só o erro para deixar mais facil tratar
                    reject(error)
                }else{
                    resolve({
                        "status": rows,
                        "erro": false
                    })
                }
            })
        })
    }

    pegaStatusEntrega = (id)=>{
        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM STATUS WHERE ID = ID',
            id,
            (error, rows)=>{
                if(error){
                    reject(error)
                }else{
                    resolve({
                        "status": rows,
                        "erro": false
                    })
                }
            })
        })
    }

    insereStatus = (novoStatus) =>{

        return new Promise((resolve, reject)=>{
            this.db.run("INSERT INTO STATUS (STATUS, LOCALIZACAO) VALUES (?, ?)",
                novoStatus.LOCALIZACAO, 
                (error)=>{
                if(error){
                    reject(error)
                }else{
                    resolve({
                        "mensagem": `Entrega ${novoStatus.LOCALIZACAO} exibido com sucesso`,
                        "status": novoStatus,
                        "erro": false
                    })
                }
            })
        })

    }

    deletaStatus = (id)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('DELETE FROM STATUS WHERE ID = ?',
            id,
            (error)=>{
                if(error){
                    reject(error)
                }else{
                    resolve({
                        "status": `Status de id ${id} deletado com sucesso`,
                        "erro": false
                    })
                }
            })
        })
    }

    atualizaStatus = (id, status)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('UPDATE STATUS SET LOCALIZACAO = STATUS',
            status.LOCALIZACAO,
            "id",
            (error)=>{
                if(error){
                    reject(error)
                }else{
                    resolve({
                        "mensagem": `Localização de id ${id} atualizado com sucesso`,
                        "status": status,
                        "erro": false
                    })
                }
            })
        })
    }

}

export default StatusDAO