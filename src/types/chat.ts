export interface OutgoingChatMessage {
  type: "text" | "file" | "poll";
  content: string;
  reply_to: number | null;
}

export interface IncomingChatMessage {
  message_id: number;
  workspace_id: number;
  sender_id: number;
  type: "text" | "file" | "poll";
  content: string;
  reply_to: number | null;
  sent_at: string;
}

export interface ChatMessage {
  message_id: number;
  workspace_id: number;
  sender_id: number;
  nickname: string;
  profile_picture: string | null;
  message_type: "text" | "file" | "poll";
  reply_to: number | null;
  sent_at: string;
  content: string;
  file_url: string | null;
  file_type: string | null;
  question: string | null;
}

export interface PendingChatMessage {
  temp_id: string;
  workspace_id: number;
  sender_id: number;
  nickname: string;
  profile_picture: string | null;
  message_type: "text" | "file" | "poll";
  reply_to: number | null;
  sent_at: string; // new Date().toISOString()
  content: string;
  status: "pending" | "failed"; // UI state
}

export type AnyChatMessage = ChatMessage | PendingChatMessage;
