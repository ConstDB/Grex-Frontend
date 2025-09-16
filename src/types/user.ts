import type { JSX } from "react";

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  portfolio?: string;
  twitter?: string;
  discord?: string;
  email?: string;
}

export interface Workspace {
  workspaceId: string;
  name: string;
  role: string;
  joinedAt: string;
}

export interface TaskSummary {
  totalAssigned: number;
  completed: number;
  pending: number;
  overdue: number;
}

export interface Activity {
  type: "task_completed" | "comment_added";
  taskId: string;
  description: string;
  timestamp: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
}

export interface EditUser {
  username?: string | null;
  email?: string;
  phone_number?: string;
  first_name?: string;
  last_name?: string;
  profile_picture?: string | null;
  role?: string | null; // e.g., "Fullstack Developer", "Project Manager"
  bio?: string | null;
  skills?: string[]; // empty array if no skills yet
  social_links?: SocialLinks; // can be null/undefined
}

export interface User {
  user_id: number;
  username: string | null;
  email: string;
  phone_number: string;
  first_name: string;
  last_name: string;
  profile_picture: string | null;
  role: string | null; // e.g., "Fullstack Developer", "Project Manager"
  bio: string | null;
  skills: string[]; // empty array if no skills yet
  social_links: SocialLinks; // can be null/undefined
  // social_link: { // SHAPE
  //   github?: string;
  //   linkedin?: string;
  //   portfolio?: string;
  //   twitter?: string;
  //   discord?: string;
  //   email?: string; // iba talaga to. ex: mailto:yourname@example.com
  // }
}

type BaseSocialLink = {
  icon: JSX.Element;
  title: string;
};

type UrlSocialLink = BaseSocialLink & {
  type?: undefined;
  url: string | undefined;
  value?: undefined;
};

export type SocialLink = UrlSocialLink;
