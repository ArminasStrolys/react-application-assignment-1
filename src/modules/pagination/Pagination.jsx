import React from "react";

export const Pagination = (props) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagerMain">
        {pageNumbers.map((number) => (
          <li key={number} className="pagerMini">
              <a href="!#" className="pageLink">
                  {number}
              </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
