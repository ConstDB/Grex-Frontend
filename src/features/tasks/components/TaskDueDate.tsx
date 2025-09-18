import type { Task } from "@/types/task";
import { Label } from "@radix-ui/react-label";
import { formatDate } from "@/utils/index";
import { Calendar } from "lucide-react";

export default function TaskDueDate({ task }: { task: Task }) {
  return (
    <div className="flex space-x-10">
      <div className="flex items-center space-x-2 text-sm">
        <Calendar className="size-4 " />
        <Label>Due Date</Label>
      </div>
      <div className="flex items-center space-x-4">
        <p>{formatDate(task.deadline)}</p>
      </div>
    </div>
  );
}
