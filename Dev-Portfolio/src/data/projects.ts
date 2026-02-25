export interface Project {
  title: string;
  description: string;
  tech: string[];
  repoUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "My Project",
    description: "...",
    tech: ["React", "TypeScript"],
    repoUrl: "https://github.com/you/repo",
  },
];