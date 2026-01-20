import { useData } from '@/shared/hooks/useData';

type Config = {
  label: string;
};

export const useConfig = () => {
  const { data: config, loading, error } = useData<Config>('/data/config.json');
  return { config, loading, error };
};
