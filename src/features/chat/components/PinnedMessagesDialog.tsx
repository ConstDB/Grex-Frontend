import noMessages from "@/assets/noMessages.svg";
import PageLoader from "@/components/PageLoader";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import UserAvatar from "@/components/UserAvatar";
import type { MessageHistoryItem } from "@/types/chat";
import { formatChatDate } from "@/utils";
import type { PropsWithChildren } from "react";
import { RiUnpinFill } from "react-icons/ri";
import { useParams } from "react-router";
import { toast } from "sonner";
import { useUnpinMessageMutation } from "../hooks/mutations/useUnpinMessageMutation";
import { useFetchPinnedMessagesQuery } from "../hooks/queries/useFetchPinnedMessagesQuery";

type Props = PropsWithChildren & {};

export default function PinnedMessagesDialog({ children }: Props) {
  const { workspace_id } = useParams();
  const workspaceId = Number(workspace_id);
  const { data: pinnedMessages = [], isPending } = useFetchPinnedMessagesQuery(workspaceId);
  const { mutate: unpinMessage } = useUnpinMessageMutation(workspaceId);

  const handleUnpinMessage = (message: MessageHistoryItem) => {
    unpinMessage(message.message_id);
    toast.success(`Message unpinned`);
  };

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <div className="-mt-3">
          <h3 className="text-lg">Pinned Messages</h3>
        </div>

        <div className="max-h-[400px] overflow-y-auto no-scrollbar">
          {pinnedMessages &&
            pinnedMessages.map((message) => (
              <div key={message.message_id} className="mb-4">
                <div className="flex justify-between pl-11 text-sm text-dark-subtle">
                  <span>{message.nickname}</span>
                  <span>{formatChatDate(message.sent_at)}</span>
                </div>
                <div className="flex justify-between">
                  <div className="flex space-x-3 mt-2">
                    <UserAvatar name={message.nickname} photoUrl={message.profile_picture ?? undefined} />
                    <div className="py-2 px-4 rounded bg-dark-muted max-w-[300px] break-words whitespace-normal">
                      <p className="break-words whitespace-normal">{message.content}</p>
                    </div>
                  </div>

                  <button onClick={() => handleUnpinMessage(message)}>
                    <RiUnpinFill className="self-center text-dark-subtle" />
                  </button>
                </div>
              </div>
            ))}
        </div>

        {pinnedMessages && pinnedMessages.length === 0 && (
          <div className="flex flex-col items-center justify-center pb-12">
            {isPending && <PageLoader />}
            <img src={noMessages} alt="no attachments" />
            <h3 className="font-semibold text-lg text-dark-text">No pinned messages</h3>
            <p className="text-dark-subtle">Pin important messages to find them here easily.</p>
          </div>
        )}
        <DialogClose />
      </DialogContent>
    </Dialog>
  );
}
