import { useData } from '@/shared/hooks/useData';
import { PracticalPage, WorksData } from '@/shared/types';
import { useCallback } from 'react';

export const usePracticalPages = () => {
  const transform = useCallback((data: WorksData) => data.practicalPages, []);
  const {
    data: practicalPages,
    loading,
    error,
  } = useData<PracticalPage[], WorksData>('/data/works.json', transform);
  return { practicalPages: practicalPages || [], loading, error };
};
