import { Badge } from "@/components/ui/badge";
import { capitalizeWord, getStatusStyle } from "@/utils";
import { RiProgress6Line } from "react-icons/ri";

export default function TaskStatus({ status }: { status: string }) {
  return (
    <div className="flex items-center">
      <div className="flex items-center min-w-[110px] space-x-2 text-sm">
        <RiProgress6Line className="size-4" />
        <span>Status</span>
      </div>
      <div className="p-2">
        <Badge variant="default" className={getStatusStyle(status)}>
          {capitalizeWord(status)}
        </Badge>
      </div>
    </div>
  );
}
