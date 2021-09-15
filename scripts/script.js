/*jshint esversion: 6 */
'use sctrict';

const
  todoControl = document.querySelector('.todo-control'),
  headerInput = document.querySelector('.header-input'),
  todoList = document.querySelector('.todo-list'),
  todoCompleted = document.querySelector('.todo-completed');
  todoRemove = document.querySelector('.todo-remove');

  let todoData = [];
  let getStorege = function(){
    let data = JSON.parse(localStorage.getItem('todo'));
    if (data) {
      todoData = data;
    }
  };

  const render = function(){
    todoList.textContent = '';
    todoCompleted.textContent = '';


    todoData.forEach(function(item){
     const li = document.createElement('li');
     li.classList.add('todo-item');
     li.innerHTML = '<span class="text-todo">' + item.value +'</span>' +
     '<div class="todo-buttons">' +
      '<button class="todo-remove"></button>' +
      '<button class="todo-complete"></button>' +
     '</div>';

     if(item.completed){
       todoCompleted.append(li);
     } else {
      todoList.append(li);
     }

     const todoComplete = li.querySelector('.todo-complete');
     todoComplete.addEventListener('click', function(){
        item.completed = !item.completed;
        render();
     });

     todoRemove.addEventListener('click', function(){
      item.splice(i);
      render();
    });    
    });

  };
    todoControl.addEventListener('submit', function(event){
    event.preventDefault();
    const newTodo = {
      value: headerInput.value,
      completed: false
    };

    if (headerInput.value !== '' || headerInput.value !== ' '){
      headerInput.value.trim();
    }
    else {
      console.log('Ошибка');
    }
    localStorage.todoData = JSON.stringify(todoData);
    render();  
    
   
  });

  render();
