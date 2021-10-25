import { useState } from 'react';

export const content = [
  {
    tab: 'Section 1',
    content: 'This is contect of the Section 1',
  },
  {
    tab: 'Section 2',
    content: 'This is contect of the Section 2',
  },
];

export const useTabs = (initialTab, allTabs) => {
  const [curIndex, setCurIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) return;

  return {
    curItem: allTabs[curIndex],
    changeItem: setCurIndex,
  };
};
