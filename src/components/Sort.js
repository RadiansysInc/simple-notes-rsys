import React from "react";
const Sort = ({ onSort }) => {
  return (
    <select onChange={(e) => onSort(e.target.value)}>
      <option value="title">Sort by Title</option>
      <option value="created">Sort by Date Created</option>
      <option value="modified">Sort by Date Modified</option>
    </select>
  );
};
export default Sort;