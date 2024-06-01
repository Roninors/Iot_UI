import { useState } from "react";
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
      itemName: "Subscribers",
      itemLogo: "/subscribers.png",
      active: true,
    },
    {
      itemName: "Roles",
      itemLogo: "/management.png",
      active: false,
    },
    {
      itemName: "Household",
      itemLogo: "/home-page.png",
      active: false,
    },
  ];
  return (
    <aside className="h-full">
      <nav className="h-full flex flex-col bg-gray-700 border-r shadow-sm">
        <div className="flex flex-col">
          <div className="pb-2 py-4 px-3 flex justify-between items-center gap-3">
            {/* <img
              src={sideBarLogo}
              alt="side-bar-logo"
              className={`overflow-hidden transition-all  ${
                isOpen ? "w-52" : "w-0"
              }`}
            /> */}
            {isOpen && (
              <h1 className={`text-5xl font-bold text-blue-500 `}>ADMIN</h1>
            )}
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
        <div className="flex border-t p-3 border-blue-500">
          <img src={userLogo} alt="" className="h-16 aspect-square" />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all  ${
              isOpen ? "w-52 ml-3" : "w-0"
            }`}
          >
            <div className="leading-4">
              <h4 className="text-lg text-white">Ronin Manso</h4>
              <span className="text-sm text-white">test@gmail.com</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};
