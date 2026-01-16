import { useState, useEffect } from 'react';
import { Coursework } from '@/shared/types';

export const useCourseworks = () => {
  const [courseworks, setCourseworks] = useState<Coursework[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCourseworks = async () => {
      try {
        const response = await fetch('/data/courseworks.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Coursework[] = await response.json();
        setCourseworks(data);
      } catch (e) {
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseworks();
  }, []);

  return { courseworks, loading, error };
};
