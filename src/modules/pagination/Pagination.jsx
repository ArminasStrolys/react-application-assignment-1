import React from "react";

export const Pagination = ({ totalPosts, postsPerPage, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagerMain">
        {pageNumbers.map((number) => (
          <li key={number} className="pagerMini">
            <a href="!#" className="pageLink" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
