export interface Project {
  title: string;
  description: string;
  tech: string[];
  repoUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: 'File Upload Dashboard',
    description:
      'A responsive file management app with drag-and-drop uploads, per-file progress tracking, toast notifications, and a demo login system. Built with a clean card layout and full mobile support.',
    tech: ['React', 'TypeScript', 'Vite', 'CSS'],
    repoUrl: 'https://github.com/Winter0996/File-Upload-Dashboard',
  },
  {
    title: 'Gaming Social Media App',
    description:
      'A full-stack gaming social platform with real-time chat powered by Socket.IO, user authentication, API integration, and a MySQL database for persistent data storage.',
    tech: ['HTML5', 'Bootstrap CSS', 'JavaScript', 'Python', 'Flask', 'Socket.IO', 'MySQL'],
    repoUrl: 'https://github.com/Winter0996/CSIS3126_Winter',
  },
  {
    title: 'Developer Portfolio',
    description:
      'This portfolio — a single-page React app with a fixed sidebar, dark/light mode toggle, live GitHub stats, certifications, and a contact form. Deployed via GitHub Pages.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    repoUrl: 'https://github.com/Winter0996/Dev-Portfolio',
  },
];
