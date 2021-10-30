import {useState} from "react"
import Topbar from "../Components/Topbar";
import Articles from "../Components/Articles";
import Sidebar from "../Components/Sidebar";

const Dashboard = () => {

  const [style, setStyle] = useState("-left-full")

  let toggleSidebar = () => {
    (style === "-left-full") ? setStyle("left-2") : setStyle("-left-full")
  }

  return (
    <>
      <Topbar toggleSidebar={toggleSidebar}/>
      <Sidebar style={style}/>
      <Articles/>
    </>
  );
};

export default Dashboard;
