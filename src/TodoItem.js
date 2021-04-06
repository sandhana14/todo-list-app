import React, { useState } from "react";
import PropTypes from "prop-types";

const TodoItem = ({ id, description, deadline, onDelete, onUpdate }) => {
  const [checked, setChecked] = useState(false);
  const [edit, setEdit] = useState(false);
  const [updateInputValue, setUpdateInputValue] = useState(description);

  const onChangeCheckboxHandle = () => {
    setChecked(!checked);
  };

  const onChangeEditHandle = () => {
    setEdit(!edit);
    onUpdate(id, updateInputValue);
  };

  const onChangeInputEvent = (event) => {
    setUpdateInputValue(event.target.value);
  };

  return (
    <div className="display-todo">
      {edit ? (
        <input
          type="text"
          value={updateInputValue}
          onChange={onChangeInputEvent}
        />
      ) : (
        <p
          className="todo-items"
          style={{ textDecoration: checked ? "line-through" : "none" }}
        >
          {description} | {deadline}
        </p>
      )}

      <div className="buttons">
        <input
          className="checkbox-style"
          type="checkbox"
          onChange={onChangeCheckboxHandle}
        />

        <button className="button-delete" onClick={() => onDelete(id)}>
          Delete
        </button>

        <button className="button-edit" onClick={onChangeEditHandle}>
          {edit ? "Update" : "Edit"}
        </button>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  id: PropTypes.number,
  description: PropTypes.string,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
};

export default TodoItem;
