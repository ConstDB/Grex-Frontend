import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, type PropsWithChildren } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import DeleteCategoryDialog from "./DeleteCategoryDialog";

type Props = PropsWithChildren & {
  category: string;
  onEdit: () => void;
};

export default function CategoryDropdown({
  children,
  category,
  onEdit,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuItem className="flex space-x-2" onClick={onEdit}>
              <CiEdit className="size-4" />
              <span>Edit</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex space-x-2"
              onClick={() => setOpen(true)}
            >
              <AiOutlineDelete className="size-4 text-error" />
              <span className="text-error">Delete</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <DeleteCategoryDialog
        open={open}
        onOpenChange={setOpen}
        categoryName={category}
      />
    </>
  );
}
