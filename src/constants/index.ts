import { BsPersonWorkspace } from "react-icons/bs";
import { LuBrainCircuit } from "react-icons/lu";
import { TbReportAnalytics, TbLayoutDashboardFilled } from "react-icons/tb";
import { FaTasks, FaComments } from "react-icons/fa";
import { GoTasklist, GoProjectSymlink } from "react-icons/go";
import { CiCalendar, CiMail } from "react-icons/ci";

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
  { title: "Dashboard", url: "", icon: TbLayoutDashboardFilled },
  { title: "My Tasks", url: "", icon: GoTasklist },
  { title: "My Projects", url: "", icon: GoProjectSymlink, collapsible: true },
  { title: "My Calendar", url: "", icon: CiCalendar },
  { title: "My Inbox", url: "", icon: CiMail },
];

export const PROJECTS = [
  {
    title: "Grex - Collaboration Platform",
  },
  {
    title: "Operating Systems Final Project",
  },
  {
    title: "Trabahope - A smart job platform",
  },
  {
    title: "Intro to Machine Learning Final Paper",
  },
  {
    title: "Automata Theory Final Paper",
  },
];
