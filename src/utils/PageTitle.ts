import { useEffect } from 'react';

export function useTitle(title: string) {
  useEffect(() => {
    return () => {
      let newTitle = `${title.length > 0 ? `${title} - ` : ''}`;
      console.log(newTitle);
      document.title = `${newTitle}PorqueEUprogramo`;
    };
  }, []);
}
