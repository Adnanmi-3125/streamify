import * as React from "react";
import { cn } from "@/lib/utils";

interface SubNavProps extends React.HTMLAttributes<HTMLDivElement> {}

const SubNav: React.FC<SubNavProps> = ({ className, ...props }) => {
  return (
    <div className={cn("flex space-x-4 border-b pb-3", className)} {...props} />
  );
};

export { SubNav };
