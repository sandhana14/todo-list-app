import React, { useState } from "react";
import TodoItem from "./TodoItem";
import Addtodo from "./AddTodo";
import BorderComponent from "./BorderComponent";

const TodoList = ({ todosArray }) => {
  const [currentTodos, setCurrentTodos] = useState(todosArray);

  const addTodosAfterButtonClick = (descriptionValue, deadlineValue) => {
    setCurrentTodos((prev) => {
      if (descriptionValue && deadlineValue) {
        const idValue = prev.length + 1;
        return [
          ...prev,
          {
            id: idValue,
            description: descriptionValue,
            deadline: deadlineValue,
          },
        ];
      } else {
        return prev;
      }
    });
  };

  const deleteTodo = (id) => {
    setCurrentTodos(currentTodos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, description) => {
    const updatedTodos = currentTodos.map((todo) => {
      if (todo.id === id) {
        todo.description = description;
      }
      return todo;
    });
    setCurrentTodos(updatedTodos);
  };

  return (
    <div>
      <BorderComponent>
        <Addtodo addTodosAfterButtonClick={addTodosAfterButtonClick} />
      </BorderComponent>

      {currentTodos.length !== 0 ? (
        currentTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            description={todo.description}
            deadline={todo.deadline}
            onDelete={deleteTodo}
            onUpdate={updateTodo}
          />
        ))
      ) : (
        <h2>Todo list is empty now</h2>
      )}
    </div>
  );
};

export default TodoList;
