export const SubscriberInfo = ({
  imageUrl,
  info,
  label,
}: {
  imageUrl: string;
  info: string;
  label: string;
}) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-3  items-center">
        <img src={imageUrl} alt="info-icon" className="aspect-square h-6" />
        <p>{label}</p>
      </div>
      <div className="text-gray-500 ml-8">{info}</div>
    </div>
  );
};
