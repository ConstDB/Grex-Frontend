import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getCategoryId } from "@/utils";
import { DialogClose } from "@radix-ui/react-dialog";
import type { PropsWithChildren } from "react";
import { useParams } from "react-router";
import { toast } from "sonner";
import { useDeleteCategoryMutation } from "../hooks/mutations/useDeleteCategoryMutation";
import { useDeleteTaskMutation } from "../hooks/mutations/useDeleteTaskMutation";
import { useFetchCategoryQuery } from "../hooks/queries/useFetchCategoriesQuery";
import { useFetchTasksQuery } from "../hooks/queries/useFetchTasksQuery";

type Props = PropsWithChildren & {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  categoryName: string;
};

export default function DeleteCategoryDialog({
  children,
  categoryName,
  open,
  onOpenChange,
}: Props) {
  const { workspace_id } = useParams();
  const workspaceId = Number(workspace_id);

  const { data: tasks = [] } = useFetchTasksQuery(workspaceId);
  const { data: categories = [] } = useFetchCategoryQuery(workspaceId);
  const { mutate: deleteCategory } = useDeleteCategoryMutation(workspaceId);
  const { mutate: deleteTask } = useDeleteTaskMutation(workspaceId);

  const tasksInCategory = tasks.filter((t) => t.category === categoryName);
  const categoryId = getCategoryId(categoryName, categories);

  const handleDeleteCategory = async () => {
    if (!categoryId) {
      toast(`Cannot delete ${categoryName} because category ID is undefined.`);
      return;
    }

    try {
      await Promise.all(
        tasksInCategory.map((task) => deleteTask(task.task_id))
      );

      deleteCategory(categoryId);

      toast.success(`${categoryName} and its tasks were deleted`);
      onOpenChange(false);
    } catch {
      toast.error("Failed to delete tasks or category");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Are you sure you want to delete {categoryName}?
          </DialogTitle>
          <DialogDescription>
            The {categoryName} category and its{" "}
            <strong>{tasksInCategory.length}</strong> tasks will be deleted.
            Once deleted, they cannot be recovered.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button
            type="button"
            variant="destructive"
            onClick={handleDeleteCategory}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
