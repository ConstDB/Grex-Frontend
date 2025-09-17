import api from "@/lib/axios";
import type { Notification } from "@/types/notification";
import { AxiosError } from "axios";

export const pollNotifications = async (user_id: number) => {
  try {
    const { data } = await api.get<Notification[]>("/notification-recipients/stream", {
      params: { user_id },
    });

    pollNotifications(user_id);
    return data;
  } catch (err) {
    if (err instanceof AxiosError) {
      console.log(err.message);
      console.log(err.cause);
    }
    setTimeout(() => pollNotifications(user_id), 3000);
  }
};

export const getNotifications = async (user_id: number) => {
  const { data } = await api.get<Notification[]>("/notification-recipients", { params: { user_id } });
  return data;
};
