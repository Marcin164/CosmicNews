import React, { useContext } from "react";
import {SideBarContext} from "../Pages/Dashboard"

const TextInput = (props) => {
  const functions = useContext(SideBarContext)   
  return <input type="search" className="w-full p-3 mx-1 my-1 bg-gray-100 md:text-3xl xl:text-2xl" placeholder={props.placeholder} name={props.name} onChange={functions.getFilteredArticles}/>;
};

export default TextInput;