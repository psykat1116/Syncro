"use client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ElementRef, useRef, useState, useTransition } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { updateUser } from "@/action/user";

interface BioModalProps {
  initialValue: string | null;
}

const BioModal: React.FC<BioModalProps> = ({ initialValue }) => {
  const router = useRouter();
  const closeRef = useRef<ElementRef<"button">>(null);
  const [isPending, startTransition] = useTransition();
  const [value, setValue] = useState(initialValue || "");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransition(() => {
      updateUser({ bio: value })
        .then(() => {
          toast.success("Bio updated successfully");
          closeRef.current?.click();
          router.refresh();
        })
        .catch(() => {
          toast.error("Failed to update bio");
        });
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" size="sm" className="ml-auto">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Bio</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            onChange={(e) => setValue(e.target.value)}
            placeholder="User Bio"
            value={value}
            disabled={isPending}
            className="resize-none h-80"
          />
          <div className="flex items-center justify-between">
            <DialogClose asChild ref={closeRef}>
              <Button type="button" variant="ghost">
                Cancel
              </Button>
            </DialogClose>
            <Button disabled={isPending} type="submit" variant="primary">
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BioModal;
