import React from "react";

export default function Filter({ value, onChange }) {
  return (
    <label>
      Фільтр по імені
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
}
