import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";

export async function NameSection() {
  const user = await currentUser();

  return (
    <div className="grid items-center grid-cols-3 p-6">
      <div className="font-medium">Name</div>
      <div>
        {user?.firstName} {user?.lastName}
      </div>
      <div className="place-self-end">
        <Button type="button" variant={"ghost"} size={"icon"}>
          <MoreHorizontal className="flex-shrink-0 size-5 text-muted-foreground" />
          <span className="sr-only">options</span>
        </Button>
      </div>
    </div>
  );
}
