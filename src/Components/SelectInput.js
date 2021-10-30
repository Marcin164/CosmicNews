const SelectInput = (props) => {

  let options = ["Teslarati", "NASA Spaceflight", "SpaceNews", "Spaceflight Now", "Arstechnica", "NASA", "SpaceFlight Insider", "Blue Origin"]

  return (
    <select className="block my-1 border-none" name={props.name} onChange={props.getValue}>
      <option value="">All</option>
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
};

export default SelectInput;
