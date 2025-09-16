import type { User } from "@/types/user";

export const mockUser: User = {
  user_id: 1231,
  username: "nelman",
  email: "jonel@gmail.com",
  phone_number: "09708075290",
  first_name: "Jonel",
  last_name: "Villaver",
  profile_picture: "https://github.com/shadcn.png",
  role: "Fullstack Developer",
  bio: "Fullstack developer passionate about React and UX.",
  skills: ["React", "TypeScript", "UI/UX"],
  social_links: {
    github: "https://github.com/nelman25",
    linkedin: "https://linkedin.com/in/jonelvillaver",
    portfolio: "https://nelman.dev",
    twitter: "https://twitter.com/jonelvillaver",
    email: "mailto:yourname@example.com",
  },
};

export const tasks_summary = {
  totalAssigned: 42,
  completed: 35,
  pending: 5,
  overdue: 2,
};

export const recent_activity = [
  {
    type: "task_completed",
    taskId: 567,
    description: "Completed Task: Fix login bug",
    timestamp: "2025-09-14T10:30:00Z",
  },
  {
    type: "comment_added",
    taskId: 789,
    description: "Commented on Task: Update homepage UI",
    timestamp: "2025-09-15T16:45:00Z",
  },
  {
    type: "task_created",
    taskId: 901,
    description: "Created Task: Write unit tests for payment module",
    timestamp: "2025-09-15T18:20:00Z",
  },
  {
    type: "profile_updated",
    userId: 123,
    description: "Updated profile picture",
    timestamp: "2025-09-16T09:05:00Z",
  },
  {
    type: "workspace_joined",
    workspaceId: 456,
    description: "Joined Workspace: Frontend Revamp",
    timestamp: "2025-09-16T10:15:00Z",
  },
  {
    type: "task_assigned",
    taskId: 234,
    description: "Assigned to Task: Integrate Firebase Auth",
    timestamp: "2025-09-16T11:00:00Z",
  },
  {
    type: "task_reopened",
    taskId: 111,
    description: "Reopened Task: Optimize image loading",
    timestamp: "2025-09-16T12:45:00Z",
  },
  {
    type: "comment_added",
    taskId: 234,
    description: "Commented on Task: Added clarification on API endpoints",
    timestamp: "2025-09-16T13:10:00Z",
  },
  {
    type: "milestone_completed",
    milestoneId: 678,
    description: "Completed Milestone: Phase 1 Deployment",
    timestamp: "2025-09-16T14:25:00Z",
  },
  {
    type: "task_completed",
    taskId: 222,
    description: "Completed Task: Implement dark mode toggle",
    timestamp: "2025-09-16T15:40:00Z",
  },
];

// tasks_summary: {
//   totalAssigned: 42,
//   completed: 35,
//   pending: 5,
//   overdue: 2,
// },

// recent_activity: [
//   {
//     type: "task_completed",
//     taskId: "t567",
//     description: "Completed Task: Fix login bug",
//     timestamp: "2025-09-14T10:30:00Z",
//   },
//   {
//     type: "comment_added",
//     taskId: "t789",
//     description: "Commented on Task: Update homepage UI",
//     timestamp: "2025-09-15T16:45:00Z",
//   },
// ],

// achievements: [
//   { id: "a1", name: "Task Master", description: "Completed 100 tasks" },
//   { id: "a2", name: "Early Adopter", description: "Joined in beta phase" },
// ],
