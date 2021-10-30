import { useState } from "react";
import Input from "./Input";
import SelectInput from "./SelectInput";
import TextInput from "./TextInput";
import { connect } from "react-redux";

const SideBar = (props) => {
  const [filter, setFilter] = useState({
    titleFilter: "",
    siteFilter: "",
  });

  const getFilterValue = (e) => {
    e.preventDefault();
    let newData = { ...filter, [e.currentTarget.name]: e.currentTarget.value };
    setFilter(newData);
    console.log(newData);
    props.setFilter(newData);
  };

  const getSortValue = (e) => {
    e.preventDefault();
    props.setSort(e.currentTarget.value);
  };

  const getOptionValue = (e) => {
    e.preventDefault();
    //let newData = {...data, [e.currentTarget.name]: e.currentTarget.checked}
    //setData(newData)
    //props.setOption(newData)
  };

  return (
      <div
        style={{ height: `calc(100vh - 3rem)` }}
        className={`w-2/3 h-screen absolute ${props.style} bg-white 2xl:relative 2xl:-left-0 2xl:w-1/5 2xl:float-left px-4`}
      >
        <div className="my-5 font-semibold">Filter</div>
        <TextInput
          name="titleFilter"
          placeholder="search..."
          getValue={getFilterValue}
        />
        <hr />
        <div className="my-5 font-semibold">Sort</div>
        <Input
          type="radio"
          name="sort"
          value="publishedAt:DESC"
          text="Newer"
          getValue={getSortValue}
        />
        <Input
          type="radio"
          name="sort"
          value="publishedAt:ASC"
          text="Older"
          getValue={getSortValue}
        />
        <hr />
        <div className="my-5 font-semibold">Options</div>
        <Input
          type="checkbox"
          name="showFavourites"
          text="Show favourites"
          getValue={getOptionValue}
        />
        <Input
          type="checkbox"
          name="changeTheme"
          text="Change theme"
          getValue={getOptionValue}
        />
      </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (data) => dispatch({ type: "SET_FILTER", payload: { data } }),
    setSort: (data) => dispatch({ type: "SET_SORT", payload: { data } }),
  };
};

export default connect(null, mapDispatchToProps)(SideBar);
