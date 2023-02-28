import { useEffect } from 'react';

export function useTitle(title: string) {
  useEffect(() => {
    document.title = `${title.length > 0 ? `${title} - ` : ''}PorqueEUprogramo`;
  });
}
