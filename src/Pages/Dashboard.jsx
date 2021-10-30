import { useState, useEffect } from "react";
import axios from "axios";
import Topbar from "../Components/Topbar";
import Articles from "../Components/Articles";
import Sidebar from "../Components/Sidebar";
import Pagination from "../Components/Pagination";

const Dashboard = (props) => {
  const [style, setStyle] = useState("-left-full");
  const [count, setCount] = useState(0);

  let toggleSidebar = () => {
    style === "-left-full" ? setStyle("left-2") : setStyle("-left-full");
  };

  useEffect(() => {
    axios
      .get("https://api.spaceflightnewsapi.net/v3/articles/count")
      .then((result) => {setCount(result.data)});
  }, []);
  

  return (
    <>
      <Topbar toggleSidebar={toggleSidebar} />
      <Pagination count={count} limit={24} pageLimit={5}/>
      <Sidebar style={style} />
      <Articles/>
    </>
  );
};

export default Dashboard;
