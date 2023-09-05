import { Select, SelectItem } from "@tremor/react";
import { CalendarIcon } from "@heroicons/react/outline";

export default function SelectDropdown({selections, onChange, value, name}) {

  if (!selections) return null
  return (
    <div className="max-w-sm mx-auto space-y-6">
      <Select onChange={(e) => onChange(e, name)} value={value}>
        {
          selections.map(v => {
            return (
              <SelectItem key={v} value={v} icon={CalendarIcon}>
                {v}
              </SelectItem>
            )
          
          })
        }
      </Select>
    </div>
  );
}