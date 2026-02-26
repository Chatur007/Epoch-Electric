import { ReactNode } from 'react';
import PageLayout from '@/components/PageLayout';

interface LayoutProps {
  children: ReactNode;
}

export default function CarouselLayout({ children }: LayoutProps) {
  return <PageLayout hideFooter>{children}</PageLayout>;
}
