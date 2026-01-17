import { useData } from '@/shared/hooks/useData';
import { PracticalPage } from '@/shared/types';

export const usePracticalPages = () => {
  const {
    data: practicalPages,
    loading,
    error,
  } = useData<PracticalPage[]>('/data/practical-pages.json');

  return { practicalPages: practicalPages || [], loading, error };
};
