import { useAuth } from "@/context/auth-context";
import { useFetchWorkspaceQuery } from "@/features/workspace/hooks/queries/useFetchWorkspaceQuery";
import { getInitials } from "@/utils";
import { useParams } from "react-router";

export default function ChatHeader() {
  const { user } = useAuth();
  const { workspace_id } = useParams();
  const { data: project } = useFetchWorkspaceQuery(
    Number(workspace_id),
    user?.user_id
  );

  return (
    <div className="h-16 bg-muted backdrop-blur-md border-b border-white/20 shadow-sm flex items-center space-x-3 px-4">
      <div className="size-10 text-lg font-medium rounded-full bg-brand-primary border border-brand-light flex items-center justify-center text-light-text">
        {getInitials(project?.name)}
      </div>
      <span className="text-dark-text font-medium">{project?.name}</span>
    </div>
  );
}
