import * as React from "react";
import { cn } from "@/lib/utils";

interface SubNavItemProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
}

const SubNavItem: React.FC<SubNavItemProps> = ({
  className,
  active,
  ...props
}) => {
  return (
    <div
      className={cn(
        "cursor-pointer pb-3 transition-colors",
        {
          "border-b-2 border-primary text-primary": active,
          "text-gray-500": !active,
        },
        className
      )}
      {...props}
    />
  );
};

export { SubNavItem };
