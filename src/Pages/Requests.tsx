import { DataTableRequests } from "@/components/Admin/DataTableRequests";
import { SummaryCard } from "@/components/Admin/SummaryCard";
function Requests() {
  return (
    <div className="w-full h-full flex flex-col p-5 gap-5">
      <div className="w-full flex gap-5">
        <SummaryCard
          summaryHeader="Approved Requests"
          summaryValue={400}
          weeksPercent={12}
          daysPercent={5}
          dailyType="Requests"
          dailyTotal={300}
          backgroundColor="bg-green-400"
        />
        <SummaryCard
          summaryHeader="Declined Requests"
          summaryValue={100}
          weeksPercent={12}
          daysPercent={2}
          dailyType="Declines"
          dailyTotal={50}
          backgroundColor="bg-red-400"
        />
        <SummaryCard
          summaryHeader="Canceled Requests"
          summaryValue={50}
          weeksPercent={2}
          daysPercent={1}
          dailyType="Cancels"
          dailyTotal={20}
          backgroundColor="bg-red-400"
        />
        <SummaryCard
          summaryHeader="Ongoing Installation"
          summaryValue={500}
          weeksPercent={60}
          daysPercent={40}
          dailyType="Ongoing Installations"
          dailyTotal={300}
          backgroundColor="bg-blue-400"
        />
      </div>
      <DataTableRequests />
    </div>
  );
}
export default Requests;
