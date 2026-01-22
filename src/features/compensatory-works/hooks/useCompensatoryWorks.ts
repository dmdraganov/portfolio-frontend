import { useData } from '@/shared/hooks/useData';
import { CompensatoryWork } from '@/shared/types';

export const useCompensatoryWorks = () => {
  const {
    data: compensatoryWorks,
    loading,
    error,
  } = useData<CompensatoryWork[]>('/data/compensatory-works.json');
  return { compensatoryWorks: compensatoryWorks || [], loading, error };
};
