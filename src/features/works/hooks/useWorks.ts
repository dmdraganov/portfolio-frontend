import { useData } from '@/shared/hooks/useData';
import { Work } from '@/shared/types';

export const useWorks = () => {
  const {
    data: practices,
    loading: practicesLoading,
    error: practicesError,
  } = useData<Work[]>('/data/practices.json');
  const {
    data: labs,
    loading: labsLoading,
    error: labsError,
  } = useData<Work[]>('/data/labs.json');

  const loading = practicesLoading || labsLoading;
  const error = practicesError || labsError;

  return { practices: practices || [], labs: labs || [], loading, error };
};
