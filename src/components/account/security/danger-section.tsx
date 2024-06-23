import { Button } from "@/components/ui/button";

export function DangerSection() {
  return (
    <div className="grid items-start grid-cols-3 p-6">
      <div className="font-medium">Delete account</div>
      <div>
        <div className="text-sm font-medium text-muted-foreground">
          Accout will be deleted forever.<br/>Cannot be recovered.
        </div>
      </div>
      <div className="place-self-end">
        <Button type="button" variant={"destructive"} size={"sm"}>
          Delete your account
        </Button>
      </div>
    </div>
  );
}
