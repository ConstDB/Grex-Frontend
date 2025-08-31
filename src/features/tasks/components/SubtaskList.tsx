import SubtaskItem from "./Subtask";
import type { Subtask } from "@/types/task";

type Props = {
  subtasks: Subtask[];
  className?: string;
};

export default function SubtaskList({ subtasks, className }: Props) {
  return (
    <ul className={className}>
      {subtasks?.map((subtask) => (
        <SubtaskItem key={subtask.subtask_id} subtask={subtask} />
      ))}
    </ul>
  );
}
