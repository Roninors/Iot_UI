import { SideBar } from "@/components/Admin/SideBar";
import { TopBar } from "@/components/Admin/TopBar";
import { Outlet } from "react-router";
function Admin() {
  return (
    <div className="w-screen h-screen overflow-x-hidden flex bg-gray-300">
      <SideBar />
      <main className="w-full h-full flex flex-col ">
        <TopBar />
        <Outlet />
      </main>
    </div>
  );
}

export default Admin;
