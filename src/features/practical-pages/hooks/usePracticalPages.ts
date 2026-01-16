import { useState, useEffect } from 'react';
import { PracticalPage, WorksData } from '@/shared/types';

export const usePracticalPages = () => {
  const [practicalPages, setPracticalPages] = useState<PracticalPage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await fetch('/data/works.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: WorksData = await response.json();
        setPracticalPages(data.practicalPages);
      } catch (e) {
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchPages();
  }, []);

  return { practicalPages, loading, error };
};
