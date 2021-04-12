import React from "react";

const Sort = (props) => {
    console.log("prodort+", props)
    return (
        <ul className="list-group">
            {props.sorts.map((typ) => (
                <li
                    style={{ cursor: "pointer" }}
                    onClick={() => props.onActiveSortChange(typ)}
                    className={
                        props.activeSort === typ.id
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

export default Sort;
