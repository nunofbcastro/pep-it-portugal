import { TabProps } from '../Tab';

export interface GetContentProps {
  children: React.ReactNode[];
  title: string;
}

export default function GetContent({
  children,
  title,
}: GetContentProps): JSX.Element {
  const content: React.ReactElement<TabProps> = children.find(
    (child) => (child as React.ReactElement<TabProps>).props.title === title
  ) as React.ReactElement<TabProps>;
  return content && (content.props.children as JSX.Element);
}
