# Transportadora - Mód 4

## Objetivo
Este Projeto tem como objetivo criar uma API RESful de uma Transportadora, onde será possível aplicar as operações CRUD na entidade Status

### Pré-Requisitos
   Node.js
   NPM v.8.3.1
### Pacotes Utilizados
   Express v.4.17.3
   Nodemon v.2.0.15
   SQlite v.5.0.2
   Cors v.2.8.5
  
### Instalação
   Abra o terminal/Powershell e rode os comandos:
   Clonando o repositório:
   git clone git@github.com:LuanaValle/ProjetoMod_4.git

   Entrando na pasta:
   cd Transportadora

   Instalando os pacotes:
   npm install

   Criando o banco de dados:
   npm run database

   Iniciando o servidor:
   npm start

### Rotas implementadas
    * GET /status
        Schema da resposta
            {
                pegaStatusEntrega: [
                    {
                        "status" : <String>
                    }
                ],
                erro : <Boleano>
            }

    * GET /status/email/{email}
     Schema da resposta
            {
                pegaStatusEntrega: [
                    {
                        "status" : <String>
                    }
                ],
                erro : <Boleano>
            }



    * POST /status
        Schema da requisição
            {
                "status" : <String>
            }

        Schema da resposta
            {
                mensagem : <String>
                pegaStatusEntrega: {
                    "status" : <String>
                },
                erro : <Boleano>
            }


    * PUT //status/id/{id}
    Schema da requisição
        {
            "status" : <String>
        }
    
    Schema da resposta
        {
            mensagem : <String>
            pegaStatusEntrega: {
                "status" : <String>
            },
            erro: <Boleano>    
        }

    * DELETE /status/id/{id}
    Schema da resposta
        {
            mensagem : <String>
            erro: <Boleano>    
        }
