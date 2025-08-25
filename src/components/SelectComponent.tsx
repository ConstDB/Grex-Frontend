import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { capitalizeWord } from "@/utils";
import { Label } from "@radix-ui/react-label";

type Props = {
  label: string;
  value: string;
  values: string[];
  placeholder?: string;
  onChange: (value: string) => void;
};

export default function SelectComponent({
  label,
  value,
  values,
  placeholder,
  onChange,
}: Props) {
  return (
    <div className="grid gap-2">
      <Label className="text-sm font-medium leading-none">{label}</Label>
      <Select onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder}>
            {capitalizeWord(value)}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{label}</SelectLabel>
            {values.map((val) => (
              <SelectItem key={val} value={val}>
                {capitalizeWord(val)}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
