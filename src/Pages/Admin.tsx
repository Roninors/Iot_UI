import { DataTable } from "@/components/Admin/DataTable";
import { SideBar } from "@/components/Admin/SideBar";
import { TopBar } from "@/components/Admin/TopBar";
import profileTemplate from "/subscriber-profile.png";
import { SubscriberInfo } from "@/components/Admin/SubscriberInfo";
import AccordionDevice from "@/components/Dashboard/AccordionDevice";
function Admin() {
  return (
    <div className="w-screen h-screen flex bg-gray-300">
      <SideBar />
      <main className="w-full h-full flex flex-col ">
        <TopBar />
        <div className="w-full h-full flex p-5 gap-5">
          <DataTable />
          <section className="h-full flex-1 flex-col p-5 bg-white rounded-md">
            <div className="border-b border-gray-100">
              <p className="pb-3 text-lg">Subscriber's Information</p>
            </div>
            <div className="flex my-8 w-full items-center justify-center">
              <img
                src={profileTemplate}
                alt="profile-icon-template"
                className="aspect-square h-40"
              />
            </div>
            <div className="w-full flex justify-center items-center">
              <p className="text-xl">Ronin Manso</p>
            </div>
            <div className="flex flex-col gap-3 mt-5">
              <SubscriberInfo
                imageUrl="/mail.png"
                info="test@gmail.com"
                label="Email:"
              />
              <SubscriberInfo
                imageUrl="/clock.png"
                info="2 hours ago"
                label="Last Active"
              />
              <SubscriberInfo
                imageUrl="/location.png"
                info="Bais City, Negros Oriental, Philippines"
                label="Location"
              />
              <SubscriberInfo
                imageUrl="/medical-equipment.png"
                info="Online"
                label="IOT Machine Status"
              />
            </div>

            <div className="mt-6">
              <AccordionDevice
                accordionText="lorem ipsum"
                accordionTriggerText="Roles"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Admin;
