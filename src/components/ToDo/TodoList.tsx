import React, {useState} from "react";
import {RemoveTodo, Todo, ToggleComplete} from "../../types";
import { TodoListItem } from "./ToDoListItem";

interface TodoListProps {
    todos: Array<Todo>;
    toggleComplete: ToggleComplete;
    removeTodo: RemoveTodo;
}

export const TodoList: React.FC<TodoListProps> = ({todos, toggleComplete, removeTodo}) => {
    return (
        <div>
            {todos.map(todo => (
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    removeTodo={removeTodo}
                />
            ))}

        </div>
    );
};