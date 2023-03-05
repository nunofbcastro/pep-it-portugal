import { useEffect, useState } from 'react';

export default function useDebounce<T>(
  value: T,
  delayInMilliseconds: number = 300
): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delayInMilliseconds);

    return () => {
      clearTimeout(timerId);
    };
  }, [value, delayInMilliseconds]);

  return debouncedValue;
}
