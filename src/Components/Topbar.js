import { MenuIcon } from "@heroicons/react/solid";

const Topbar = () => {
  return (
    <div className="text-3xl md:text-5xl h-12">
      <div className="flex flex-row content-center">
        <div className="w-1/5">
          <MenuIcon className="h-10 w-10 mt-1.5" />
        </div>
        <div className="text-center w-3/5">CosmicNews</div>
      </div>
    </div>
  );
};

export default Topbar;
