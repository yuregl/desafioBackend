# Busca todas as transações

Retorna os dados das transações

- URL  
   /transactions/list/?id=1

- Método:  
   `Get`

- Variavéis do Header  
  `authorization`: token

- Query Params  
  `id`: id do usuário

- Resposta de Sucesso:

  - Code: 200  
     Content: `[ { "id": 1, "card_number": "1234123412341234", "order_id": 5, "created_at": "2021-10-05T12:48:04.000Z", "order": { "id": 5, "note": "algo", "user_id": 1, "price_total": 54.13, "created_at": "2021-10-05T12:48:04.000Z" } }, { "id": 2, "card_number": "1234123412341234", "order_id": 6, "created_at": "2021-10-05T12:48:17.000Z", "order": { "id": 6, "note": "algo", "user_id": 1, "price_total": 54.13, "created_at": "2021-10-05T12:48:17.000Z" } }]`

- Resposta de Falha:

  - Code: 401
