import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Engineering excellence in action across turnkey electrical and instrumentation projects.',
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
