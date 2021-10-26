import Input from "./Input";

const SideBar = () => {
  const inputValues = [
    {
      type: "radio",
      name: "sort",
      text: "All",
    },
    {
      type: "radio",
      name: "sort",
      text: "A - Z",
    },
    {
      type: "radio",
      name: "sort",
      text: "Z - A",
    },
    {
      type: "radio",
      name: "sort",
      text: "Newer",
    },
    {
      type: "radio",
      name: "sort",
      text: "Older",
    },
    {
      type: "checkbox",
      name: "",
      text: "Show favourites",
    },
    {
      type: "checkbox",
      name: "",
      text: "Change theme",
    },
  ];

  return (
    <div
      style={{ height: `calc(100vh - 3rem)` }}
      className="w-2/3 h-screen absolute -left-full 2xl:relative 2xl:-left-0 2xl:w-1/5 2xl:float-left px-4"
    >
      <input type="search" className="w-full p-3 mx-2 my-1 bg-gray-100" />
      <div>Sort:</div>
      {inputValues.map((inputValue) => (
        <Input
          key={inputValue.id}
          type={inputValue.type}
          name={inputValue.name}
          text={inputValue.text}
        />
      ))}
    </div>
  );
};

export default SideBar;
