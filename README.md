# Quiz Race

Quiz Race é um jogo de perguntas e respostas desenvolvido em React. O objetivo do jogo é responder o máximo de perguntas possíveis dentro do tempo limite, acumulando pontos e competindo contra si mesmo para melhorar seu desempenho. O jogo abrange diversas categorias de conhecimento, proporcionando uma experiência divertida e educativa.

## Jogue Agora
Quer experimentar o Quiz Race sem precisar instalar nada? [Clique aqui](https://rcquizrace.netlify.app/)

## Índice

- [Funcionalidades](#funcionalidades)
- [Capturas de Tela](#capturas-de-tela)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Como Jogar](#como-jogar)

## Funcionalidades

- **Diversas Categorias de Perguntas**: Matemática, Inglês, Geografia, História, Conhecimentos Gerais e Futebol.
- **Sistema de Tempo Dinâmico**:
  - **Acertos**: Ao responder corretamente, o jogador ganha **3 segundos** extras.
  - **Erros**: Ao responder incorretamente, são descontados **10 segundos** do tempo restante.
  - **Pular Perguntas**: O jogador pode pular uma pergunta pressionando `0`, descontando **3 segundos** do tempo.
- **Atalhos de Teclado**: Responda rapidamente usando as teclas numéricas correspondentes às opções.
- **Interface Intuitiva**: Design simples e fácil de usar, focado na experiência do usuário.
- **Feedback Imediato**: Indicação visual de respostas corretas ou incorretas.
- **Controle de Pontuação**: Acompanhe seus acertos e tente bater seu recorde.

## Capturas de Tela

*Em breve...*

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **JavaScript (ES6+)**: Linguagem de programação utilizada no desenvolvimento.
- **HTML5 & CSS3**: Marcação e estilização do aplicativo.

## Instalação

Siga os passos abaixo para configurar o projeto localmente:

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/radc/quiz-race.git

2. **Navegue até o diretório do projeto:**:

   ```bash
   cd quiz-race

3. **Instale as dependências:**:

   ```bash
   npm install

4. **Inicie o aplicativo:**:

   ```bash
   npm start

5. **Acesse o Jogo:**:
Abra o navegador e acesse http://localhost:3000 para começar a jogar.

## Como Jogar

  - **Início do Jogo**: Clique no botão "Iniciar Jogo" na tela inicial.
  - **Responda as Perguntas**: 
    - Leia atentamente a pergunta e as opções disponíveis.
    - Você pode clicar na opção desejada ou utilizar as teclas numéricas para responder.
  - **Tempo**:
    - O jogo começa com 120 segundos.
    - Acertos: +3 segundos.
    - Erros: -10 segundos.
    - Pular: -3 segundos
  - **Final do Jogo**:
    - O jogo termina quando o tempo chega a zero ou todas as perguntas são respondidas.
    - Veja sua pontuação e tente novamente para melhorar seu desempenho.
