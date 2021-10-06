# Criar usuário

Retorna os dados do usuário após criado

- URL  
   /users/new

- Método:  
   `Post`

- Variavéis do Body  
  `email`  
  `senha`

- Resposta de Sucesso:

  - Code: 201

- Resposta de Falha:

  - Code: 400  
    Content: `{ "erro": "Usuário já existe" }`
  - Code: 500
    Content: `{"erro": "Internal Server Error"}`
