// src/shared/hooks/useConfig.ts
import { useData } from './useData';
import { Config } from '@/shared/types';

export const useConfig = () => {
  const { data: config, ...rest } = useData<Config>('/data/config.json');
  return { config, ...rest };
};
