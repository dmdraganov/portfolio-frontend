import { useState, useEffect } from 'react';

export const useCode = (url: string) => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCode = async () => {
      try {
        const response = await fetch(url, { cache: 'no-store' });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const text = await response.text();
        setCode(text);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchCode();
  }, [url]);

  return { code, loading, error };
};
