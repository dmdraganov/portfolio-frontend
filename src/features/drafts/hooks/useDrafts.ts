import { useData } from '@/shared/hooks/useData';
import { Draft } from '@/shared/types';

export const useDrafts = () => {
  const {
    data: drafts,
    loading,
    error,
  } = useData<Draft[]>('/data/drafts.json');
  return { drafts: drafts || [], loading, error };
};
