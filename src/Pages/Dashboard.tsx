import { ComboBoxLocation } from "@/components/Dashboard/ComboBoxLocation";
import { ComboBoxManufacturer } from "@/components/Dashboard/ComboBoxManufacturer";
import routerLogo from "/wifi-router.png";
import manufacLogo from "/logoipsum-297.svg";
import signal from "/signal.png";
import AccordionDevice from "@/components/Dashboard/AccordionDevice";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DeviceTypeDialog } from "@/components/Dashboard/DeviceTypeDialog";
import { DeviceCard } from "@/components/Dashboard/DeviceCard";
import { AddDeviceDialog } from "@/components/Dashboard/AddDeviceDialog";
import { SwitchOnline } from "@/components/Dashboard/SwitchOnline";
import { useState } from "react";
type DeviceType = {
  deviceName: string;
  deviceLogo: string;
};
function Dashboard() {
  const [online, setOnline] = useState(true);
  const deviceType: DeviceType[] = [
    {
      deviceName: "All Devices",
      deviceLogo: "dashboard.png",
    },
    {
      deviceName: "Router",
      deviceLogo: "wifi-router.png",
    },
    {
      deviceName: "IP Cameras",
      deviceLogo: "cctv.png",
    },
    {
      deviceName: "Air Conditioner",
      deviceLogo: "air-conditioner.png",
    },
    {
      deviceName: "Lights",
      deviceLogo: "lamp.png",
    },
    {
      deviceName: "Door Locks",
      deviceLogo: "door-lock.png",
    },
  ];
  return (
    <main className="w-full h-full flex justify-start bg-gray-50 text-gray-600">
      <div className="w-fit flex flex-col p-5">
        <div className=" flex gap-6 mb-8">
          <h1 className="text-3xl">Devices</h1>
          <DeviceTypeDialog />
        </div>
        <div className="flex gap-5">
          <div className="w-fit  overflow-y-scroll h-[76vh] shadow-sm p-5 flex flex-col bg-white rounded-sm">
            <p className="text-gray-600 text-sm">CHOOSE DEVICE TYPE</p>
            <ul>
              {deviceType.map((deviceType: DeviceType) => (
                <li className="w-72 flex border border-gray-200 items-center py-3 px-3 my-5 font-medium rounded-md  cursor-pointer hover:bg-indigo-50 text-gray-600 gap-4">
                  <img
                    src={deviceType.deviceLogo}
                    alt="device-logo"
                    className="w-7"
                  />
                  <span>{deviceType.deviceName}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col bg-white rounded-sm shadow-sm p-5">
            <div className="flex flex-col border-b pb-4">
              <p className="text-sm mb-3">FILTER BY</p>
              <div className="flex flex-col gap-3">
                <div className="flex gap-5">
                  <ComboBoxLocation />
                  <ComboBoxManufacturer />
                </div>
                <AddDeviceDialog />
              </div>
            </div>
            <div className="flex flex-col pt-5">
              <p className="text-sm mb-3">Devices</p>
              <div className="w-full h-full grid grid-cols-3 gap-4">
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 items-center flex-col  bg-white p-10 max-h-[92.5vh] overflow-y-scroll">
        <div className="flex justify-center  items-center gap-8 ">
          <div>
            <img
              src={routerLogo}
              alt="router-logo"
              className="aspect-square h-20"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl mb-2">Router 29340</h1>
            <p className="text-sm">Device Id: 2993CeAAS0zz1</p>
            <p className="text-sm">Uptime: 1 week</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="mt-8 grid grid-rows-2 grid-cols-2  w-fit">
            <div className=" h-32 border-b border-gray-100 border-r flex  justify-center items-center flex-col">
              <p>Status</p>
              <p
                className={` ${
                  online ? "text-green-400" : "text-red-400"
                } text-sm mb-2`}
              >
                {online ? "Online" : "Offline"}
              </p>
              <SwitchOnline setOnline={setOnline} online={online} />
            </div>
            <div className="h-32 border-b border-gray-100 flex items-center justify-center">
              <img
                src={manufacLogo}
                alt="manufacturer-logo"
                className="aspect-square h-28"
              />
            </div>
            <div className=" h-32 border-r border-gray-100 flex items-center justify-start flex-col p-5 gap-2">
              <p>Connection Speed</p>
              <img
                src={signal}
                alt="signal-logo"
                className="aspect-square h-8"
              />
              <p className="text-sm font-gray-300">300 Mbps</p>
            </div>
            <div className="h-32 flex flex-col justify-start items-center p-5 gap-3 ">
              <p>Health</p>
              <p className="text-3xl text-green-400">85%</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <AccordionDevice
            accordionText="Our IoT-enabled router offers seamless network management and monitoring through a user-friendly web interface. 
            With real-time control over network settings, device connectivity, and security features, you can effortlessly optimize your home or office network. 
            Experience enhanced performanceand convenience with our smart router solution, designed to keep you connected and in control."
            accordionTriggerText="About Device"
          />

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Smart Features</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-2">
                  <Button className="bg-green-300 text-white">
                    Energy Saving Mode
                  </Button>
                  <Button className="bg-gray-300 text-white">
                    Emergency Power Backup
                  </Button>
                  <Button className="bg-gray-300 text-white">
                    Bandwidth Stabilizer
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Safety And Security Features</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-2">
                  <Button className="bg-green-300 text-white">AI Shield</Button>
                  <Button className="bg-green-300 text-white">
                    Temperature Observer
                  </Button>
                  <Button className="bg-gray-300 text-white">
                    Electric Surge Preventor
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </main>
  );
}
export default Dashboard;
