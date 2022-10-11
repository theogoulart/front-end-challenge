# Promobit Front-end Challenge

Bem-vindos ao projeto desafio para front-end do Promobit! O projeto consiste numa listagem de filmes populares alimentada pela API [`GET /movie/popular`](https://developers.themoviedb.org/3/movies/get-popular-movies) do TMDB (The Movie Database). É possível paginar e acessar cada filme individualmente para ver mais detalhes.

## Iniciando o projeto

1. Baixe ou clone o projeto na sua máquina.
2. Acesse a pasta /app dentro da raíz do projeto
3. Crie um arquivo `.env` na pasta `app` colocando sua [chave de API do TMDB](https://developers.themoviedb.org/3/getting-started/introduction)
```
REACT_APP_API_KEY=<<chave_da_api>>
```
4. Usando um terminal, acesse o diretório /app e digite `npm start`

## Acessando o APP

Após iniciar o projeto o APP poderá ser acessado pelo seu browser no endereço `http://localhost:3000/`

## Rotas

- `/`, `/page/<número_da_página>`: os filmes mais populares com paginação
- `?genres=<ids_dos_generos_separados_por_vírgula>`: query string adicionada no final da URL para filtrar generos por id
- `/movie/<id_do_filme>`: página com detalhes de um filme

## Considerações

- Para que o APP se torne seguro para deploy devemos criar uma API que abstraia a chave de acesso da API do TMDB.
- O APP foi criado com algumas libs como [create-react-app](https://create-react-app.dev/) para iniciar o projeto, [tailwhind](https://tailwindcss.com/) (CSS) e [React Router](https://reactrouter.com/en/v6.3.0) para as rotas.

Obrigado e desfrute!
