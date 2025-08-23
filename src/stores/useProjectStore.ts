import { create } from "zustand";
import type { Project } from "@/types/project";
import { PROJECTS } from "@/constants";

// I made this store for testing purposes only while the backend api for this is not yet ready
type ProjectStore = {
  projects: Project[];
  addProject: (project: Project) => void;
};

export const useProjectStore = create<ProjectStore>((set, get) => ({
  projects: PROJECTS,
  addProject: (project) => set({ projects: get().projects.concat(project) }),
}));
