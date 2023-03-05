import { ReactNode, useEffect } from 'react';

export interface PageProps {
  title?: string;
  children: ReactNode;
}

export default function Tab({ title, children }: PageProps) {
  useEffect(() => {
    document.title = `${
      title && title.length > 0 ? `${title} - ` : ''
    }PorqueEUprogramo`;
  }, [title]);
  return <>{children}</>;
}
