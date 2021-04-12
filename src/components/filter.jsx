import React from "react";

const Filter = (props) => {
  console.log("propTy+", props.types)
  return (
    <ul className="list-group">
      {props.types.map((typ) => (
        <li
          style={{ cursor: "pointer" }}
          onClick={() => props.onActiveFilterChange(typ)}
          className={
            props.activeFilter === typ.id
              ? "list-group-item active2"
              : "list-group-item"
          }
          key={typ.id}
        >
          {typ.name}
        </li>
      ))}
    </ul>
  );
};

export default Filter;
