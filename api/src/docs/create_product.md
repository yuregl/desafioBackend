# Criar Produto

Retorna os dados do produto após criado

- URL  
   /products/new

- Método:  
   `Post do tipo Multipart`

- Variavéis do Body  
  `nameProduct`: nome do produto  
  `media`: imagem a ser salva  
  `priceProduct`: Valor do produto  
  `user_id`: id do usuário

- Variavéis do Header  
  `authorization`: token

- Resposta de Sucesso:

  - Code: 200  
    Content: `{ "nameProduct": "café 44", "imageUri": "/app/src/util/image/1633533368755-15854373", "priceProduct": "30" }`

- Resposta de Falha:

  - Code: 401
