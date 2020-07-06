This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React Web com Arquitetura `Redux`

Treinamento BootCamp - Loja virtual - ReactJS <br>

### `Documentação` passo a passo

## Criando a aplicação do zero
yarn create react-app bootcamp_modulo07

## Excluir os comentários e o arquivo 
manifest.json

## Excluir esses e zelar para evitar os erros -  remover as referências
App.css
App.test.js
index.css
logo.svg
serviceWorker.js

## Gerando o arquivo '.editorConfig'
Botão direito nos arquivos em uma área livre e escolher 'Generator .editorConfig'
Será gerado o arquivo

## Adicionar o EsLint como dependência de desenvolvimento
yarn add eslint -D

## Inicializando o 'eslint'
yarn eslint --init <br/>
Responda as perguntas conforme abaixo: <br/>
? How would you like to use ESLint? To check syntax, find problems, and enforce code style<br/>
? What type of modules does your project use? JavaScript modules (import/export)<br/>
? Which framework does your project use? React<br/>
? Does your project use TypeScript? No<br/>
? Where does your code run? Browser<br/>
? How would you like to define a style for your project? Use a popular style guide<br/>
? Which style guide do you want to follow? Airbnb: https://github.com/airbnb/javascript
? What format do you want your config file to be in? JavaScript<br/>
Checking peerDependencies of eslint-config-airbnb@latest<br/>
Responsa 'Y' para tudo o que for questionado e aguarde a instalação.<br/>

## Instalando pretier - deixa o código mais bonito - eslint procura erros (ausência de pontos)
yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D

## Criar arquivo '.prettierrc'
{<br/>
  "singleQuote": true,<br/>
  "trainlingComma":"es5"<br/>
}<br/>

## Configurações do '.eslintrc.js'
extends: [<br/>
    'plugin:react/recommended',<br/>
    'airbnb',<br/>
    'prettier',<br/>
    'prettier/react',<br/>
  ],<br/>
parser: 'babel-eslint',<br/>
plugins: [<br/>
    'react',<br/>
    'prettier',<br/>
  ],<br/>
  rules: {<br/>
    'prettier/prettier':'error',<br/>
    'react/jsx-filename-extension' :[<br/>
      'warn',<br/>
      { extensions: ['.jsx','.js']}<br/>
    ],<br/>
    'import/prefer-default-export': 'off'<br/>
  },  <br/>


## Rodando a aplicação - essa configuração está no 'package.json'
yarn react-scripts start

## Instalar para fazer roteamento SPA
yarn add react-router-dom

## Instalar 'styled-components'
yarn add styled-components

## Usando fonte 'Roboto'
https://fonts.google.com/specimen/Roboto

## Aplicando ao CSS
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

## Instalando ícones
yarn add react-icons

## Instalando a bilbioteca - cores dentro do javascript
yarn add polished

## Criando api fake
https://github.com/typicode/json-server
Permite criar uma API fake enquanto a API nova não está pronta

## Instalando o Json-Server de forma global
yarn global add json-server<br/>
Após instalado foi criado um arquivo chamado 'server.json' com os produtos e foi colocado no raiz do projeto

## Instalando o axios
yarn add axios

## Executando o server fake com aquele arquivo json gerado - api fake
json-server server.json -p 3333 -w<br/>
Se pode acessar a api fake através do endereço no navegador 'http://localhost:3333/products'<br/>

## Instalando o 'Redux'
yarn add redux react-redux

## Instalando 'reactotron'
yarn add reactotron-react-js reactotron-redux

## Instalando 'immer' - gerencia melhor objetos/arrays imutáveis
https://github.com/immerjs/immer
yarn add immer

## Instalando 'redux-saga' - middleware que interceptar actions
yarn add redux-saga

## Instalando 'reactotron-redux-saga' para integrar saga com reactotron
yarn add reactotron-redux-saga

## Instalando 'react-toastify' para exibir melhor as mensagens
yarn add react-toastify

## Instalando 'history' - controlar a history api que o 'react-router-dom' utiliza
yarn add history

## Instalando plugin do `eslint` próprio para usar os hooks
yarn add eslint-plugin-react-hooks -D
 
## Repositório
C:\Temp\Bootcamp2019\bootcamp_modulo07

## Iniciar a aplicação
yarn react-scripts start

## Não esquecer de subir o json-server
json-server server.json -p 3333 -w

/** Esse history não funcionou muito bem, mas segue o baile, era só para direcionar para a tela de cart mesmo */
 

