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
    <div>
      <ul>
        {sortedTodos.map((todo) => (
          <div
            className="flex gap-8 my-2 lg:text-xl lg:my-4 dark:text-gray-300"
            key={todo.id}
          >
            <li>{todo.text}</li>
            <li>{todo.deadline}</li>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompletion(todo)}
            />
            <li onClick={() => deleteTodo(todo)} className="cursor-pointer">
              🗑️
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
