import { useState, useEffect } from 'react';
import { Essay } from '@/shared/types';

export const useEssays = () => {
  const [essays, setEssays] = useState<Essay[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchEssays = async () => {
      try {
        const response = await fetch('/data/essays.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Essay[] = await response.json();
        setEssays(data);
      } catch (e) {
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchEssays();
  }, []);

  return { essays, loading, error };
};
