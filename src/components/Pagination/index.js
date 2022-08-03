import React from "react";
import { PageButton } from "./styledComponents.js";
const Pagination = (props) => {
  const { data, pageHandler } = props;
  let pageNumbers = [];
  for (let i = 1; i < Math.ceil(data.length / 9) + 1; i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <center>
        {pageNumbers.map((eachPage) => (
          <PageButton key={eachPage} onClick={() => pageHandler(eachPage)}>
            {eachPage}{" "}
          </PageButton>
        ))}
      </center>
    </div>
  );
};

export default Pagination;
