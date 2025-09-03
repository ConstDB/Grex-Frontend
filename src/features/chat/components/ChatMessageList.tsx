import { useEffect, useRef } from "react";
import ChatMessageItem from "./ChatMessageItem";
import { useMessageStore } from "@/stores/useMessagesStore";

export default function ChatMessageList() {
  const messages = useMessageStore((state) => state.messages);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 flex flex-col gap-2 max-h-[690px] overflow-y-scroll py-4">
      {messages.map((message, index) => {
        const isUsersMessage = message.sender_id === 1; // change this to user_id
        const prevMsg = messages[index - 1];
        const showMetadata =
          !prevMsg || prevMsg.sender_id !== message.sender_id;

        return (
          <ChatMessageItem
            key={index}
            message={message}
            showMetadata={showMetadata}
            isUsersMessage={isUsersMessage}
          />
        );
      })}
      <div ref={bottomRef} />
    </div>
  );
}
