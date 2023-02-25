import './style.scss';

import React, { useState } from 'react';

import { TabProps } from './Tab';

function getTitle(data: React.ReactNode) {
  try {
    return (data as React.ReactElement<TabProps>).props.title;
  } catch (error) {
    return '';
  }
}

function getContent(data: React.ReactNode[], title: string) {
  try {
    for (let content of data) {
      content = content as React.ReactElement<TabProps>;
      if (content.props.title == title) {
        return content.props.children;
      }
    }
  } catch (error) {
    return;
  }
}

export interface TabsProps {
  children: React.ReactElement<TabProps>[];
}

export default function Tabs(props: TabsProps) {
  const [activeTab, setActiveTab] = useState<string>(
    getTitle(props.children[0])
  );

  return (
    <div className="overflow-auto">
      <div className="flex flex-row -mb-px border-b border-gray-200 dark:border-gray-700 overflow-x-auto overflow-y-hidden">
        {props.children.map((item, index) => (
          <button
            key={index}
            className={`tab base active ${
              activeTab != getTitle(item) ? 'tab_not_selected' : 'tab_selected'
            }`}
            onClick={() => {
              setActiveTab(getTitle(item));
            }}
          >
            {getTitle(item)}
          </button>
        ))}
      </div>
      <div className="pt-5 flex justify-center items-center">
        {getContent(props.children, activeTab)}
      </div>
    </div>
  );
}
