import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editSubtask } from "../../api/subtaskApi";

export const usePatchSubtaskMutation = (task_id: number) => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, { subtask_id: number; is_done: boolean }>({
    mutationFn: ({ subtask_id, is_done }) => editSubtask(task_id, subtask_id, { is_done }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subtasks", { task_id }] });
    },
  });
};
