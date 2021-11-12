import { useState } from "react";
import { connect } from "react-redux";

const Pagination = (props) => {
  const [pages] = useState(Math.round(props.count / props.limit));
  const [currentPage, setCurrentPage] = useState(1);

  const getPaginationGroup = () => {
    let start =
      Math.floor((currentPage - 1) / props.pageLimit) * props.pageLimit;
    return new Array(props.pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  function goToNextPage() {
    if (currentPage !== pages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      props.setPage(newPage);
    }
  }

  function goToPreviousPage() {
    if (currentPage !== 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      props.setPage(newPage);
    }
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
    props.setPage(pageNumber);
  }

  return (
    <div className="sticky top-0 bg-white w-full py-4 flex 2xl:w-2/3">
      <div className="w-2/5 mr-2 flex flex-row justify-end content-center">
        <button
          onClick={goToPreviousPage}
          className={`p-3 rounded bg-gray-100 ${currentPage === 1 ? "invisible" : ""}`}
        >
          prev
        </button>
      </div>
      <div className="w-auto flex flex-row justify-center content-center">
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`px-5 rounded bg-gray-100 mx-1 ${currentPage === item ? "bg-blue-100" : null}`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="w-2/5 ml-2 flex flex-row justify-start content-center">
        <button
          onClick={goToNextPage}
          className={`p-3 rounded bg-gray-100  ${currentPage === pages ? "invisible" : ""}`}
        >
          next
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPage: (data) => dispatch({ type: "SET_PAGE", payload: { data } }),
  };
};

export default connect(null, mapDispatchToProps)(Pagination);
