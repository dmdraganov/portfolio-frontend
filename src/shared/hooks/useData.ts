import { useState, useEffect } from 'react';

export const useData = <TResult, TJson = unknown>(
  url: string,
  transform?: (json: TJson) => TResult
) => {
  const [data, setData] = useState<TResult | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData: TJson = await response.json();

        const result = transform
          ? transform(jsonData)
          : (jsonData as unknown as TResult);
        setData(result);
      } catch (e) {
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, transform]);

  return { data, loading, error };
};
