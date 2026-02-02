import { useData } from '@/shared/hooks/useData';
import { useConfig } from '@/shared/hooks/useConfig';
import { Draft, WorkCollection } from '@/shared/types';
import { getWorkUrl } from '@/shared/utils/url';
import { useMemo } from 'react';

type JsonDraft = Omit<Draft, 'url'> & { path: string };

export const useDrafts = () => {
  const { config, loading: configLoading, error: configError } = useConfig();
  const {
    data: worksCollection,
    loading: worksLoading,
    error: worksError,
  } = useData<WorkCollection<JsonDraft>>('/data/drafts.json');

  const drafts = useMemo((): Draft[] => {
    if (!worksCollection || !config) {
      return [];
    }
    return worksCollection.items.map((work) => ({
      ...work,
      url: getWorkUrl(config.worksRoot, worksCollection.basePath, work.path),
    }));
  }, [worksCollection, config]);

  return {
    drafts,
    loading: configLoading || worksLoading,
    error: configError || worksError,
  };
};
