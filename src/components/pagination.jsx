import React from "react";

const Pagination = (props) => {
  console.log("paginaProp", props)
  let pages = Math.ceil(props.count / props.pageSize);
  let pagesArray = [];
  for (let i = 1; i <= pages; i++) {
    pagesArray.push(i);
  }
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pagesArray.map((page) => (
          <li key={page}
            onClick={() => props.onActivePageChange(page)}
            className={page == props.activePage ? "page-item active" : "page-item"}
          >
            <a className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
