import manufacLogo from "/logoipsum-297.svg";
import locationLogo from "/placeholder.png";
export const DeviceCard = () => {
  return (
    <div className="w-56 flex flex-col border border-gray-200 rounded-md p-3 cursor-pointer hover:border-blue-500 transition duration-75">
      <div className="flex justify-between items-center">
        <p className="text-green-400 text-sm">On</p>
        <img src={manufacLogo} alt="manufacturer-logo" className="w-16" />
      </div>
      <div className="w-full text-center mt-5 mb-2">Router 29340</div>
      <div className="flex gap-3 items-center justify-center mb-6">
        <img src={locationLogo} alt="location-logo" className="w-4" />
        <p className="text-xs">Living Room</p>
      </div>
    </div>
  );
};
