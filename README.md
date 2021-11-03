# Bem vindo ao repositório do Paint Calculator!

Esta aplicação web tem como objetivo ajudar o usuário a calcular a quantidade de tinta necessária para pintar um cômodo de sua casa,
a aplicação espera que seja informada as medidas (Largura x Altura) e o número de portas e janelas para cada parede. Utilizando as informações 
fornecidas pelo usuário a aplicação realiza validações e realiza o cálculo da área útil a ser pintada, quantos litros de tinta é necessário e 
quais as latas de tinta deverão ser compradas

Este projeto foi criado utilizando o [Create React App](https://github.com/facebook/create-react-app).

## Regras de negócio

1. Nenhuma parede pode ter menos de 1 metro nem mais de 15 metros
2. O total de área das portas e janelas deve ser no máximo 50% da área de parede
3. A altura da parede deve ser, no mínimo, 30 centímetros maior que a altura da porta.
4. Cada janela possui as medidas: 2,00 x 1,20 mtos
5. Cada porta possui as medidas: 0,80 x 1,90
6. Cada litro de tinta é capaz de pintar 5 metros quadrados.
7. As variações de tamanho das latas de tinta são: 0,5 L - 2,5 L - 3,6 L - 18 L

## Como instalar e executar o projeto ?

1. Crie uma pasta no seu computador
2. Abra o terminal dentro da pasta que foi criada
3. Clone o repositório na pasta local que você criou (necessário ter o [git](https://git-scm.com/) instalado):
    * `git clone https://github.com/pistorio3/digital-republic-challenge.git`.
4. Entre na pasta do repositório que você acabou de clonar: 
    * `cd digital-republic-challenge`
5. Digite no terminal o seguinte comando (necessário ter o [VS Code](https://code.visualstudio.com/) instalado):
    * `code .`
6. Após abrir a interface do VS Code, no terminal integrado verifique se você está na pasta do projeto
7. Instale as dependências do projeto com o seguinte comando 
    * `npm install`

## Comandos disponíveis 

### `npm start`

Executa a aplicação no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para ver a aplicação rodando no navegador.

A aplicação recarrega automaticamente quando mudanças são feitas no código.\
Para visualizar erros de lint ou da linguagem utilize o console.

### `npm test`

Executa a suite de testes unitários da aplicação. \
Saiba mais em [executando testes](https://facebook.github.io/create-react-app/docs/running-tests).
