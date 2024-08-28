import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { WithSkeletonLoadingProps } from "@/@types";

const withSkeletonLoading = <ComponentProps extends object>(
  WrappedComponent: React.ComponentType<ComponentProps>
) => {
  return ({
    loading,
    skeletonLayout,
    skeletonCount,
    wrapperClass,
    headerClassName,
    ...props
  }: WithSkeletonLoadingProps & ComponentProps) => {
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
    return <WrappedComponent {...(props as ComponentProps)} />;
  };
};

export default withSkeletonLoading;
