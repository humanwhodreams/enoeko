import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col gap-y-4">
      <Skeleton className="w-[800px] h-[80px]" />
      <Skeleton className="w-[700px] h-[70px]" />
      <Skeleton className="w-[600px] h-[60px]" />
    </div>
  );
}
