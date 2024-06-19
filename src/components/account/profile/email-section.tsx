import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";

export async function EmailSection() {
  const user = await currentUser();
  return (
    <div className="grid items-center grid-cols-3 p-6">
      <div className="font-medium">Email address</div>
      <div className="flex items-center gap-x-2">
        {user?.emailAddresses[0].emailAddress}
        <Badge variant={"outline"} className="text-muted-foreground">
          primary
        </Badge>
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
