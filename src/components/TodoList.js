import { useEffect, useState } from "react";
import Input from "./Input";
import List from "./List";
import Filter from "./Filter";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const filteredTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchText.toLowerCase());
  });

  const toggleSort = (type) => {
    const sortedTodos = [...todos];

    if (type === "completion") {
      sortedTodos.sort((a, b) => {
        return a.completed ? 1 : b.completed ? -1 : 0;
      });
    } else if (type === "deadline") {
      sortedTodos.sort((a, b) => {
        const deadlineA = new Date(a.deadline);
        const deadlineB = new Date(b.deadline);

        if (deadlineA < deadlineB) {
          return -1;
        } else if (deadlineA > deadlineB) {
          return 1;
        } else {
          return 0;
        }
      });
    } else if (type === "clear") {
      sortedTodos.sort((a, b) => {
        return a.id - b.id;
      });
    }
    setTodos(sortedTodos);
  };

  return (
    <div className="">
      <Input todos={todos} setTodos={setTodos} />
      <Filter
        todos={todos}
        toggleSort={toggleSort}
        handleSearch={handleSearch}
        filteredTodos={filteredTodos}
        searchText={searchText}
      />
      <List sortedTodos={filteredTodos} setTodos={setTodos} />
    </div>
  );
}
