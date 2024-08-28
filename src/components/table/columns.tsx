import { ColumnDef } from "@tanstack/react-table";
import { Stream } from "@/@types";
import { Button } from "../ui/button";
import { ArrowUpDown } from "lucide-react";

export const columns: ColumnDef<Stream>[] = [
  {
    accessorKey: "userId",
    header: "User ID",
  },
  {
    accessorKey: "songName",
    header: "Song Name",
    enableColumnFilter: false,
  },
  {
    accessorKey: "artist",
    header: "Artist",
    enableColumnFilter: false,
  },
  {
    accessorKey: "dateStreamed",
    header: ({ column }) => {
      return (
        <Button
          className="px-0 hover:bg-transparent"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date Streamed
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "streamCount",
    header: ({ column }) => {
      return (
        <Button
          className="px-0 hover:bg-transparent"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Stream Count
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];
