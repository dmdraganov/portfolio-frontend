import { getSiteById } from '../services/api';
import { useQuery } from '../../../shared/hooks/useQuery';
import { useMemo } from 'react';

export const useSite = (id: number) => {
  const queryFn = useMemo(() => () => getSiteById(id), [id]);
  const { data: site, loading, error } = useQuery(queryFn, [id]);
  return { site, loading, error };
};
