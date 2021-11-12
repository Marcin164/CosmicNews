import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import Topbar from "../Components/Topbar";
import Articles from "../Components/Articles";
import Sidebar from "../Components/Sidebar";
import Pagination from "../Components/Pagination";

export const SideBarContext = createContext("");

const Dashboard = (props) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState("");
  const [filter, setFilter] = useState({
    titleFilter: "",
    siteFilter: "",
  });
  const [sort, setSort] = useState("publishedAt:DESC");
  const [favourites, setFavourites] = useState("");

  useEffect(() => {
    countAllNews();
  }, [props.filter]);

  //toggle sidebar

  let toggleSidebar = () => {
    isSidebarVisible ? setIsSidebarVisible(false) : setIsSidebarVisible(true);
  };

  //filter articles

  const getFilteredArticles = (e) => {
    e.preventDefault();
    let newData = { ...filter, [e.currentTarget.name]: e.currentTarget.value };

    clearTimeout(timer);

    setTimer(
      setTimeout(() => {
        setFilter(newData);
      }, 900)
    );
  };

  //sort articles

  const getSortedArticles = (e) => {
    setSort(e.currentTarget.value);
  };

  //fetch amount of articles

  const countAllNews = () => {
    axios
      .get("https://api.spaceflightnewsapi.net/v3/articles/count")
      .then((result) => {
        setCount(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //get favourite articles

  const getFavourites = (e) => {
    let url = "";
    if (e.currentTarget.checked) {
      for (let i = 0; i < window.localStorage.length; i++) {
        url += `id_in=${window.localStorage.key(i)}&`;
      }
    }
    setFavourites(url);
  };

  return (
    <>
      <Topbar toggleSidebar={toggleSidebar} />
      <SideBarContext.Provider
        value={{ getFilteredArticles, getSortedArticles, getFavourites }}
      >
        <Sidebar style={isSidebarVisible} />
      </SideBarContext.Provider>
      <Pagination count={count} limit={24} pageLimit={10} />
      <Articles filter={filter} sort={sort} favourites={favourites} />
    </>
  );
};

export default Dashboard;
