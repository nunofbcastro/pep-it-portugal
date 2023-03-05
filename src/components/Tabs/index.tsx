import './style.scss';

import React, { useState } from 'react';

import { TabProps } from './Tab';
import GetContent from './GetContent';

export interface TabsProps {
  children: React.ReactElement<TabProps>[];
}

export default function Tabs(props: TabsProps) {
  const [activeTab, setActiveTab] = useState<string>(
    props.children[0].props.title
  );

  return (
    <div className="overflow-auto">
      <div className="flex flex-row -mb-px border-b border-gray-200 dark:border-gray-700 overflow-x-auto overflow-y-hidden">
        {props.children.map(({ props: { title } }, index) => (
          <button
            key={index}
            className={`tab base active min-w-fit ${
              activeTab === title ? 'tab_selected' : 'tab_not_selected'
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
        <GetContent
          children={props.children}
          title={activeTab}
          key={activeTab}
        />
      </div>
    </div>
  );
}
