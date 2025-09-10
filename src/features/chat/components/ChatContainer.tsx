import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessageList from "./ChatMessageList";

export default function ChatContainer() {
  return (
    <div className="bg-dark-surface border border-dark-muted rounded-sm relative shadow h-full flex flex-col flex-1 w-full">
      <div className="w-2/3">
        <ChatHeader />
        <ChatMessageList />
        <ChatInput />
      </div>
      <div className="w-1/3 border border-dark-muted"></div>
    </div>
  );
}
