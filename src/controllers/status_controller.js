import StatusDAO from '../DAO/StatusDAO.js'
import Status from '../models/status.js'

const StatusController = (app, bd)=>{
    const statusModel = new StatusDAO(bd)

    app.get('/status', async (req, res)=>{

        res.json(await statusModel.pegaStatusEntrega())

    })

    //app.get('/status/email/:email', async (req, res)=>{
        // Pegando parametro que sera utilizado para o filtro
        //const email = req.params.email

        // Pesquisa o usuario no banco de dados
       // res.json(await statusModel.pegaStatusEntrega(email))
   // })

    app.post('/status',async (req, res)=>{
        // Recebe o corpo da requisição
        const body = req.body
        const novoStatus = new Status (body.STATUS, body.LOCALIZACAO)
        statusModel.insereStatus (novoStatus)
        res.status(200).json (novoStatus)
    })

    app.delete('/status/id/:id', async (req, res)=>{
        // Pegando parametro que sera utilizado para o filtro
        const id = req.params.id

        // remove busca do banco de dados
        await statusModel.deletaStatus(id)
        res.status(200).json ()

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

export default StatusController