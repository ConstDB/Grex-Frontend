import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSubtask } from "../../api/subtaskApi";
import type { Subtask } from "@/types/task";

export const useDeleteSubtaskMutation = (task_id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (subtask_id: number) => deleteSubtask(task_id, subtask_id),
    onSuccess: (_, subtask_id) => {
      queryClient.setQueryData<Subtask[]>(["subtasks", { task_id }], (old) => {
        if (!old) return old;
        return old.filter((s) => s.subtask_id !== subtask_id);
      });
    },
  });
};
