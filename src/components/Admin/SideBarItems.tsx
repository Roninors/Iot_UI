export const SideBarItems = ({
  itemLogo,
  itemName,
  isOpen,
  active,
}: {
  itemLogo: string;
  itemName: string;
  isOpen: boolean;
  active: boolean;
}) => {
  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md  cursor-pointer transition-colors ${
        active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-gray-950 text-white hover:text-blue-500"
      }`}
    >
      <img src={itemLogo} alt="item-logo" className="h-7 aspect-square" />
      <span
        className={`overflow-hidden transition-all ${
          isOpen ? "w-52 ml-3" : "w-0"
        }`}
      >
        {itemName}
      </span>
    </li>
  );
};
