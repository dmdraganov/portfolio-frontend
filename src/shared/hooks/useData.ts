import { useState, useEffect } from 'react';

export const useData = <T, U = T[]>(
  url: string,
  selector?: (data: U) => T[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData: U = await response.json();
        const selectedData = selector
          ? selector(jsonData)
          : (jsonData as unknown as T[]);
        setData(selectedData);
      } catch (e) {
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, selector]);

  return { data, loading, error };
};
