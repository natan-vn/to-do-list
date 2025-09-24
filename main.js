//Importar o modulo readline
const readline = require("readline");

//Configura a interface (rl)
const rl = readline.createInterface({
  input: process.stdin, // entrada --> teclado
  output: process.stdout, // saída --> terminal
});

//Criar a array de tarefas, cada tarefa será um objeto:
const tarefas = [];

//Exibir o menu e controle de fluxo de opções do menu:
function mostrarMenu() {
  console.log(` 
  #########################
  ###   To-Do List JS   ###
  #########################
  [1] Listar todas as tarefas
  [2] Adicionar uma nova tarefa
  [3] Marcar uma tarefa como concluída
  [4] Remover uma tarefa
  [5] Sair `);

  rl.question("Escolha uma opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        listarTarefas();
        break;
      case "2":
        adicionarTarefa();
        break;
      case "3":
        marcarComoConcluida();
        break;
      case "4":
        removerTarefa();
        break;
      case "5":
        console.log("Até a próxima! Fechando o programa.");
        rl.close(); // Fecha a interface readline
        break;
      default:
        console.log("Opção inválida! Tente novamente.");
        mostrarMenu(); // Volta ao menu
        break;
    }
  });
}

function listarTarefas() {
  if (tarefas.length === 0) {
    console.log("Sua lista está vazia. Adicione uma tarefa");
  } else {
    tarefas.forEach((tarefa, index) => {
      const status = tarefa.concluida ? "[✓ CONCLUÍDA]" : "[ ] PENDENTE";
      console.log(`${index + 1}. ${tarefa.titulo} - ${status}`);
    });
  }
  mostrarMenu();
}

function adicionarTarefa() {
  rl.question("Digite o título da sua nova tarefa: ", (titulo) => {
    if (titulo.trim() !== "") {
      //remove espaço em branco
      tarefas.push({
        titulo: titulo,
        concluida: false,
      });
      console.log("Tarefa adicionada com sucesso!");
    } else {
      console.log("O titulo da tarefa não pode ser vazio!");
    }
    mostrarMenu();
  });
}

function marcarComoConcluida() {
  if (tarefas.length === 0) {
    console.log("Não há tarefas na sua lista.");
    return mostrarMenu();
  }
  console.log("\n### Qual tarefa deseja marcar como concluída? ###");
  tarefas.forEach((tarefa, index) => {
    const status = tarefa.concluida ? "[✓ CONCLUÍDA]" : "[ ] PENDENTE";
    console.log(`${index + 1}. ${tarefa.titulo} - ${status}`);
  });
  rl.question("Digite o número da tarefa: ", (numero) => {
    const index = parseInt(numero) - 1;
    if (index >= 0 && index < tarefas.length) {
      if (tarefas[index].concluida) {
        console.log("Aviso: Esta tarefa já estava concluída.");
      } else {
        tarefas[index].concluida = true;
        console.log("Tarefa marcada como concluída!");
      }
    } else {
      console.log("Número de tarefa inválido.");
    }
    mostrarMenu();
  });
}

function removerTarefa() {
  if (tarefas.length === 0) {
    console.log("Não há tarefas para remover");
    return mostrarMenu();
  }
  tarefas.forEach((tarefa, index) => {
    const status = tarefa.concluida ? "[✓ CONCLUÍDA]" : "[ ] PENDENTE";
    console.log(`${index + 1}. ${tarefa.titulo} - ${status}`);
  });
  rl.question("Digite o número da tarefa a ser removida: ", (numero) => {
    const index = parseInt(numero) - 1;
    if (index >= 0 && index < tarefas.length) {
      tarefas.splice(index, 1);
      console.log("Tarefa removida com sucesso!");
    } else {
      console.log("Número de tarefa inválido.");
    }
    mostrarMenu();
  });
}

console.log("Iniciando a To-Do List...");
mostrarMenu();
