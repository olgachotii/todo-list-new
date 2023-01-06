import React from "react";

export default function Todo({
  text,
  completed,
  onToggleCompleted,
  onDeleteTodo,
}) {
  return (
    <>
      <input
        type="checkbox"
        className="TodoList__checkbox"
        checked={completed}
        onChange={onToggleCompleted}
      />
      <p className="TodoList__text">{text}</p>
      <button type="button" className="TodoList__btn" onClick={onDeleteTodo}>
        Удалить
      </button>
    </>
  );
}
