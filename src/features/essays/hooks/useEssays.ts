import { useData } from '@/shared/hooks/useData';
import { Essay } from '@/shared/types';

export const useEssays = () => {
  const { data: essays, loading, error } = useData<Essay>('/data/essays.json');
  return { essays, loading, error };
};
