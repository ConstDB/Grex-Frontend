import type { AttachmentMessage, IncomingChatMessage, OutgoingChatMessage, PendingChatMessage, TextMessage } from "@/types/chat";

export const isTextMessageContent = (
  message: OutgoingChatMessage | IncomingChatMessage | PendingChatMessage
): message is OutgoingChatMessage & { content: TextMessage } => {
  return message.type === "text";
};

export const isAttachmentMessageContent = (
  message: OutgoingChatMessage | IncomingChatMessage | PendingChatMessage
): message is OutgoingChatMessage & { content: AttachmentMessage } => {
  return message.type === "attachment";
};
