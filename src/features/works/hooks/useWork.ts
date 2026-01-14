import { getWorkById } from '../services/api';
import { useQuery } from '../../../shared/hooks/useQuery';
import { useMemo } from 'react';

export const useWork = (id: number) => {
  const queryFn = useMemo(() => () => getWorkById(id), [id]);
  const { data: work, loading, error } = useQuery(queryFn, [id]);
  return { work, loading, error };
};
