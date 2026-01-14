import { getWorks } from '../services/api';
import { useQuery } from '../../../shared/hooks/useQuery';

export const useWorks = () => {
  const { data: works, loading, error } = useQuery(getWorks);
  return { works: works || [], loading, error };
};
