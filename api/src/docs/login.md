# Login

Retorna os dados do usuário apos fazer login

- URL  
   /login

- Método:  
   `Post`

- Variavéis do Body  
  `email`  
  `senha`

- Resposta de Sucesso:

  - Code: 200  
     Content: `{ "email": "teste@admin.com", "id": 1, "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQGFkbWluLmNvbSIsImlhdCI6MTYzMzUyNTUzNywiZXhwIjoxNjMzNjExOTM3fQ.ylXA7UTMIYS51ic7cNCFHEoou-U93HYw-PuY3fFQ1vE" }`

- Resposta de Falha:

  - Code: 400  
     Content: `{ "error": "Senha incorreta" }`
