import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { PropsWithChildren } from "react";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";

type Props = PropsWithChildren & {
  category: string;
  onEdit: () => void;
};

export default function CategoryDropdown({ children, onEdit }: Props) {
  // DELETE and EDIT category

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem className="flex space-x-2" onClick={onEdit}>
            <CiEdit className="size-4" />
            <span>Edit</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex space-x-2">
            <AiOutlineDelete className="size-4 text-error" />
            <span className="text-error">Delete</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
