const Input = (props) => {
  return (
    <label className="block py-1">
      <input type={props.type} name={props.name} onCHange={props.getValue()}/><span className="ml-1">{props.text}</span>
    </label>
  );
};

export default Input;
