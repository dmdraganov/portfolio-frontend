import { useData } from '@/shared/hooks/useData';
import { Work } from '@/shared/types';

export const usePractices = () => {
  const {
    data: practices,
    loading,
    error,
  } = useData<Work[]>('/data/practices.json');
  return { practices: practices || [], loading, error };
};
