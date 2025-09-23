import type { QuickLink } from "@/types/project";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createQuickLink } from "../../api/workspaceApi";

export const useCreateQuickLinkMutation = (workspace_id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: QuickLink) => createQuickLink(workspace_id, payload),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["quick-links", { workspace_id }] }),
  });
};
