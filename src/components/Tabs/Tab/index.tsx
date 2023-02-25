import { ReactNode } from 'react';

export interface TabProps {
  title: string;
  children: ReactNode;
}

export default function Tab(props: TabProps) {
  return <>{props.children}</>;
}
