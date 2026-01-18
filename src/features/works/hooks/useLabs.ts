import { useData } from '@/shared/hooks/useData';
import { Work } from '@/shared/types';

export const useLabs = () => {
  const { data: labs, loading, error } = useData<Work[]>('/data/labs.json');
  return { labs: labs || [], loading, error };
};
