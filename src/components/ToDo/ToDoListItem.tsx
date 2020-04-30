import React from "react";
import { Todo, ToggleComplete, RemoveTodo } from "../../types";
import { FaBeer } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaPoop } from "react-icons/fa";
//https://react-icons.netlify.app/icons?name=fa

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
  removeTodo: RemoveTodo;
}

var currentdate = new Date();
var datetime =
  +currentdate.getDate() +
  "/" +
  (currentdate.getMonth() + 1) +
  "/" +
  currentdate.getFullYear();

interface OptionType {
  value: string;
  label: string;
  icon: any;
};

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
  removeTodo,
}) => {

  const option: OptionType[] = [
    { value: "do", label: "do", icon: <FaBeer /> },
    { value: "call", label: "call", icon: <FaPhone /> },
    { value: "fix", label: "fix", icon: <FaPoop /> },
  ];

  const options = (option: OptionType[]): JSX.Element[] => {

    return option.map((item: OptionType) => {
      return (
        <option
            key={item.label}
            label={item.label}>
          {/* {item.icon} */}

        </option>
      );
    });
  };
  return (
    <div
      className={
        todo.complete
          ? "bg-green-200 flex w-100 mb-5 border px-4 py-4"
          : "flex  flex-col mb-5 border px-4 py-4 "
      }
    >
      <div className=" ">
        <div className={todo.complete ? "line-through " : ""}>
          <input
            type="checkbox"
            className="form-checkbox "
            onChange={() => toggleComplete(todo)}
            checked={todo.complete}
            key={todo.id}
          />
          <span className="ml-1 "> {todo.text} </span>
        </div>

        <p className="font-hairline text-sm"> Created: {datetime} </p>

        <select className=" mr-auto w-25 text-sm bg-white border border-gray-400 hover:border-gray-500 px-4 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          {options(option)}
        </select>

        <button
          className=" ml-1  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => removeTodo(todo.id)}
        >
          X
        </button>
      </div>
    </div>
  );
};
