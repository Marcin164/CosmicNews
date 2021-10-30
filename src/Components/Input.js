const Input = (props) => {
  return (
    <label className="block py-1 md:text-3xl xl:text-3xl">
      <input type={props.type} name={props.name} value={props.value} onChange={props.getValue}/><span className="ml-1">{props.text}</span>
    </label>
  );
};

export default Input;
