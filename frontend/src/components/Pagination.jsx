import React from "react";

const Pagination = ({ songsPerPage, totalSongs, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalSongs / songsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      {pageNumbers.map((number) => (
        <div key={number}>
          <ul className="list-unstyled ">
            <li className="btn btn-secondary" onClick={() => paginate(number)}>
              {number}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
