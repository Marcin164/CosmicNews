import Input from "./Input";
import TextInput from "./TextInput";
import FavouritesCheckbox from "./FavouritesCheckbox"

const SideBar = (props) => {
  return (
    <div
      style={{ height: `calc(100vh - 3rem)` }}
      className={`px-2 w-2/3 z-20 h-screen absolute ${props.style ? "left-2" : "-left-full"} bg-white md:w-1/2 xl:w-1/3 2xl:relative 2xl:-left-0 2xl:w-1/5 2xl:float-left`}
    >
      <div className="my-5 font-semibold md:text-3xl xl:text-2xl">
        Filter
      </div>
      <TextInput
        name="titleFilter"
        placeholder="search..."
      />
      <hr />
      <div className="my-5 font-semibold md:text-3xl xl:text-2xl">Sort</div>
      <Input
        type="radio"
        name="sort"
        value="publishedAt:DESC"
        text="Newer"
        checked={true}
      />
      <Input
        type="radio"
        name="sort"
        value="publishedAt:ASC"
        text="Older"
        checked={false}
      />
      <hr />
      <div className="my-5 font-semibold md:text-3xl xl:text-2xl">Options</div>
      <FavouritesCheckbox/>
    </div>
  );
};

export default SideBar;
