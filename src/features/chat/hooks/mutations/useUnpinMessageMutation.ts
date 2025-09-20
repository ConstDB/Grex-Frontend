import { useMutation, useQueryClient } from "@tanstack/react-query";
import { unpinMessage } from "../../api/chatApi";

export const useUnpinMessageMutation = (workspace_id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (message_id: number) => unpinMessage(workspace_id, message_id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pinned-messages", { workspace_id }] });
      queryClient.invalidateQueries({ queryKey: ["messages", workspace_id] });
    },
  });
};
