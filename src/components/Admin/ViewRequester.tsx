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

export function ViewRequester() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-500 text-white w-fit">View</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Request Details</DialogTitle>
          <DialogDescription>
            This where you can view your requester's details.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 text-sm">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Requester's Name:
            </Label>
            <p>Ronin Manso</p>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Location:
            </Label>
            <p>Bais City</p>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Email:
            </Label>
            <p>johndoe@gmail.com</p>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Subscription Type:
            </Label>
            <p>Premium</p>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Geographic Area Classification:
            </Label>
            <p>Urban</p>
          </div>
          <div className="flex flex-col">
            <Label htmlFor="name" className="text-left mb-2">
              Message:
            </Label>
            <p>
              Hello, I'm interested in subscribing to your IoT automation
              services. Could you please guide me through the subscription
              process? Looking forward to your response.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
