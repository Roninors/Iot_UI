import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DeviceTypeDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-500 text-white">+ Add Device Type</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Device Type</DialogTitle>
          <DialogDescription>
            This where you can add your device types. Click submit when you're
            done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Device Type
            </Label>
            <Input
              id="name"
              className="col-span-3"
              placeholder="Device type ..."
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="bg-blue-500 text-white">
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
