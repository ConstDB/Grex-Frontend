import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask } from "../../api/taskApi";

export const useDeleteTaskMutation = (workspace_id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (task_id: number) => deleteTask(workspace_id, task_id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks", { workspace_id }] }),
  });
};
