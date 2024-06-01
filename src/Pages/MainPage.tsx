import { SideBar } from "@/components/SideBar/SideBar";
import { TopBar } from "@/components/TopBar/TopBar";
import { Outlet } from "react-router";

function MainPage() {
  return (
    <div className="w-screen h-screen flex">
      <SideBar />
      <main className="w-full h-full flex flex-col">
        <TopBar />
        <Outlet />
      </main>
    </div>
  );
}
export default MainPage;
