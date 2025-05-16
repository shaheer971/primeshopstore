
import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export const ProductCardSkeleton = () => {
  return (
    <Card className="w-full space-y-5 p-4" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-[240px] rounded-lg bg-muted" />
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-5 w-3/5 rounded-lg bg-muted" />
        </Skeleton>
        <div className="flex justify-between">
          <Skeleton className="w-1/4 rounded-lg">
            <div className="h-4 rounded-lg bg-muted" />
          </Skeleton>
          <Skeleton className="w-1/4 rounded-lg">
            <div className="h-4 rounded-lg bg-muted" />
          </Skeleton>
        </div>
      </div>
    </Card>
  );
};

export const ProductGridSkeleton = ({ count = 4 }: { count?: number }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {Array(count).fill(0).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
};
