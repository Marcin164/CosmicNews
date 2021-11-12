import React, { useContext } from "react";
import {SideBarContext} from "../Pages/Dashboard"

const Input = (props) => {
  const functions = useContext(SideBarContext)  
  return (
    <label className="block py-1 md:text-3xl xl:text-2xl">
      <input type={props.type} defaultChecked={props.checked} name={props.name} value={props.value} onChange={functions.getSortedArticles}/><span className="ml-1">{props.text}</span>
    </label>
  );
};

export default Input;