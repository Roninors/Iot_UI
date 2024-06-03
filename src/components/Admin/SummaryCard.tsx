import upTrend from "/increase.png";
import downTrend from "/decrease.png";
import { StringToBoolean } from "class-variance-authority/types";
type SummaryType = {
  summaryHeader: string;
  summaryValue: number;
  weeksPercent: number;
  daysPercent: number;
  dailyType: string;
  dailyTotal: number;
  backgroundColor: string;
};
export const SummaryCard = ({
  summaryHeader,
  summaryValue,
  weeksPercent,
  daysPercent,
  dailyType,
  dailyTotal,
  backgroundColor,
}: SummaryType) => {
  return (
    <div className="flex h-fit flex-col">
      <div className="w-72 p-5 flex flex-col bg-white rounded-t-sm">
        <p className=" text-gray-500 text-sm">{summaryHeader}</p>
        <p className="text-black text-6xl mt-2">{summaryValue}</p>
        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center justify-between w-fit gap-3">
            <p className="text-sm text-gray-500">Weeks</p>
            <div className="flex items-center gap-1.5">
              <img src={upTrend} alt="trend-icon" className="h-5" />
              <p className="text-sm">{weeksPercent}%</p>
            </div>
          </div>
          <div className="flex items-center justify-between w-fit gap-3">
            <p className="text-sm text-gray-500">Daily</p>
            <div className="flex items-center gap-1.5">
              <img src={downTrend} alt="trend-icon" className="h-5" />
              <p className="text-sm">{daysPercent}%</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-full flex justify-between items-center p-3 ${backgroundColor} h-10 rounded-b-sm text-white`}
      >
        <p className="text-sm">Daily {dailyType}</p>
        <p className="text-sm">{dailyTotal}</p>
      </div>
    </div>
  );
};
