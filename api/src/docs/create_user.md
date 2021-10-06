# Criar usuário

Retorna os dados do usuário após criado

- URL  
   /user/new

- Método:  
   `Post`

- Variavéis do Body  
  `email`  
  `senha`

- Resposta de Sucesso:

  - Code: 200  
    Content: `{ "email": "yure123@hotmail.com", "senha": "$2b$10$.T8cgebBCxlC/1xa.EfS6e98vkH9WLptYcBEWWov.FYbnW6I7T2Wq", "isAdmin": false }`

- Resposta de Falha:

  - Code: 400  
    Content: `{ "erro": "Usuário já existe" }`
