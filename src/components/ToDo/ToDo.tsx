import React, { useState } from 'react';
import { AddTodoForm } from './AddToDoForm';
import { TodoList } from './TodoList';
import { AddTodo, Todo, ToggleComplete, User, RemoveTodo } from "../../types";
import shortid from 'shortid';


interface ToDoProps {
    todos: Todo[],
    toggleComplete: ToggleComplete,
    removeTodo: RemoveTodo,
    addTodo: AddTodo
}

export const ToDo  = (props: ToDoProps) => {
    const [todos, setTodos] = useState<Array<Todo>>([]);

    const toggleComplete: ToggleComplete = (selectedTodo) => {
        const updatedTodos = todos.map((todo) => {
          if (todo === selectedTodo) {
            return { ...todo, complete: !todo.complete };
          }
          return todo;
        });
    
        setTodos(updatedTodos);
      };
    
      const addTodo: AddTodo = (newTodo) => {
        if (newTodo.trim() !== "") {
          setTodos([
            ...todos,
            { id: shortid.generate(), text: newTodo, complete: false },
          ]);
        } 
      };
    
      const removeTodo = (id: string) => {
        const newTodoList: Todo[] = todos.filter((todos: Todo) => todos.id !== id);
        setTodos(newTodoList);
      
      };

    return (
        <>
        {/* Todo form component */}

        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}

        />

        <AddTodoForm addTodo={addTodo}  />
        Tasks: {todos.length}
        Complete: {todos.filter(it => it.complete).length}
      </>
    );
};