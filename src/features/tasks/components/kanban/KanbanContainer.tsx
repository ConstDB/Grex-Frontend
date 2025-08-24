import { useTaskStore } from "@/stores/useTasksStore";
import KanbanColumn from "./KanbanColumn";
import { groupTasksByStatus } from "@/utils";
import { DragDropContext } from "@hello-pangea/dnd";
import { useState } from "react";
import type { DropResult } from "@hello-pangea/dnd";
import type { TaskGroups } from "@/types/task";

export default function KanbanContainer() {
  const { tasks } = useTaskStore();
  const [data, setData] = useState<TaskGroups>(groupTasksByStatus(tasks));

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // if no destination (e.g., dropped outside the column), do nothing
    console.log("")
    if (!destination) return;

    // if dropped in the same position, do nothing
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    // prevent dragging between columns
    if (source.droppableId !== destination.droppableId) return;

    // create a new copy of the task groups
    const newData = { ...data };

    // get the source column (same as destination due to the check above)
    const column = newData[source.droppableId as keyof TaskGroups];

    // remove task from source and insert at the destination
    const [movedTask] = column.splice(source.index, 1);
    column.splice(destination.index, 0, movedTask);

    // update state
    setData(newData);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="w-full flex space-x-4">
        {Object.entries(data).map(([type, task]) => (
          <KanbanColumn key={type} type={type} tasks={task} />
        ))}
      </div>
    </DragDropContext>
  );
}
