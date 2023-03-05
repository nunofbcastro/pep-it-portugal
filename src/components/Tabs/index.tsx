import React, { useState } from 'react';

import { TabProps } from './Tab';
import GetContent from './GetContent';

export interface TabsProps {
  children: React.ReactElement<TabProps>[];
  colorSelectedTab?: string;
}

export default function Tabs({
  children,
  colorSelectedTab = 'primary',
}: TabsProps) {
  const [activeTab, setActiveTab] = useState<string>(children[0].props.title);

  return (
    <div className="overflow-auto">
      <div className="flex flex-row -mb-px border-b border-gray-200 dark:border-gray-700 overflow-x-auto overflow-y-hidden">
        {children.map(({ props: { title } }, index) => (
          <button
            key={index}
            className={`flex items-center justify-center p-4 text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 base active min-w-fit ${
              activeTab === title
                ? `rounded-t-lg border-b-2 !border-${colorSelectedTab} text-${colorSelectedTab}`
                : 'border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
            onClick={() => {
              setActiveTab(title);
            }}
          >
            {title}
          </button>
        ))}
      </div>
      <div className="pt-5 flex justify-center items-center">
        <GetContent children={children} title={activeTab} key={activeTab} />
      </div>
    </div>
  );
}
