import userLogo from "/square.png";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";

export function AccountPopOver() {
  const nav = useNavigate();
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
          <Button
            className="bg-red-400 text-white w-fit"
            onClick={() => nav("/")}
          >
            Logout
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
