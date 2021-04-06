import "./App.css";
import FetchTodos from "./FetchTodos";
import TimeUserOnWebsite from "./Timer";

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TimeUserOnWebsite />
      <FetchTodos />
    </div>
  );
}

export default App;
