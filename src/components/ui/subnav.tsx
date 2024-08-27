import * as React from "react";
import { cn } from "@/lib/utils";

interface SubnavProps extends React.HTMLAttributes<HTMLDivElement> {}

const Subnav: React.FC<SubnavProps> = ({ className, ...props }) => {
  return (
    <div className={cn("flex space-x-4 border-b pb-3", className)} {...props} />
  );
};

export { Subnav };
