/*Seleção de elementos*/ 
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

let oldInputValue; // Vai guardar o nome antigo de uma tarefa;

/*Funções*/
const saveTodo = (text) => {
  const todo = document.createElement("div"); // cria uma tag div no document
  todo.classList.add("todo"); // adiciona a classe "todo" ao elemento da variável. No caso, a div

  const todoTitle = document.createElement("h3");
  todoTitle.innerText = text; // Adiciona o texto (nome da tarefa) no conteúdo tag h3
  todo.appendChild(todoTitle); // Adiciona o todoTitle como filho do todo. o h3 entra na div

  const doneBtn = document.createElement("button");
  doneBtn.classList.add("finish-todo");
  doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'; //Adiciona conteúdo HTML declarado
  todo.appendChild(doneBtn);

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-todo");
  editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
  todo.appendChild(editBtn);
  
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-todo");
  removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  todo.appendChild(removeBtn);

  todoList.appendChild(todo); //Adiciona a tarefa na lista de tarefas
  todoInput.value = "";
  todoInput.focus();
};

const toggleForms = () => {
  editForm.classList.toggle("hide");
  todoForm.classList.toggle("hide");
  todoList.classList.toggle("hide");
};

const updateTodo = (text) => {
  const todos = document.querySelectorAll(".todo");

  todos.forEach((todo) => {
    let todoTitle = todo.querySelector("h3");

    if(todoTitle.innerText === oldInputValue) {
      todoTitle.innerText = text;
    }
  });
};

/*Eventos*/
todoForm.addEventListener("submit", (e) => {
  e.preventDefault(); /*vai fazer com que o formulário não seja enviado pro backend quando pressionar o btn */

  const inputValue = todoInput.value;

  if(inputValue) {
    saveTodo(inputValue);
    //save todo
  }
});

//evento global para saber qual elemento foi clicado
document.addEventListener("click", (e) => {
  const targetElement = e.target;
  const parentElement = targetElement.closest("div"); // seleciona o elemento pai div mais próximo
  let todoTitle; // Essa variavel vai guardar o título das tarefas para fazer alterações nelas

  // Guarda o título da tarefa se o elemento tiver uma tag h3 dentro dele
  if(parentElement && parentElement.querySelector("h3")) {
    todoTitle = parentElement.querySelector("h3").innerText; 
  }

  if(targetElement.classList.contains("finish-todo")) {
    parentElement.classList.toggle("done"); // Adiciona/remove a classe e pelo CSS definido marca a tarefa como concluída
  }

  if(targetElement.classList.contains("remove-todo")) {
    parentElement.remove(); // Exclui a tarefa
  }

  if(targetElement.classList.contains("edit-todo")) {
    toggleForms();

    editInput.value = todoTitle;
    oldInputValue = todoTitle;
  }
});

cancelEditBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Cancela o envio do formulário

  toggleForms(); // Chama a função para alternar os itens que aparecem na tela
});

editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const editInputValue = editInput.value;

  if(editInputValue) {
    updateTodo(editInputValue);
  }

  toggleForms();
});
