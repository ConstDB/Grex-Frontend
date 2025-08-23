import { BsPersonWorkspace } from "react-icons/bs";
import { LuBrainCircuit } from "react-icons/lu";
import { TbReportAnalytics } from "react-icons/tb";
import { FaTasks, FaComments } from "react-icons/fa";
import { GoTasklist, GoProjectSymlink } from "react-icons/go";
import { CiCalendar, CiMail } from "react-icons/ci";
import type { Project } from "@/types/project";

export const FEATURE_CARDS = [
  {
    title: "Workspace Management",
    description:
      "Create dedicated project spaces with role-based permissions. Leaders and Members work together seamlessly.",
    icon: BsPersonWorkspace,
  },
  {
    title: "Task Management",
    description:
      "Assign tasks, set deadlines, and track progress with automated reminders and filtering capabilities.",
    icon: FaTasks,
  },
  {
    title: "Real-time Communication",
    description:
      "Chat, threaded discussions, file sharing, and mentions keep everyone connected and informed.",
    icon: FaComments,
  },
  {
    title: "@GrexAI Assistant",
    description:
      "Built-in AI helps with task breakdowns, workspace summaries, and smart automation.",
    icon: LuBrainCircuit,
  },
  {
    title: "Progress Analytics",
    description:
      "Visual dashboards show task completion, member activity, and deadline performance.",
    icon: TbReportAnalytics,
  },
];

export const SIDEBAR_ITEMS = [
  { title: "My Projects", url: "", icon: GoProjectSymlink, collapsible: true },
  { title: "My Tasks", url: "", icon: GoTasklist },
  { title: "My Calendar", url: "", icon: CiCalendar },
  { title: "My Inbox", url: "", icon: CiMail },
];

export const PROJECTS: Project[] = [
  {
    name: "Student Attendance System",
    description:
      "A web-based system for tracking student attendance using QR codes. Teachers can generate reports and students can check their attendance history.",
    project_nature: "Web Development / Database",
    start_date: new Date("2025-08-01"),
    due_date: new Date("2025-09-15"),
  },
  {
    name: "Library Management App",
    description:
      "A mobile app that allows students to borrow, return, and reserve books digitally. The system also includes overdue notifications.",
    project_nature: "Mobile App Development",
    start_date: new Date("2025-08-10"),
    due_date: new Date("2025-10-01"),
  },
  {
    name: "Simple Chat Application",
    description:
      "A real-time chat application built with WebSockets to allow students and professors to communicate during online classes.",
    project_nature: "Software Development / Networking",
    start_date: new Date("2025-08-20"),
    due_date: new Date("2025-10-10"),
  },
  {
    name: "Grade Management System",
    description:
      "A system for teachers to encode student grades and automatically compute final averages based on configurable formulas.",
    project_nature: "Web Development / Data Processing",
    start_date: new Date("2025-08-15"),
    due_date: new Date("2025-09-30"),
  },
  {
    name: "Campus Navigation App",
    description:
      "A mobile app that helps new students navigate the campus using GPS and building information.",
    project_nature: "Mobile App Development / Maps",
    start_date: new Date("2025-09-01"),
    due_date: new Date("2025-10-20"),
  },
  {
    name: "Online Quiz System",
    description:
      "An online platform where instructors can create quizzes, students can answer them in real time, and the system auto-checks results.",
    project_nature: "Web Development / Education Tech",
    start_date: new Date("2025-09-05"),
    due_date: new Date("2025-10-25"),
  },
];
