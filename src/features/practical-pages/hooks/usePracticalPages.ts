import { useData } from '@/shared/hooks/useData';
import { PracticalPage, WorksData } from '@/shared/types';

export const usePracticalPages = () => {
  const {
    data: practicalPages,
    loading,
    error,
  } = useData<PracticalPage, WorksData>(
    '/data/works.json',
    (data) => data.practicalPages
  );
  return { practicalPages, loading, error };
};
