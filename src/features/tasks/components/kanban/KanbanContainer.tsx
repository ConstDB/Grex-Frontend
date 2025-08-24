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

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (source.droppableId !== destination.droppableId) return;

    const newData = { ...data };

    const column = newData[source.droppableId as keyof TaskGroups];

    const [movedTask] = column.splice(source.index, 1);
    column.splice(destination.index, 0, movedTask);

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
