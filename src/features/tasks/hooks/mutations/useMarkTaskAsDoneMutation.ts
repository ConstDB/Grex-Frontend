import { useMutation, useQueryClient } from "@tanstack/react-query";
import { markTaskAsDone } from "../../api/taskApi";

export const useMarkTaskAsDoneMutation = (workspace_id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (task_id: number) => markTaskAsDone(workspace_id, task_id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks", { workspace_id }] });
    },
  });
};
