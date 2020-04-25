import React, { useState, useEffect, MouseEvent, FormEvent} from "react";
import ReactDOM from "react-dom";

import "./styles.css";


import {Login} from "./components/Login/Login";
import {Board} from "./components/Board/Board";
import userEvent from "@testing-library/user-event";
import shortid from "shortid";

import {AddTodo, Todo, ToggleComplete} from "./types";
import {AddTodoForm} from "./components/AddToDoForm";
import {TodoList} from "./components/TodoList";

const initialState : Todo[] = [{ id:shortid.generate(), text: "taskOne", complete:false}, { id:shortid.generate(),text: "taskTwo", complete:false}]

const App: React.FC = () => {
    const [todos, setTodos] = useState<Array<Todo>>(initialState);
    const [todoCount, setTodoCount] = useState <number> (0);

    const toggleComplete: ToggleComplete = (selectedTodo )=> {
        const updatedTodos = todos.map(todo => {
            if (todo === selectedTodo) {
                return { ...todo, complete: !todo.complete };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const addTodo: AddTodo = newTodo => {
        newTodo.trim() !== "" && setTodos([...todos, { id: shortid.generate(),text: newTodo, complete: false }]);
    };

    const removeTodo =  ( id: string) => {
    const newTodoList : Todo[] = todos.filter((todos:Todo) => todos.id !== id)

    setTodos(newTodoList);

    }
    function todoUpdate(event: React.ChangeEvent<HTMLInputElement>, id: string) {

        const newTodosState: Todo[] = [...todos]

        newTodosState.find((todo: Todo) => todo.id === id)!.text = event.target.value

        setTodos(newTodosState)
    }


    return (
        <div>

          {/*  /!*LOGIN*!/*/}
          {/*  <React.Fragment>*/}
          {/*<Login/>*/}
          {/*  /!*BOARDS*!/*/}

          {/*  <Board />*/}
          {/*  </React.Fragment>*/}


          <div
              className="bg-white my-12 pb-6 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto">
            <div className="relative h-40">
              <img className="absolute h-full w-full object-cover"
                   src="https://images.unsplash.com/photo-1448932133140-b4045783ed9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"/>
            </div>
            <div
                className="relative shadow mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
              <img className="object-cover w-full h-full"
                   src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"/>
            </div>
            <div className="mt-16">
              <h1 className="text-lg text-center font-semibold">
                Do a mobile first layout
              </h1>
              <p className="text-sm text-gray-600 text-center">
                New Landing Page
              </p>
            </div>
            <div className="mt-6 pt-3 flex flex-wrap mx-6 border-t">
              {/*<div*/}
              {/*    className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">*/}
              {/*  Some Info*/}
              {/*</div>*/}

                <div >
                    <React.Fragment>
                        {/* Todo form component */}

                        <TodoList 
                        todo={todos} 
                        toggleComplete={toggleComplete} 
                        removeTodo={removeTodo}/>

                        <AddTodoForm 
                        addTodo={addTodo} 
                        taskNum={todoCount}/>

                    </React.Fragment>
                </div>

                  {/*<div className="flex flex-nowrap">*/}
                  {/*  <input type="text" className=" border-solid border-4 border-gray-300 rounded  mr-5"/>*/}

                  {/*  <button*/}
                  {/*      className=" ml-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  px-4 border border-blue-500 hover:border-transparent rounded">Add*/}
                  {/*    Task*/}
                  {/*  </button>*/}
                  {/*</div>*/}
            </div>
          </div>


        </div>
    );
}

export default App;
