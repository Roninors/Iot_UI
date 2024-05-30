import { SideBar } from "@/components/Dashboard/SideBar";

function Dashboard() {
  return (
    <div className="w-full h-full flex overflow-x-hidden">
      <SideBar />
      <main className="w-full h-full ">main content here!</main>
    </div>
  );
}
export default Dashboard;
