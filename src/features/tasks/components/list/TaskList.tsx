import { Plus } from "lucide-react";
import TaskRow from "./TaskRow";
import { useFetchTasksQuery } from "../../hooks/queries/useFetchTasksQuery";
import { useParams } from "react-router";
import noTasks from "@/assets/noTask.svg";

export default function TaskList() {
  const { workspace_id } = useParams();
  const { data: tasks } = useFetchTasksQuery(Number(workspace_id));

  if (tasks?.length === 0)
    return (
      <div className="min-w-[500px] w-full flex items-center justify-center h-[500px]">
        <div className="flex flex-col items-center">
          <img src={noTasks} alt="No tasks icons" className="size-56" />
          <h3 className="mt-2 text-lg font-medium text-dark-text">You're all caught up</h3>
          <p className="text-dark-subtle">No tasks available. Add one to begin</p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen text-white p-6">
      <div className="max-w-8xl mx-auto">
        <div className="bg-dark-surface rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="">
              <tr className="bg-dark-muted">
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Task</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Description</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Category</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Assignee</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Due Date</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Priority</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Progress</th>
              </tr>
            </thead>

            <tbody>
              {tasks?.map((task) => (
                <TaskRow key={task.task_id} task={task} />
              ))}
            </tbody>
          </table>

          <div className="px-4 py-3 border-t border-gray-800">
            <button className="flex items-center gap-2 text-gray-400 hover:text-white text-sm">
              <Plus className="w-4 h-4" />
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
