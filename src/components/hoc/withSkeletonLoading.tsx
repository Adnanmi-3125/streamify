import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface SkeletonLayout {
  width: string;
  height: string;
  className?: string;
}

interface WithSkeletonLoadingProps {
  loading: boolean;
  skeletonLayout: SkeletonLayout[];
  skeletonCount: number;
  wrapperClass: string;
  headerClassName?: string;
}

const withSkeletonLoading = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return ({
    loading,
    skeletonLayout,
    skeletonCount,
    wrapperClass,
    headerClassName,
    ...props
  }: WithSkeletonLoadingProps & P) => {
    if (loading) {
      return (
        <div className={wrapperClass}>
          {headerClassName && <Skeleton className={headerClassName} />}

          {Array.from({ length: skeletonCount }).map((_, index) => (
            <div
              key={index}
              className="w-full flex flex-col gap-3 p-5 border rounded-xl shadow mb-2"
            >
              {skeletonLayout.map((layout, idx) => (
                <Skeleton
                  key={idx}
                  className={`${layout.width} ${layout.height} ${
                    layout.className || ""
                  }`}
                />
              ))}
            </div>
          ))}
        </div>
      );
    }
    return <WrappedComponent {...(props as P)} />;
  };
};

export default withSkeletonLoading;
