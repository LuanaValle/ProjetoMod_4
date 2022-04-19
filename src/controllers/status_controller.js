import Status from '../models/status.js'

const statusController = (app, bd)=>{
    const statusModel = new Status(bd)

    app.get('/status', async (req, res)=>{

        res.json(await statusModel.pegaStatusEntrega())

    })

    app.get('/status/email/:email', async (req, res)=>{
        // Pegando parametro que sera utilizado para o filtro
        const email = req.params.email

        // Pesquisa o usuario no banco de dados
        res.json(await statusModel.pegaStatusEntrega(email))
    })

    app.post('/status',async (req, res)=>{
        // Recebe o corpo da requisição
        const body = req.body
        res.json(await statusModel.inserestatus(body))  
    })

    app.delete('/status/id/:id', async (req, res)=>{
        // Pegando parametro que sera utilizado para o filtro
        const id = req.params.id

        // remove busca do banco de dados
        res.json(await statusModel.deletastatus(id))

    })

    app.put('/status/id/:id', async (req, res)=>{
        // Pegando parametro que sera utilizado para o filtro
        const id = req.params.id

        // Pegando o corpo da requisição com as informações que serão atualizados
        const body = req.body

        // Atualiza a busca no banco de dados
        res.json(await statusModel.atualizaStatusEntrega(id, body))
    })

}

export default statusController