import { useState, useEffect } from 'react';

export const useDataItem = <T>(
  url: string,
  predicate: (item: T) => boolean
) => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData: T[] = await response.json();
        const foundItem = jsonData.find(predicate);
        setData(foundItem);
      } catch (e) {
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, predicate]);

  return { data, loading, error };
};
