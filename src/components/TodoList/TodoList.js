import { useEffect, useState } from "react";
import Input from "./Input";
import List from "./List";
import Filter from "./Filter";
import useTodoList from "../../hooks/useTodoList";

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

  const { handleSearch, toggleSort, filteredTodos } = useTodoList(
    setSearchText,
    todos,
    searchText,
    setTodos
  );

  return (
    <>
      <Input todos={todos} setTodos={setTodos} />
      <Filter
        todos={todos}
        toggleSort={toggleSort}
        handleSearch={handleSearch}
        filteredTodos={filteredTodos}
        searchText={searchText}
      />
      <List sortedTodos={filteredTodos} setTodos={setTodos} />
    </>
  );
}
