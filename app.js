
let taskBtn = document.getElementById('taskBtn');
let todoList = document.getElementById('todoList');
let inputTodo = document.getElementById('inputTodo');

function addTodoToList (){
    // console.log('addToDoList')
    let todoItemNew =  document.createElement('div');
    todoItemNew.textContent = inputTodo.value;
    todoList.appendChild(todoItemNew);
    inputTodo.value = '';
}

taskBtn.addEventListener('click' , addTodoToList);

