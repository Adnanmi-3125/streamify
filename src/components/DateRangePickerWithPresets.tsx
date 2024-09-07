import React, { useState, useEffect } from "react";
import { subMonths, format, startOfMonth, startOfYear } from "date-fns"; // startOfYear imported
import { Calendar as CalendarIcon, X, Info } from "lucide-react";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface DateRangePickerWithPresetsProps {
  onChange: (range: DateRange) => void;
}

const predefinedRanges = {
  Today: { from: startOfYear(new Date("2023-01-01")), to: new Date() },
  Last3Months: { from: subMonths(new Date(), 3), to: new Date() },
  Last6Months: { from: subMonths(new Date(), 6), to: new Date() },
  LastMonth: { from: startOfMonth(subMonths(new Date(), 1)), to: new Date() },
};

type PresetTypes = keyof typeof predefinedRanges | "Custom" | "";

const firstDayOfLastMonth = startOfMonth(subMonths(new Date(), 1));

export const DateRangePickerWithPresets: React.FC<
  DateRangePickerWithPresetsProps
> = ({ onChange }) => {
  const initialDateRange = { from: firstDayOfLastMonth, to: new Date() };
  const [preset, setPreset] = useState<PresetTypes>("");
  const [date, setDate] = useState<DateRange>(initialDateRange);
  const [popoverOpen, setPopoverOpen] = useState<boolean>(false);

  useEffect(() => {
    if (date?.from && date?.to) {
      onChange(date);
    }
  }, [date, onChange]);

  const handlePresetChange = (preset: PresetTypes) => {
    if (preset !== "Custom") {
      setDate(predefinedRanges[preset as keyof typeof predefinedRanges]);
    } else {
      setDate({ from: undefined, to: undefined });
    }
    setPreset(preset);
    if (preset !== "Custom") {
      setPopoverOpen(false);
    }
  };

  const handleCustomRangeChange = (selectedRange: DateRange | undefined) => {
    setDate(selectedRange || { from: undefined, to: undefined });
    setPreset(selectedRange ? "Custom" : "");
  };

  const handleClearFilter = () => {
    setDate(initialDateRange);
    setPreset("");
  };

  const formatPresetText = (preset: string) => {
    switch (preset) {
      case "Today":
        return "Today";
      case "Last3Months":
        return "Last 3 Months";
      case "Last6Months":
        return "Last 6 Months";
      case "Custom":
        return "Custom";
      default:
        return preset;
    }
  };

  const showToolTipMessage = (toolTip: string) => {
    switch (toolTip) {
      case "Today":
        return "Displaying today's data";
      case "Last3Months":
        return "Showing data for the Last 3 Months";
      case "Last6Months":
        return "Showing data for the Last 6 Months";
      case "Custom":
        return "Displaying custom range data";
      default:
        return "Showing data for the last month";
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center items-end">
      <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
        {preset && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="mb-4 md:mb-0 md:mr-4" asChild>
                <div className="ml-4 chip-button">
                  <span className="chip-text">{formatPresetText(preset)}</span>
                  <button className="ml-2 p-1" onClick={handleClearFilter}>
                    <X className="h-4 w-4 text-red-500" />
                  </button>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{showToolTipMessage(preset)}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full md:w-[320px] justify-between text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <div className="flex gap-2 items-center">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} -{" "}
                    {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span>Select date range</span>
              )}
            </div>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-4 w-4 ml-2 text-gray-500" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>User cohort filter</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0" align="end">
          <div className="p-4">
            <Select
              onValueChange={(value: string) =>
                handlePresetChange(value as PresetTypes)
              }
              value={preset}
            >
              <SelectTrigger className="highlight-border focus:outline-none">
                <SelectValue placeholder="Select preset" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Today">Today</SelectItem>
                <SelectItem value="Last3Months">Last 3 Months</SelectItem>
                <SelectItem value="Last6Months">Last 6 Months</SelectItem>
                <SelectItem value="Custom">Custom</SelectItem>
              </SelectContent>
            </Select>
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date.from || new Date()}
              selected={date}
              onSelect={handleCustomRangeChange}
              numberOfMonths={2}
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
