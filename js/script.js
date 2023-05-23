/*Seleção de elementos*/ 
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

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
}

/*Eventos*/
todoForm.addEventListener("submit", (e) => {
  e.preventDefault(); /*vai fazer com que o formulário não seja enviado pro backend quando pressionar o btn */

  const inputValue = todoInput.value;

  if(inputValue) {
    saveTodo(inputValue)
    //save todo
  }
})