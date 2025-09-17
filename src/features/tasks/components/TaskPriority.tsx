import { Badge } from "@/components/ui/badge";
import type { TaskPriority } from "@/types/task";
import { capitalizeWord, getPrioLevelStyle } from "@/utils";
import { IoFlag } from "react-icons/io5";

export default function TaskPriority({ priorityLevel }: { priorityLevel: TaskPriority }) {
  return (
    <div className="flex items-center -mt-2">
      <div className="flex items-center min-w-[110px] space-x-2 text-sm">
        <IoFlag className="size-4" />
        <span>Priority</span>
      </div>
      <div className="p-2">
        <Badge variant="default" className={`rounded ${getPrioLevelStyle(priorityLevel)}`}>
          {capitalizeWord(priorityLevel)}
        </Badge>
      </div>
    </div>
  );
}
