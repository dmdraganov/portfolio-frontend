import { useDataItem } from '@/shared/hooks/useDataItem';
import { useData } from '@/shared/hooks/useData';
import { Site } from '@/shared/types';

export const useSites = () => {
  const { data: sites, loading, error } = useData<Site>('/data/sites.json');
  return { sites, loading, error };
};

export const useSite = (name: string) => {
  const {
    data: site,
    loading,
    error,
  } = useDataItem<Site>('/data/sites.json', (s) => s.name === name);
  return { site, loading, error };
};
