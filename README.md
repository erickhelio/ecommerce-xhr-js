# Exemplo de Requisição Assíncrona com XMLHttpRequest
# Projeto proposto durante os estudos na Universidade de Vila Velha.

Este projeto demonstra o uso do objeto `XMLHttpRequest` para consumir uma API REST de forma assíncrona.
A API usada é a DummyJSON (https://dummyjson.com/), que fornece dados fictícios de produtos (nome, preço, descrição, imagem).

## Como usar
1. Clone o repositório:
   ```bash
   git clone https://github.com/erickhelio/ecommerce-xhr-js.git

2. Entre na Pasta do Projeto: ecommerce-xhr
3. Abra o arquivo index.html no navegador ou usar a extensão Live Server do VS Code

## Funcionamento
1. Na página inicial, há um botão "Carregar Produtos". 
2. Ao clicar, o código JavaScript faz uma requisição GET para a API: (https://dummyjson.com/products)
3. O retorno vem em JSON, contendo uma lista de produtos.
