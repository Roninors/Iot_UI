import userLogo from "/square.png";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";

export function AccountPopOver() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <img
          src={userLogo}
          alt=""
          className="h-16 aspect-square cursor-pointer"
        />
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="flex flex-col gap-3">
          <h4 className="font-medium leading-none text-xl">Account Actions</h4>
          <Button className="bg-blue-500 text-white w-fit">
            Manage Account
          </Button>
          <Button className="bg-blue-500 text-white w-fit">
            Create Profile
          </Button>
          <Button className="bg-red-400 text-white w-fit">Logout</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
