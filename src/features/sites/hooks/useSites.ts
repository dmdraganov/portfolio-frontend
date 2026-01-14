import { getSites } from '../services/api';
import { useQuery } from '../../../shared/hooks/useQuery';

export const useSites = () => {
  const { data: sites, loading, error } = useQuery(getSites);
  return { sites: sites || [], loading, error };
};
