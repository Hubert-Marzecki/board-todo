import React, { useState, ChangeEvent, FormEvent } from "react";
import { AddTodo } from "../types";
import userEvent from "@testing-library/user-event";

interface AddTodoFormProps {
    addTodo: AddTodo;
    taskNum: number;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo}) => {
    const [newTodo, setNewTodo] = useState<string>("");


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo("");

    };

    return (
        <form className="w-full max-w-sm">
            <div>
            <input
                type="text"
                value={newTodo}
                onChange={handleChange}
                placeholder="Add task"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
                type="submit"
                onClick={handleSubmit}
                className=" float-right bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white mt-1 px-4 border border-blue-500 hover:border-transparent rounded"
            >
                Add Todo
            </button>

            </div>
        </form>
    );
};