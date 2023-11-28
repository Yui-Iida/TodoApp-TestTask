import Theme from "./components/Theme";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="bg-yellow-200 min-h-screen flex justify-center dark:bg-slate-800">
      <div className="">
        <Theme />
        <p className="justify-center text-emerald-500 text-3xl lg:text-4xl mt-24 mb-6 dark:text-purple-500">
          Todo App
        </p>
        <TodoList />
      </div>
    </div>
  );
}

export default App;

// I keep it simple to implement in 4 hours but if I have more time ...

// - Inprement Add/Edit feature
// - Make localstrage work propery (Caching)

// - Add more design and UI/UX (e.g. use proper icon, animation for hover, make deadline easier to recognise, etc)
// - Add hashtags for input and add filter with hashtags
// - Add functionality to toggle the order when user click sort button
// - Show error message when user pick the date before, if the field empty, etc
// - Detect and persist user setting of theme (Window.matchMedia())
