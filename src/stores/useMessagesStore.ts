import { create } from "zustand";
import type { AnyChatMessage } from "@/types/chat";
import { dummyMessages } from "@/mocks/messages";

type MessagesStore = {
  messages: AnyChatMessage[];
  addMessages: (message: AnyChatMessage) => void;
};

export const useMessageStore = create<MessagesStore>((set) => ({
  messages: dummyMessages,
  addMessages: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
}));
