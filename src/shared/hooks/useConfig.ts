import { useData } from '@/shared/hooks/useData';
import { Config } from '@/shared/types';

export const useConfig = () => {
  const { data: config, loading, error } = useData<Config>('/data/config.json');
  return { config, loading, error };
};
