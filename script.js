'use strict'

const $ = document.querySelector.bind(document);
const todoAddButton = $('form');
const mainDiv = $('#main');
const todoTextInput = $('#todoContent')

todoAddButton.addEventListener('submit', addTodo);

function addTodo(e){
    const mainDiv = $('#main');
    const todoTextInput = $('#todoContent')

    var d = document.createElement('div');
    //d.innerText = 'okay';
    d.textContent = 'okay lets see'


    d.textContent = todoTextInput.value;
    d.classList.add('todo');
    mainDiv.appendChild(d);
    
    d.addEventListener('click', function(){
        d.className = 'completed'
    });

    todoTextInput.value = '';

    e.preventDefault();

}

