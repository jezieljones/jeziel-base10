import { Select, SelectItem } from "@tremor/react";
import { CalendarIcon } from "@heroicons/react/outline";

export default function SelectCompanyDropdown({selections, onChange, value, name}) {
  const tname = selections.find(s => s.id === `${value}`)
  if (!selections) return null
  return (
    <div className="max-w-sm mx-auto space-y-6">
      <Select onChange={(e) => onChange(e, name)} value={value}>
        {
          selections.map((v, idx) => {
            return (
              <SelectItem key={idx} value={v.id} icon={CalendarIcon}>
                {v.name}
              </SelectItem>
            )
          
          })
        }
      </Select>
    </div>
  );
}