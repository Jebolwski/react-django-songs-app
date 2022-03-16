import React from "react";

const Pagination = ({ songsPerPage, totalSongs, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalSongs / songsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      {pageNumbers.map((number) => (
        <li key={number}>
          <a onClick={() => paginate(number)}>{number}</a>
        </li>
      ))}
    </div>
  );
};

export default Pagination;
