# 📝 To-Do List JS

## Descrição

Este projeto é uma aplicação de linha de comando (CLI) desenvolvida em JavaScript para gerenciar uma lista de tarefas (To-Do List). O objetivo é permitir que o usuário adicione, liste, marque como concluída e remova tarefas de forma interativa, utilizando o módulo `readline` do Node.js. Este código foi criado com propósito de estudo, demonstrando conceitos como manipulação de arrays, entrada/saída de dados e controle de fluxo em JavaScript.

## ⚙️ Funcionalidades

- **Listar tarefas:** Exibe todas as tarefas com seus respectivos status (pendente ou concluída).
- **Adicionar tarefa:** Permite adicionar uma nova tarefa com um título.
- **Marcar como concluída:** Marca uma tarefa existente como concluída.
- **Remover tarefa:** Remove uma tarefa da lista.
- **Sair:** Encerra o programa.

## 🛠️ Pré-requisitos

-  Node.js instalado na máquina.

## ▶️ Como executar

1. Certifique-se de ter o Node.js instalado.
2. Crie um arquivo com o código fornecido (por exemplo, `todo.js`).
3. Abra o terminal na pasta onde o arquivo está salvo.
4. Execute o comando:

	```bash
	npm start
	```

5. Siga as instruções exibidas no terminal para interagir com o menu.

## 🧩 Estrutura do Código

- **Módulo readline:** Utilizado para capturar entradas do usuário via teclado e exibir saídas no terminal.
- **Array tarefas:** Armazena as tarefas como objetos com propriedades `titulo` (string) e `concluida` (boolean).
- **Função mostrarMenu:** Exibe o menu principal e gerencia o fluxo de opções.
- **Funções auxiliares:**
	- `listarTarefas`: Lista todas as tarefas com seus status.
	- `adicionarTarefa`: Adiciona uma nova tarefa à lista.
	- `marcarComoConcluida`: Altera o status de uma tarefa para concluída.
	- `removerTarefa`: Remove uma tarefa da lista.

## 💡 Exemplo de Uso

Ao executar o programa, o menu será exibido:

```
#########################
###  To-Do List JS   ###
#########################
[1] Listar todas as tarefas
[2] Adicionar uma nova tarefa
[3] Marcar uma tarefa como concluída
[4] Remover uma tarefa
[5] Sair
```
## Notas

- ⚠️ O programa valida entradas, como títulos vazios ou números de tarefas inválidos, exibindo mensagens de erro apropriadas.
- 📚 O código é ideal para estudos iniciais em JavaScript, pois cobre conceitos fundamentais como arrays, objetos, funções, e entrada/saída.
