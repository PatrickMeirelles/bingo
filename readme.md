# Bingo API - Jogo de Bingo com Node.js, Express e TypeScript

Bem-vindo ao **Bingo API**! Este projeto fornece uma API para um jogo de bingo usando **Node.js**, **Express** e **TypeScript**.

Com essa API, você pode simular o sorteio de números de bingo, acompanhar os números sorteados e até zerar o estado do jogo a qualquer momento. A API oferece funcionalidades como sortear números, exibir os números sorteados, agrupar esses números por letras (B, I, N, G, O) e manter um histórico dos últimos números sorteados.

---

## Funcionalidades

- **Sortear número aleatório**: Sorteia um número de bingo entre 1 e 75.
- **Agrupar números por letra**: Os números sorteados são agrupados nas categorias: B (1-15), I (16-30), N (31-45), G (46-60) e O (61-75).
- **Visualizar números sorteados**: Você pode obter todos os números sorteados até o momento, agrupados por letra.
- **Últimos 10 números sorteados**: A API retorna os últimos 10 números sorteados, em ordem inversa (mais recentes primeiro).
- **Resetar o jogo**: Apaga todos os números sorteados, permitindo começar uma nova partida.

---

## Tecnologias Usadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework web minimalista para Node.js.
- **TypeScript**: Superconjunto do JavaScript que adiciona tipagem estática, melhorando a qualidade do código.
- **NPM**: Gerenciador de pacotes para Node.js.

---

## Como Rodar o Projeto

### 1. Clonar o repositório

Primeiro, clone este repositório para o seu computador:

```bash
git clone https://github.com/seu-usuario/bingo-api.git
cd bingo-api
```

### 2. Instalar dependências

Instale as dependências do projeto utilizando o NPM:

```bash
npm install
```

### 3. Rodar o servidor

Inicie o servidor localmente:

```bash
npm run dev
```

O servidor estará rodando na porta `3000` por padrão. Você pode acessar a API através de `http://localhost:3000`.

---

## Endpoints da API

### 1. **Sortear um número de bingo**

- **URL**: `/api/sortear`
- **Método**: `GET`
- **Resposta**:
  ```json
  {
    "success": true,
    "message": "Número aleatório gerado com sucesso",
    "data": {
      "number": 15,
      "letter": "B"
    }
  }
  ```

Este endpoint sorteia um número aleatório entre 1 e 75 e retorna o número sorteado junto com a letra correspondente (B, I, N, G, O).

### 2. **Visualizar os números sorteados agrupados por letra**

- **URL**: `/api/numeros-sorteados`
- **Método**: `GET`
- **Resposta**:
  ```json
  {
    "success": true,
    "message": "Lista de números sorteados agrupados por letra",
    "data": {
      "B": [1, 4, 6, 15],
      "I": [19, 23, 25],
      "N": [],
      "G": [],
      "O": []
    }
  }
  ```

Este endpoint retorna todos os números sorteados até o momento, agrupados por letra (B, I, N, G, O).

### 3. **Visualizar os últimos 10 números sorteados**

- **URL**: `/api/ultimos-numeros`
- **Método**: `GET`
- **Resposta**:
  ```json
  {
    "success": true,
    "message": "Lista de números sorteados agrupados por letra, com os últimos 10 números invertidos",
    "data": {
      "groupedNumbers": {
        "B": [1, 4, 6, 15],
        "I": [19, 23, 25],
        "N": [],
        "G": [],
        "O": []
      },
      "last10Numbers": [25, 23, 19, 15, 6, 4, 1]
    }
  }
  ```

Este endpoint retorna os números sorteados agrupados por letra **e** os últimos 10 números sorteados, com os mais recentes primeiro.

### 4. **Zerar o jogo**

- **URL**: `/api/zerar`
- **Método**: `DELETE`
- **Resposta**:
  ```json
  {
    "success": true,
    "message": "O jogo foi zerado, todos os números foram apagados."
  }
  ```

Este endpoint reseta o jogo, apagando todos os números sorteados até o momento, permitindo iniciar um novo jogo.

---

## Estrutura do Projeto

Aqui está uma visão geral da estrutura de pastas do projeto:

```
/bingo-api
  ├── /src
  │   ├── /controllers
  │   │   └── bingoController.ts    # Controladores das rotas
  │   ├── /routes
  │   │   └── bingoRoutes.ts       # Definição das rotas da API
  │   ├── /utils
  │   │   └── bingoUtils.ts        # Funções auxiliares como sorteio de números
  │   └── server.ts                # Arquivo principal para inicializar o servidor
  ├── /node_modules
  ├── /package.json
  └── /tsconfig.json
```

- **/controllers**: Contém as funções que controlam a lógica das rotas.
- **/routes**: Define as rotas da API.
- **/utils**: Funções auxiliares para operações como sorteio de números.

---

## Contribuindo

Se você gostaria de contribuir para o projeto, siga os seguintes passos:

1. Faça um **fork** deste repositório.
2. Crie uma **branch** para sua modificação:
   ```bash
   git checkout -b minha-modificacao
   ```
3. Faça suas alterações.
4. Faça o **commit** das alterações:
   ```bash
   git commit -am 'Descrição da modificação'
   ```
5. Envie para o seu repositório remoto:
   ```bash
   git push origin minha-modificacao
   ```
6. Abra um **pull request** para este repositório.

---

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).

---

### Agradecimentos

Obrigado por conferir o **Bingo API**! Se você tiver alguma dúvida ou sugestão, fique à vontade para abrir uma issue ou enviar um pull request.

--- 

Esse README fornece uma explicação clara sobre o propósito da API, como configurá-la e interagir com ela. A estrutura foi pensada para ser simples e amigável, ajudando novos usuários a entender rapidamente como rodar e utilizar a API.