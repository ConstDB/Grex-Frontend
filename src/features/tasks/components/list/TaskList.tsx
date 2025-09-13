import { Plus } from "lucide-react";
import TaskRow from "./TaskRow";
import { useFetchTasksQuery } from "../../hooks/queries/useFetchTasksQuery";
import { useParams } from "react-router";

export default function TaskList() {
  const { workspace_id } = useParams();
  const { data: tasks } = useFetchTasksQuery(Number(workspace_id));

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
