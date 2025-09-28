import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useCreateCategoryMutation } from "../../hooks/mutations/useCreateCategoryMutation";
import { useParams } from "react-router";
import { toast } from "sonner";
import { useEditCategoryMutation } from "../../hooks/mutations/useEditCategoryMutation";
import { useFetchCategoryQuery } from "../../hooks/queries/useFetchCategoriesQuery";
import { getCategoryId } from "@/utils";

type Props = {
  onCancel: () => void;
  category?: string;
};
export default function NewCategoryInput({ onCancel, category }: Props) {
  const [newCategory, setNewCategory] = useState(category ?? "");

  const { workspace_id } = useParams();
  const workspaceId = Number(workspace_id);

  const { data: categories = [] } = useFetchCategoryQuery(workspaceId);
  const { mutate: editCategory } = useEditCategoryMutation(workspaceId);
  const { mutate: createCategory } = useCreateCategoryMutation(workspaceId);

  const handleSubmit = () => {
    // this means the user only wants to edit
    if (category) {
      const categoryId = getCategoryId(category, categories);
      if (categoryId) {
        editCategory({ name: newCategory, categoryId });
        toast(`Renamed ${category} to ${newCategory}`);
      }
    } else {
      // user is creating a new category
      createCategory(newCategory, {
        onSuccess: () => toast.success("Category created"),
        onError: () => toast.error("Failed to create category"),
      });
      toast(`Create ${newCategory} category.`);
    }

    onCancel();
  };

  return (
    <div className="flex flex-col space-y-3 w-full max-w-[250px] self-start rounded-sm mt-6">
      <Input
        type="text"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
      />
      <div className="flex space-x-2 text-sm">
        <button onClick={handleSubmit} className="px-2 py-1 rounded text-light-text bg-brand-primary hover">
          {category ? "Save changes" : "Add Category"}
        </button>
        <button onClick={onCancel} className="px-2 py-1">
          Cancel
        </button>
      </div>
    </div>
  );
}
