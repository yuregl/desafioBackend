# Criar pedido

Retorna os dados do pedido apos criar um novo pedido

- URL  
   /order/new

- Método:  
   `Post`

- Variavéis do Body  
  `note`: Observação  
  `user_id`: id do usuário  
  `price_total`
  `products`: array com os produtos id e a quatidade de produtos  
  `card_number`: os 16 número do cartão

- Variavéis do Header  
  `authorization`: token

- Resposta de Sucesso:

  - Code: 200  
     Content: `{ "order": { "note": "algo", "user_id": 2, "price_total": 54.13, "id": 12, "created_at": "2021-10-05T22:12:06.000Z" }, "productsOrder": [ { "order_id": 12, "products_id": 1, "quantity_products": 2 } ], "transactions": { "card_number": "1234123412341234", "order_id": 12, "id": 8, "created_at": "2021-10-05T22:12:06.000Z" } }`

- Resposta de Falha:

  - Code: 401 caso não está com o token correto
  - Code: 400
    Content: `{ "error": "Unexpected token ' in JSON at position 31" }` Caso os parametros passado sejam inválidos.
  - Code: `[ { "field": "card_number", "errors": [ "card_number must be longer than or equal to 16 characters" ] } ]` Caso os parametros não passem na validação
