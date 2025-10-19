import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
const CardSkeleton = () => {
  return (
    <>
      <div className="bg-card space-y-4 rounded-2xl border p-4 shadow-sm">
        {/* Header — profile image + name */}
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-full" /> {/* profile pic */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-[120px] rounded-full" /> {/* username */}
            <Skeleton className="h-3 w-[80px] rounded-full" /> {/* time */}
          </div>
        </div>

        {/* Post image */}
        <Skeleton className="h-[250px] w-full rounded-xl" />

        {/* Caption lines */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full rounded-full" />
          <Skeleton className="h-4 w-[80%] rounded-full" />
        </div>

        {/* Like / comment / share section */}
        <div className="flex justify-between pt-2">
          <Skeleton className="h-4 w-[60px] rounded-full" />
          <Skeleton className="h-4 w-[60px] rounded-full" />
          <Skeleton className="h-4 w-[60px] rounded-full" />
        </div>
      </div>
    </>
  );
};

export default CardSkeleton;
