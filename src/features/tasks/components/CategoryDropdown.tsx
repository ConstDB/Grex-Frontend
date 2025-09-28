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
  isLeader: boolean;
};

export default function CategoryDropdown({ children, category, onEdit, isLeader }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuItem
              className="flex space-x-2"
              onClick={onEdit}
              disabled={!isLeader}
              title={!isLeader ? "You don't have permission to edit this category" : ""}
            >
              <CiEdit className="size-4" />
              <span>Edit</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex space-x-2"
              onClick={() => setOpen(true)}
              disabled={!isLeader}
              title={!isLeader ? "You don't have permission to delete this category" : ""}
            >
              <AiOutlineDelete className="size-4 text-error" />
              <span className="text-error">Delete</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <DeleteCategoryDialog open={open} onOpenChange={setOpen} categoryName={category} />
    </>
  );
}
