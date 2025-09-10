import { useEffect, useRef, useCallback, useMemo } from "react";
import ChatMessageItem from "./ChatMessageItem";
import { useChatStore } from "@/stores/useChatStore";
import { useAuth } from "@/context/auth-context";
import { useFetchMessagesQuery } from "../hooks/queries/useFetchMessagesQuery";
import { useParams } from "react-router";

export default function ChatMessageList() {
  const setMessages = useChatStore((s) => s.setMessages);
  const messages = useChatStore((s) => s.messages);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const topRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hasInitializedRef = useRef(false);
  const hasScrolledToBottomRef = useRef(false);

  const { user } = useAuth();
  const { workspace_id } = useParams<{ workspace_id: string }>();
  const workspaceId = Number(workspace_id);

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useFetchMessagesQuery(workspaceId);
  // Memoize flattened messages to prevent unnecessary re-renders
  const fetchedMessages = useMemo(() => {
    return data?.pages?.flat() ?? [];
  }, [data?.pages]);

  // Combine fetched messages with real-time messages from store
  // Remove duplicates based on message_id

  const allMessages = useMemo(() => {
    const combined = [...fetchedMessages, ...messages];
    const uniqueMessages = combined.reduce((acc, message) => {
      const id =
        "message_id" in message
          ? message.message_id
          : "temp_id" in message
          ? message.temp_id
          : null;

      if (
        id &&
        !acc.some(
          (m) =>
            ("message_id" in m
              ? m.message_id
              : "temp_id" in m
              ? m.temp_id
              : null) === id
        )
      ) {
        acc.push(message);
      }
      return acc;
    }, [] as typeof combined);

    // Sort by timestamp or message_id to ensure proper order
    return uniqueMessages.sort((a, b) => {
      const timeA = new Date(a.sent_at).getTime();
      const timeB = new Date(b.sent_at).getTime();
      return timeA - timeB;
    });
  }, [fetchedMessages, messages]);

  // Initial load: set fetched messages to store and scroll to bottom
  useEffect(() => {
    if (
      !hasInitializedRef.current &&
      status === "success" &&
      fetchedMessages.length > 0
    ) {
      setMessages(fetchedMessages);
      hasInitializedRef.current = true;

      // Scroll to bottom on initial load
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: "instant" });
        hasScrolledToBottomRef.current = true;
      }, 100);
    }
  }, [status, fetchedMessages, setMessages]);

  // Auto scroll to bottom when new real-time messages arrive
  useEffect(() => {
    if (hasScrolledToBottomRef.current && messages.length > 0) {
      const container = containerRef.current;
      if (container) {
        const isNearBottom =
          container.scrollTop + container.clientHeight >=
          container.scrollHeight - 100; // 100px threshold

        if (isNearBottom) {
          setTimeout(() => {
            bottomRef.current?.scrollIntoView({ behavior: "smooth" });
          }, 10);
        }
      }
    }
  }, [messages.length]); // Only trigger on new messages count change

  // Infinite scroll handler
  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    // Load more messages when scrolled near the top
    if (container.scrollTop < 100 && hasNextPage && !isFetchingNextPage) {
      const previousScrollHeight = container.scrollHeight;
      const previousScrollTop = container.scrollTop;

      fetchNextPage().then(() => {
        // Maintain scroll position after loading new messages
        requestAnimationFrame(() => {
          if (container) {
            const newScrollHeight = container.scrollHeight;
            const scrollDiff = newScrollHeight - previousScrollHeight;
            container.scrollTop = previousScrollTop + scrollDiff;
          }
        });
      });
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  // Attach scroll listener
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  if (status === "pending") {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p>Loading messages...</p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p>Error loading messages: {error?.message}</p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="flex-1 flex flex-col gap-2 max-h-[540px] overflow-y-scroll py-4"
    >
      {/* Loading indicator at the top */}
      {isFetchingNextPage && (
        <div ref={topRef} className="flex justify-center py-2">
          <div className="text-sm text-gray-500">Loading older messages...</div>
        </div>
      )}

      {/* Show message when no more messages to load */}
      {!hasNextPage && allMessages.length > 0 && (
        <div className="flex justify-center py-2">
          <div className="text-sm text-gray-400">No more messages</div>
        </div>
      )}

      {messages.map((message, index) => {
        const isUsersMessage = message.sender_id === user?.user_id;
        const prevMsg = allMessages[index - 1];
        const showMetadata =
          !prevMsg || prevMsg.sender_id !== message.sender_id;

        // Create a more robust unique key
        const key =
          "message_id" in message && message.message_id
            ? `msg-${message.message_id}`
            : "temp_id" in message && message.temp_id
            ? `temp-${message.temp_id}`
            : `idx-${index}-${"sent_at" in message && message.sent_at}`;

        return (
          <ChatMessageItem
            key={key}
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
