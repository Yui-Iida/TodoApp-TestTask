import { useState } from "react";

export default function Input({ todos, setTodos }) {
  const d = new Date();
  const today = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

  const [inputNewTodo, setInputNewTodo] = useState("");
  const [inputDeadline, setInputDeadline] = useState(today);

  const handleInputNewTodo = (event) => {
    setInputNewTodo(event.target.value);
  };

  const handleInputDeadline = (event) => {
    if (event.target.value >= today) {
      setInputDeadline(event.target.value);
    }
  };

  const addTodo = () => {
    if (inputNewTodo !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputNewTodo,
        deadline: inputDeadline,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputNewTodo("");
      setInputDeadline(today);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-2">
      <input
        type="text"
        value={inputNewTodo}
        onChange={handleInputNewTodo}
        placeholder="Add new todo"
        className="h-20 md:h-auto w-60 lg:w-80 lg:text-xl"
      />
      <input
        type="date"
        value={inputDeadline}
        onChange={handleInputDeadline}
      ></input>
      <button onClick={addTodo} className="bg-blue-300 p-4 rounded lg:text-xl">
        Send
      </button>
    </div>
  );
}
