import React, {useState} from "react";
import {RemoveTodo, Todo, ToggleComplete} from "../../types";
import { TodoListItem } from "./ToDoListItem";

interface TodoListProps {
    todo: Array<Todo>;
    toggleComplete: ToggleComplete;
    removeTodo: RemoveTodo;
}

export const TodoList: React.FC<TodoListProps> = ({todo, toggleComplete, removeTodo}) => {
    return (
        <div>
            {todo.map(todo => (
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