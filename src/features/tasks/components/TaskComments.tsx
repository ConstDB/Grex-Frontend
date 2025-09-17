import { useFetchTaskCommentsQuery } from "@/features/workspace/hooks/queries/useFetchTaskCommentsQuery";
import { toast } from "sonner";
import CommentInput from "./CommentInput";
import CommentItem from "./CommentItem";

type Props = {
  taskId: number;
};

export default function TaskComments({ taskId }: Props) {
  const { data: comments, error } = useFetchTaskCommentsQuery(taskId);

  if (error) toast(error.message);

  if (!comments)
    return (
      <div className="h-60 flex items-center justify-center">
        <p className="text-error text-sm">Failed to get comments.</p>
      </div>
    );

  return (
    <div className="h-[700px]">
      <div className="max-h-[530px] h-[530px] overflow-y-scroll">
        {comments.length === 0 && (
          <div className="w-full flex justify-center mt-12">
            <p>No comments yet.</p>
          </div>
        )}

        {comments.map((comment) => (
          <CommentItem key={comment.comment_id} comment={comment} />
        ))}
      </div>
      <CommentInput taskId={taskId} />
    </div>
  );
}
