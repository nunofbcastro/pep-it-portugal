import { useEffect } from 'react';

export function useTitle(title: string) {
  useEffect(() => {
    let newTitle = `${
      title.length > 0 ? `${title} - PorqueEUprogramo` : 'PorqueEUprogramo'
    }`;
    document.title = `${newTitle}`;
  });
}
