# crud-node-with-database-firebase
- CRUD node.js + firebase database


- you can run the project using "docker-compose up"
- the web app will start on "http://localhost:8080/"

- To get and post data you can use Postman app 

### GET USERS
GET http://localhost:8080/users

### GET USER
GET http://localhost:8080/users/cqojQV8QaHv2FB3whmQF

### ADD A USER
POST http://localhost:8080/create
Content-Type: application/json

{
    "email": "Malek@codepages.co",
    "firstName": "Malek",
    "lastName": "Karim"
}

### DELETE A USER
DELETE http://localhost:8080/delete/sO5aZW9ZBCVgtEfEibWv

###### #######
### THANKS ###
###### #######