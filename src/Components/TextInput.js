const TextInput = (props) => {
  return <input type="search" className="w-full p-3 mx-1 my-1 bg-gray-100 md:text-3xl xl:text-3xl" placeholder={props.placeholder} name={props.name} onChange={props.getValue}/>;
};

export default TextInput;