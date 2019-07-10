## Multi-banco

#### instaler o Docker e o configure

### Docker

###### pega a imagem do postgres e a coloca na porta 4532 e roda em segundo plano
`docker run  --name postgres  -e POSTGRES_USER=user  -e POSTGRES_PASSWORD=123  -e POSTGRES_DB=herois  -p 5432:5432  -d  postgres `

###### mostra os container que estao rodando
`docker ps`

###### comando para entrar no sistema dentro do container
`docker exec -it postgres /bin/bash`

###### pega a imagem do adminer uma inteface grafica para voce usa o postgres
`docker run --name adminer -p 8080:8080 --link postgres:postgres -d  adminer`

[Links para adminer](http://localhost:8080)

####### apos isso coloque as credencias

- sistema     = postgreSQL
- Servido     = postgres
- Usuaro      = user
- Senha       = 123
- basededadod = herois


### Mongo

###### pega a imagem do mongo e a coloca na porta 27017 e roda em segundo plano
`docker run  --name mongodb  -e MONGO_INITDB_ROOT_USERNAME=admin  -e MONGO_INITDB_ROOT_PASSWORD=123 -p 27017:27017  -d  mongo:4`

###### pega a imagem do mongoclient uma inteface grafica para voce usa o mongo
`docker run --name mongoclient -p 3000:3000 --link mongodb:mongodb -d  mongoclient/mongoclient`

[Links para mongoclient](http://localhost:3000)

###### apos isso va em conection crie uma nova conexao 


- addName       = mongodb
- Host/Port     = mongodb
- Database Name = admin
###### va na aba Authentication 

- Authentication Type = Scram-Sha-1
- Username            = admin
- Password            = 123
- Authentication DB   = admin


###### gera um usario com permissões de leituras e escrita
`docker exec -it mongodb mongo --host localhost -u admin -p 123 --authenticationDatabase admin --eval "db.getSiblingDB('herois').createUser({user:'helio', pwd:'123', roles:[{role:'readWrite', db: 'herois'}]})"`