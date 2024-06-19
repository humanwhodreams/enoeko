import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

export function OtherNumSection() {
  return (
    <div className="grid items-center grid-cols-3 p-6">
      <div className="font-medium">Other number</div>
      <div>
        <div>Add a number &rarr;</div>
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
