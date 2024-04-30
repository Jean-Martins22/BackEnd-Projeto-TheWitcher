# API do TheWitcher - NodeJs

<img src="https://img.ibxk.com.br/2015/04/13/13161603163873.jpg?w=1120&h=420&mode=crop&scale=both" alt="TheWitcher Logo" />

> API criada para estudar conceitos de back-end, utilizando a linguagem de programação JavaScript e o banco de dados MongoDB. Nessa API eu crio um CRUD completo de personagens da saga TheWitcher.

Para utilizar o projeto faça o dowload do arquivo zip, ou faça o clone em seu computador utilizando o Git. Execute o comando `npm i` dentro da pasta do projeto em seu computador(a pasta que contém o arquivo package.json), para baixar as dependencias do projeto.

## Executando o projeto

*Essa API utiliza o mongodb como banco de dados e o mongoose como ODM, então antes de testar a API certifique se você possui o MongoDb instalado em seu computador(https://www.mongodb.com/try/download/community).*

Além disso, você precisa criar o arquivo .env com a url do seu banco, *utilize o arquivo .env.exemple para criar o seu*. Esse é um exemplo de string de conexão com o banco de dados: mongodb://localhost:27017/db_thewitcher.

Agora você pode executar o projeto: 
* Para executar o projeto com o nodemon, digite no terminal: 
```bash
npm run dev
```
* Para executar o projeto com o node, digite no terminal: 
```bash
npm start
```
## Testando a API

Você pode utilizar as ferramentas:

* Postman
* Insomnia
* Thunder Client (plugin no vsCode)

Exemplos de URLs: 
* Essa é a URL de teste padrão: http://localhost:3000/personagens
* Para buscar por ID, Editar ou Apagar, insira o ID na URL: http://localhost:3000/personagens/5
* Para fazer uma busca com query string, esse é um exemplo de URL: http://localhost:3000/personagens/filter?identidade=Gerald

> Nesse site você consegue encontrar informações de personagens para testar os end-points (Falta a imagem): http://witcher3api.com/

Essa é a estrutura JSON para fazer o POST e o PUT:

```json
{
    "nome": "Geralt de Rivia",
    "genero": "Masculino",
    "profissao": "Bruxo",
    "imagem": "https://static.wixstatic.com/media/5f1962_62352a2a16f844588fa39c4ea460f1d1~mv2.jpg/v1/fill/w_800,h_432,al_c,q_90/5f1962_62352a2a16f844588fa39c4ea460f1d1~mv2.jpg"
}
```

Vídeo da API funcionando: https://youtu.be/kF1dlKioXRI?si=LwFeY9dtf5DgIn5r

Obrigado por testar e utilizar minha API, volte sempre!
