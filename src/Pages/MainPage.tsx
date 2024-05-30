import { Outlet } from "react-router";

function MainPage() {
  return (
    <div className="w-screen h-screen">
      <Outlet />
    </div>
  );
}
export default MainPage;
