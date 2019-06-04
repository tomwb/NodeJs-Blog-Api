## NodeJs Api

links de referencia

https://imasters.com.br/front-end/criando-uma-api-node-em-10-passos-com-express-js
https://www.robinwieruch.de/mongodb-express-setup-tutorial/
https://grokonez.com/node-js/mongoose-many-to-many-related-models-with-nodejs-express-mongodb

### Api

`GET` /posts
```
Response
{
    "success": true,
    "data": [
        {
            "id": "5cf6d669ea228115c9c883c0",
            "title": "title",
            "content": "content",
            "comments": [
                {
                    "id": "5cf6d6d4d561541657063308",
                    "name": "john ho",
                    "email": "teste@teste.com",
                    "message": "2 teste de comentario"
                }
            ]
        }
    ]
}
```

`GET` /posts/:id
```
Response
{
    "success": true,
    "data": {
        "id": "5cf6d669ea228115c9c883c0",
        "title": "title",
        "content": "content",
        "comments": [
            {
                "id": "5cf6d6d4d561541657063308",
                "name": "john ho",
                "email": "teste@teste.com",
                "message": "2 teste de comentario"
            }
        ]
    }
}
```

`POST` /posts
```
Request
{
    "title": "title",
    "content": "content"
}

Response
{
    "success": true,
    "message": "Post criado com sucesso"
}
```

`PUT` /posts/:id
```
Request
{
    "title": "title",
    "content": "content"
}

Response
{
    "success": true,
    "message": "Post editado com sucesso"
}
```

`DELETE` /posts/:id
```
Response
{
    "success": true,
    "message": "Post removido com sucesso"
}
```

`POST` /posts/:id/comment
```
Request
{
    "name": "john ho",
    "email": "teste@teste.com",
    "message": "2 teste de comentario"
}

Response
{
    "success": true,
    "message": "Comentario criado com sucesso"
}
``