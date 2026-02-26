export interface Project {
  title: string;
  description: string;
  tech: string[];
  repoUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: 'Project One | Description',
    description: 'A brief description of what this project does and the problem it solves.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    repoUrl: 'https://github.com/Winter0996/project-one',
    liveUrl: 'https://your-project.vercel.app',
  },
  {
    title: 'Project Two | Description',
    description: 'A brief description of what this project does and the problem it solves.',
    tech: ['Node.js', 'Express', 'PostgreSQL'],
    repoUrl: 'https://github.com/Winter0996/project-two',
  },
  {
    title: 'Project Three | Description',
    description: 'A brief description of what this project does and the problem it solves.',
    tech: ['React', 'Vite', 'REST API'],
    repoUrl: 'https://github.com/Winter0996/project-three',
    liveUrl: 'https://your-project-3.vercel.app',
  },
];