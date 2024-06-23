import { Button } from "@/components/ui/button";
import Image from "next/image";
import { currentUser } from "@clerk/nextjs/server";

export async function ImageSection() {
  const user = await currentUser();

  return (
    <div className="grid items-center grid-cols-3 p-6">
      <div className="font-medium">Profile</div>
      <div className="flex items-center gap-x-4">
        <Image
          src={`${user?.imageUrl!}`}
          alt={`${user?.firstName} profile image`}
          width={42}
          height={42}
          className="rounded-full"
          title={`${user?.firstName} ${user?.lastName}`}
        />
        <div className="font-medium">
          {user?.firstName} {user?.lastName}
        </div>
      </div>
      <div className="place-self-end">
        <Button type="button" variant={"ghost"} size={"sm"}>
          update profile
        </Button>
      </div>
    </div>
  );
}
