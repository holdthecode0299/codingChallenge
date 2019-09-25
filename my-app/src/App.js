
import React, { useState } from 'react'

import './App.css'

// state(todos) and then function (setTodos) 
// use object to store task & completion 
function App() {
    const [todos, setTodos] = useState([
      {
        content: 'Laundry',
        isCompleted: false,
      },
      {
        content: 'Walk the dogs',
        isCompleted: true,
      },
      {
        content: 'Eat Breakfast',
        isCompleted: true,
      },
      {
        content: 'Wash Dishes',
        isCompleted: false,
      },
      {
        content: 'Change Lighbulbs',
        isCompleted: true,
      }
    ]);

  // Recognize change in pressed key...eliminates onClick event  
  // if statement create new task if key is pressed 
    function handleKeyDown(e, i) {
      if (e.key === 'Enter') {
        createTodoAtIndex(e, i);
      }
      if (e.key === 'Backspace' && todos[i].content === '') {
        e.preventDefault();
        return removeTodoAtIndex(i);
      }
    }
//   create task (newTodos)
    function createTodoAtIndex(e, i) {
      const newTodos = [...todos];
      newTodos.splice(i + 1, 0, {
        content: '',
        isCompleted: false,
      });

      setTodos(newTodos);
      setTimeout(() => {
        document.forms[0].elements[i + 1].focus();
      }, 0);
    }
    
    // Update task (change value with new object value)
    function updateTodoAtIndex(e, i) {
      const newTodos = [...todos];
      newTodos[i].content = e.target.value;
      setTodos(newTodos);
    }
  
    // Remove task (if statement to detect if backspace is pressed to indicate DELETE)
    function removeTodoAtIndex(i) {
      if (i === 0 && todos.length === 1) return;
      setTodos(todos => todos.slice(0, i).concat(todos.slice(i + 1, todos.length)));
      setTimeout(() => {
        document.forms[0].elements[i - 1].focus();
      }, 0);
    }
    
    // Completed task
    function toggleTodoCompleteAtIndex(index) {
      const temporaryTodos = [...todos];
      temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted;
      setTodos(temporaryTodos);
    }
  
    return (
      <div className="app">
            <h1>Coding Challenge: React To-Do List</h1>
              <p>If Tasks is completed Click Checkbox</p>
              <p>Objective: Update Task, Create New Task, and Remove Task</p>
        <form className="todo-list">
          <ul>
            {/*  Loops through todo array to display tasks */}
            {todos.map((todo, i) => (
              <div className={`todo ${todo.isCompleted && 'todo-is-completed'}`}>
                <div className={'checkbox'} onClick={() => toggleTodoCompleteAtIndex(i)}>
                  {todo.isCompleted && (
                    <span>&#x2714;</span>
                  )}
                </div>
                {/* Displays new task */}
                <input
                  type="text"
                  value={todo.content}
                  // onKeyDown calls Handle key function
                  onKeyDown={e => handleKeyDown(e, i)}
                  onChange={e => updateTodoAtIndex(e, i)}
                />
              </div>
            ))}
          </ul>
        </form>
      </div>
    );
  }

export default App