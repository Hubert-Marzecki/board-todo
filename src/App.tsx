import React, { useState, useEffect, MouseEvent, FormEvent } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./styles.css";

import { Login } from "./components/Login/Login";
import { Register } from "./components/Login/Register";
import { Board } from "./components/Board/Board";
import userEvent from "@testing-library/user-event";
import shortid from "shortid";

import { AddTodo, Todo, ToggleComplete, User } from "./types";
import { AddTodoForm } from "./components/ToDo/AddToDoForm";
import { TodoList } from "./components/ToDo/TodoList";
import { type } from "os";
import { ToDo } from "./components/ToDo/ToDo";

const initialState: Todo[] = [
  { id: shortid.generate(), text: "taskOne", complete: false },
  { id: shortid.generate(), text: "taskTwo", complete: false },
];

// TAGED UNION - doczytać

export type LoginPage = { type: "LOGIN" };
export type RegisterPage = { type: "REGISTER" };
export type BoardsPage = { type: "BOARDS"; user: User };
export type Page = LoginPage | RegisterPage | BoardsPage;

const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [user, setUser] = useState<User | null>(null);
  const [currentPage, setCurrentPage] = useState<Page>({ type: "LOGIN" });

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

  // function mainView(): JSX.Element {
  //   switch (currentPage.type) {
  //     case "LOGIN":
  //       return <Login changePage={setCurrentPage} />;
  //     case "REGISTER":
  //       return <Register changePage={setCurrentPage} />;
  //     case "BOARDS":
  //       return <Board user={currentPage.user} />;
  //   }
  // }

  function protectedRoutes(): JSX.Element[]{
    if(user !== null){
        return [
          <Route path="/board" component = {()=><Board user={user}/>}></Route>
        ]        
    }
    return []
  }

  return (
    <Router>
    <div>
      <Route path="/" exact component={()=> <Login setUser={setUser}/>} />
      <Route path="/register"  component={Register}/>
      { protectedRoutes() }
    {/* user == null ? undefinde : <Route path="./" components ={()=> <Board user={user}>} </Route>
    Pozwala nam dodać logikę do routingu + przekazać do niego parametry!
    */}



      {/* {mainView()} */}  
          {/* <ToDo
          todos={todos}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
          addTodo={addTodo}
          /> */}
    </div>
    </Router>
  );
};

export default App;
