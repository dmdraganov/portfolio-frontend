import { useData } from '@/shared/hooks/useData';
import { Coursework } from '@/shared/types';

export const useCourseworks = () => {
  const {
    data: courseworks,
    loading,
    error,
  } = useData<Coursework[]>('/data/courseworks.json');
  return { courseworks: courseworks || [], loading, error };
};
