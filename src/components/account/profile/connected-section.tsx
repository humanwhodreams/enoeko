import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";

export async function ConnectedSection() {
  const user = await currentUser();

  return (
    <div className="grid items-center grid-cols-3 p-6">
      <div className="font-medium">Verification</div>
      <div className="flex items-center gap-x-4">
        <div className="font-medium text-green-500">
          {user?.primaryEmailAddress?.verification?.status}
        </div>
        <div className="font-medium text-muted-foreground">
          {user?.primaryEmailAddress?.emailAddress}
        </div>
      </div>
      <div className="place-self-end">
        <Button type="button" variant={"ghost"} size={"icon"}>
          <MoreHorizontal className="size-5 text-muted-foreground" />
          <span className="sr-only">options</span>
        </Button>
      </div>
    </div>
  );
}
