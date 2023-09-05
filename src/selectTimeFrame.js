import { Select, SelectItem } from "@tremor/react";
import { CalendarIcon } from "@heroicons/react/outline";

export default function SelectExample() {
  return (
    <div className="max-w-sm mx-auto space-y-6">
      <Select>
        <SelectItem value="year" icon={CalendarIcon}>
          Annual
        </SelectItem>
        <SelectItem value="quarter" icon={CalendarIcon}>
          Quarter
        </SelectItem>
        <SelectItem value="month" icon={CalendarIcon}>
          Month
        </SelectItem>
      </Select>
    </div>
  );
}