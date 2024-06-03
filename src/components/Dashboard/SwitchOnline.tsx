import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function SwitchOnline({
  setOnline,
  online,
}: {
  online: boolean;
  setOnline: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex items-center space-x-2">
      <Switch
        checked={online}
        className={`data-[state=checked]:bg-blue-500`}
        onCheckedChange={() => {
          setOnline(!online);
        }}
      />
    </div>
  );
}
