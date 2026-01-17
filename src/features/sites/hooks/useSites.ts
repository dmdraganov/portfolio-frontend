import { useData } from '@/shared/hooks/useData';
import { Site } from '@/shared/types';
import { useCallback } from 'react';

export const useSites = () => {
  const { data: sites, loading, error } = useData<Site[]>('/data/sites.json');
  return { sites: sites || [], loading, error };
};

export const useSite = (name: string) => {
  const transform = useCallback(
    (sites: Site[]) => sites.find((s) => s.name === name),
    [name]
  );

  const {
    data: site,
    loading,
    error,
  } = useData<Site | undefined, Site[]>('/data/sites.json', transform);
  return { site, loading, error };
};
