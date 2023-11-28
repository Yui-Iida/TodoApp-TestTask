export default function List({ sortedTodos, setTodos }) {
  const toggleCompletion = (clickedTodo) => {
    const updateTodos = sortedTodos.map((todo) => {
      if (todo.id === clickedTodo.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(updateTodos);
  };

  const deleteTodo = (clickedTodo) => {
    const updateTodos = sortedTodos.filter(
      (todo) => todo.id !== clickedTodo.id
    );
    setTodos(updateTodos);
  };

  return (
    <ul>
      {sortedTodos.map((todo) => (
        <li
          className="flex gap-8 my-2 lg:text-xl lg:my-4 dark:text-gray-300"
          key={todo.id}
        >
          <span>{todo.text}</span>
          <span>{todo.deadline}</span>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleCompletion(todo)}
          />
          <span onClick={() => deleteTodo(todo)} className="cursor-pointer">
            🗑️
          </span>
        </li>
      ))}
    </ul>
  );
}
