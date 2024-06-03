import { Button } from "../ui/button";

export const TopBar = () => {
  return (
    <nav className="w-full flex justify-end border-b shadow-sm p-4">
      <div className="space-x-4">
        <input
          type="text"
          placeholder="search device..."
          className="border shadow-sm px-4 py-1.5 rounded-sm"
        />
        <Button className="bg-blue-500 text-white">Search</Button>
      </div>
    </nav>
  );
};
