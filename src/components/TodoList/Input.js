import { useState } from "react";
import useInput from "../../hooks/useInput";

export default function Input({ todos, setTodos }) {
  const d = new Date();
  const today = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

  const [inputNewTodo, setInputNewTodo] = useState("");
  const [inputDeadline, setInputDeadline] = useState(today);

  const { handleInputNewTodo, handleInputDeadline, addTodo } = useInput({
    setInputNewTodo,
    today,
    setInputDeadline,
    inputNewTodo,
    inputDeadline,
    setTodos,
    todos,
  });

  return (
    <div className="flex flex-col md:flex-row gap-2">
      <div className="flex flex-col">
        <p className="text-xs dark:text-gray-300">Add new Todo</p>
        <input
          type="text"
          value={inputNewTodo}
          onChange={handleInputNewTodo}
          placeholder="New todo item"
          className="h-16 md:h-auto grow w-auto lg:w-80 lg:text-xl"
        />
      </div>
      <div className="flex flex-col">
        <p className="text-xs dark:text-gray-300">Deadline</p>
        <input
          type="date"
          value={inputDeadline}
          onChange={handleInputDeadline}
          className="grow"
        ></input>
      </div>
      <button onClick={addTodo} className="bg-blue-300 p-4 rounded lg:text-xl">
        Send
      </button>
    </div>
  );
}
