export const TopBar = () => {
  return (
    <nav className="w-full flex justify-end border-b shadow-sm p-4">
      <div className="space-x-4">
        <input
          type="text"
          placeholder="search device..."
          className="border shadow-sm px-4 py-1.5 rounded-sm"
        />
        <button className=" px-[1rem] py-[.5rem] bg-blue-500 rounded-md text-white">
          Search
        </button>
      </div>
    </nav>
  );
};
