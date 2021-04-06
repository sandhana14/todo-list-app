import React, { useState } from "react";

function Addtodo({ addTodosAfterButtonClick }) {
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [validDate, setValidDate] = useState(true);

  const onChangeInputDescriptionValue = (event) => {
    setDescription(event.target.value);
  };

  const currentdate = () => {
    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    return yyyy + "-" + mm + "-" + dd;
  };

  const error = "Enter the current date or above in the deadline field!!!!!";

  const onChangeInputDeadlineValue = (event) => {
    if (event.target.value >= currentdate()) {
      setDeadline(event.target.value);
      setValidDate(true);
    } else {
      setDeadline("");
      setValidDate(!validDate);
    }
  };

  const onAddTodo = () => {
    addTodosAfterButtonClick(description, deadline);
    setDescription("");
    setDeadline("");
  };

  return (
    <>
      <div className="input-group">
        <label htmlFor="description">Todo Description</label>
        <input
          className="input"
          onChange={onChangeInputDescriptionValue}
          type="text"
          value={description}
          placeholder="Enter the todo item here"
          id="description"
        ></input>
      </div>

      <div className="input-group">
        <label htmlFor="deadline">Deadline</label>
        <input
          onChange={onChangeInputDeadlineValue}
          type="date"
          value={deadline}
          placeholder="Enter the deadline here"
          id="deadline"
          className="input deadline-input"
        ></input>
      </div>

      {!validDate && <h3 className="error-tag">{error}</h3>}

      <div>
        <button onClick={onAddTodo} className="add-button">
          Add Todo item
        </button>
      </div>
    </>
  );
}

export default Addtodo;
