# Gerênciamento de máquinas.

Aplicação backend construida em <a href="http://nodejs.org">Node.js</a> com <a href="https://www.typescriptlang.org/">Typescript</a>, para gerênciamento de máquinas em geral. O banco de dados escolhido para persistência de dados da aplicação foi o <a href="https://www.mongodb.com/pt-br">Mongodb</a>, e possui os seguintes campos de inserção: **name (nome da máquina), code (código de identificação), price (preço da maquina), description (descriçã da máqina);**. Neste projeto é possível realizar todas as operações que caracterizam uma aplicação crud - create, read, update delete.

## Teconogias utilizadas

- JavaScript
- Typescrip
- mongodb
- mongoose
- yarn
- express
- dotenv

## Iniciando aplicação

Para rodar esta aplicação localmente, clone este repositório execute o comando `yarn init`, renomeie o arquivo `.env.example` para `.env` e defina o endereço de conexão com seu mongodb e a porta de conexão com o servidor, exemplo:

```
DB_URL_CONNECTION= mongodb://localhost/meudb
PORT=3000
```

## Endpoints de conexão

Ao fazer requisições com com seu rest client, use os seguintes endpoints com suas respectivas rotas:
| endpoint | verbo HTTP | Descrição |
|------|------------|-----------|
| /register | POST | Cadastra uma nova máquina|
| /machines | GET | Lista as máquinas cadastradas no banco de dados |
| /machines/:id | GET | Lista máquina específica com base no id|
| /machines/:id | PATCH | Atualiza dados de máquina já cadastrada com base no id |
| /machines/:id | DELETE | Deleta máquina cadastrada com base no id |

## Enviando requisições

### Cadastar máquina.

Para cadastrar uma nova máquina faça uma requisição para o endereço correspondente com o verbo http adequado com os seguintes dados em **_json_**, por exemplo:

```
{
    "name":"parafusadeira",
    "code":127,
    "price":190.75,
    "description":"máquina rotativa do tipo leve"
}
```

### Listar todas as máquinas.

Considerando que seu servidor está rodando na porta **3000** faça uma requisição para o endereço **http://localhost:3000/machines**.
Deve-se ter como retorno um **json** contendo os registros das máquinas já cadastradas

### Listar máquina por id.

Para buscar uma máquina específica, é necessário passar seu id como parâmetro na url de requisição usando o verbo http adequado, por exemplo:

```
http://localhost:3000/machines/6300cf956bb3bcbab7731ed4
```

que deve retornar um **json** com a máquina do id correspondente

### Atualizar maquinas.

Faça uma requisição com o verbo http adequado para o endpoint correspondente, passando como parâmetro o id da máquina que se deseja atualizar, além disso envie um **json** com o dado que se deseja atualizar, por exemplo

```
{
    "price":754.5
}
```

### Remover máquinas.

faça uma requisição para o endpoint correspondente com o id da máquina que se deseja remover, exemplo:

```
http://localhost:3000/machines/6300cf956bb3bcbab7731ed4
```
