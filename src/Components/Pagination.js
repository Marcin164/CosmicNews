import { useState } from "react";
import { connect } from "react-redux";

const Pagination = (props) => {
  const [pages] = useState(Math.round(props.count / props.limit));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    if (currentPage !== pages) {
      let newPage = currentPage + 1;
      setCurrentPage(newPage);
      props.setPage(newPage);
    }
  }

  function goToPreviousPage() {
    if (currentPage !== 1) {
      let newPage = currentPage - 1;
      setCurrentPage(newPage);
      props.setPage(newPage);
    }
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
    props.setPage(pageNumber);
  }

  const getPaginationGroup = () => {
    let start =
      Math.floor((currentPage - 1) / props.pageLimit) * props.pageLimit;
    return new Array(props.pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div className="w-full">
      <button
        onClick={goToPreviousPage}
        className={`p-3 ${currentPage === 1 ? "disabled" : ""}`}
      >
        prev
      </button>
      {getPaginationGroup().map((item, index) => (
        <button
          key={index}
          onClick={changePage}
          className={`p-3 ${currentPage === item ? "active" : null}`}
        >
          {item}
        </button>
      ))}
      <button
        onClick={goToNextPage}
        className={`p-3 ${currentPage === pages ? "disabled" : ""}`}
      >
        next
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPage: (data) => dispatch({ type: "SET_PAGE", payload: { data } }),
  };
};

export default connect(null, mapDispatchToProps)(Pagination);
