import { useState } from "react";
import sideBarLogo from "/logoipsum-297.svg";
import openLogo from "/next.png";
import closeLogo from "/next-reverse.png";
import userLogo from "/square.png";
import { SideBarItems } from "./SideBarItems";
export type NavItemType = {
  itemName: string;
  itemLogo: string;
  active: boolean;
};
export const SideBar = () => {
  const [isOpen, SetIsOpen] = useState(true);
  const navItems: NavItemType[] = [
    {
      itemName: "Devices",
      itemLogo: "/dashboard.png",
      active: false,
    },
    {
      itemName: "Locations",
      itemLogo: "/dashboard.png",
      active: false,
    },
    {
      itemName: "Privacy Settings",
      itemLogo: "/dashboard.png",
      active: false,
    },
  ];
  return (
    <aside className="h-full">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="pb-2 py-4 px-3 flex justify-between items-center gap-3">
          <img
            src={sideBarLogo}
            alt="side-bar-logo"
            className={`overflow-hidden transition-all  ${
              isOpen ? "w-52" : "w-0"
            }`}
          />
          <button className=" p-1.5" onClick={() => SetIsOpen(!isOpen)}>
            {isOpen ? (
              <img src={closeLogo} className="w-10" alt="side-bar-toggle" />
            ) : (
              <img
                src={openLogo}
                className="w-10"
                alt="side-bar-toggle-close"
              />
            )}
          </button>
        </div>
        <ul className="flex-1 px-3">
          {navItems.map((navItems: NavItemType) => (
            <SideBarItems
              isOpen={isOpen}
              itemLogo={navItems.itemLogo}
              itemName={navItems.itemName}
              active={navItems.active}
            />
          ))}
        </ul>
        <div className="flex border-t p-3">
          <img src={userLogo} alt="" className="h-16 aspect-square" />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all  ${
              isOpen ? "w-52 ml-3" : "w-0"
            }`}
          >
            <div className="leading-4">
              <h4 className="text-lg">Ronin Manso</h4>
              <span className="text-sm text-gray-600">test@gmail.com</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};
