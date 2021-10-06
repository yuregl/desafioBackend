# Obter todos os produtos

Retorna os dados do produto após criado

- URL  
   /products

- Método:  
   `Get`

- Variavéis do Headers  
  `authorization`: token de acesso

- Resposta de Sucesso:

  - Code: 200  
    Content: `[ { "id": 1, "nameProduct": "café 44", "imageUri": "/app/src/util/image/1633533368755-15854373", "priceProduct": 30 } ]`

- Resposta de Falha:

  - Code: 401
