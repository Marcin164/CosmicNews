const TextInput = (props) => {
  return <input type="search" className="w-full p-3 mx-1 my-1 bg-gray-100" placeholder={props.placeholder} name={props.name} onChange={props.getValue}/>;
};

export default TextInput;