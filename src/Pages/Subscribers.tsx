import { DataTable } from "@/components/Admin/DataTable";
import { SubscriberInfo } from "@/components/Admin/SubscriberInfo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import profileTemplate from "/subscriber-profile.png";
import { SummaryCard } from "@/components/Admin/SummaryCard";
function Subscribers() {
  return (
    <div className="w-full h-full flex p-5 gap-5">
      <div className="flex flex-col gap-5">
        <div className="flex  items-center justify-center gap-5">
          <SummaryCard
            summaryHeader="Blocked"
            summaryValue={100}
            weeksPercent={12}
            daysPercent={2}
            dailyType="Blocked Subscribers"
            dailyTotal={50}
            backgroundColor="bg-red-400"
          />
          <SummaryCard
            summaryHeader="Offline"
            summaryValue={50}
            weeksPercent={2}
            daysPercent={1}
            dailyType="Offline"
            dailyTotal={20}
            backgroundColor="bg-red-400"
          />
          <SummaryCard
            summaryHeader="Active"
            summaryValue={500}
            weeksPercent={60}
            daysPercent={40}
            dailyType="Active"
            dailyTotal={300}
            backgroundColor="bg-green-400"
          />
        </div>
        <DataTable />
      </div>
      <section className="h-full flex-1 flex-col p-5 bg-white rounded-md max-h-[85vh] overflow-y-scroll">
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
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Roles</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-4">
                  <div>
                    <Button className="bg-green-400 text-white">
                      Add Role
                    </Button>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-lg">Roles:</p>
                    <p className="bg-gray-300 w-fit px-2 py-1 rounded-md text-black">
                      Subscriber/User
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Admin Actions</AccordionTrigger>
              <AccordionContent>
                <div className="flex gap-4">
                  <Button className="bg-red-400 text-white">Block</Button>
                  <Button className="bg-red-400 text-white">Delete</Button>
                  <Button className="bg-green-400 text-white">Unblock</Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
export default Subscribers;
