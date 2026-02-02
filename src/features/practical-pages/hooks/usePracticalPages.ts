import { useData } from '@/shared/hooks/useData';
import { useConfig } from '@/shared/hooks/useConfig';
import { PracticalPage, WorkCollection } from '@/shared/types';
import { getWorkUrl } from '@/shared/utils/url';
import { useMemo } from 'react';

type JsonPracticalPage = Omit<PracticalPage, 'url'> & { path: string };

export const usePracticalPages = () => {
  const { config, loading: configLoading, error: configError } = useConfig();
  const {
    data: worksCollection,
    loading: worksLoading,
    error: worksError,
  } = useData<WorkCollection<JsonPracticalPage>>('/data/practical-pages.json');

  const practicalPages = useMemo((): PracticalPage[] => {
    if (!worksCollection || !config) {
      return [];
    }
    return worksCollection.items.map((work) => ({
      ...work,
      url: getWorkUrl(config.worksRoot, worksCollection.basePath, work.path),
    }));
  }, [worksCollection, config]);

  return {
    practicalPages,
    loading: configLoading || worksLoading,
    error: configError || worksError,
  };
};
