import { useState, useEffect } from "react";
import TodoList from "./RenderTodos";

const Todo_API_URL =
  "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

const FetchTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(Todo_API_URL)
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  return <div>{todos.length > 0 && <TodoList todosArray={todos} />}</div>;
};

export default FetchTodos;
