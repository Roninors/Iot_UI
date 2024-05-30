type DeviceType = {
  deviceName: string;
  deviceLogo: string;
};
function Dashboard() {
  const deviceType: DeviceType[] = [
    {
      deviceName: "All Devices",
      deviceLogo: "dashboard.png",
    },
    {
      deviceName: "All Devices",
      deviceLogo: "dashboard.png",
    },
    {
      deviceName: "Router",
      deviceLogo: "dashboard.png",
    },
    {
      deviceName: "IP Cameras",
      deviceLogo: "dashboard.png",
    },
    {
      deviceName: "Air Conditioner",
      deviceLogo: "dashboard.png",
    },
    {
      deviceName: "Lights",
      deviceLogo: "dashboard.png",
    },
    {
      deviceName: "Door Locks",
      deviceLogo: "dashboard.png",
    },
  ];
  return (
    <main className="w-full h-full flex bg-gray-50">
      <div className="w-full flex flex-col p-5">
        <div className=" flex gap-6 mb-8">
          <h1 className="text-3xl">Devices</h1>
          <button className="px-[1rem] py-[.5rem] bg-blue-500 text-white text-sm rounded-sm">
            + Add Device
          </button>
        </div>
        <div className="w-fit  overflow-y-scroll h-[76vh] shadow-sm p-5 flex flex-col bg-white rounded-sm">
          <header>
            <p className="text-gray-600 text-sm">CHOOSE DEVICE TYPE</p>
          </header>
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
        <div></div>
      </div>
      <div className="w-[30vw]"></div>
    </main>
  );
}
export default Dashboard;
