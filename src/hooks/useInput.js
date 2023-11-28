export default function useInput({
  setInputNewTodo,
  today,
  setInputDeadline,
  inputNewTodo,
  inputDeadline,
  setTodos,
  todos,
}) {
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

  return { handleInputNewTodo, handleInputDeadline, addTodo };
}
