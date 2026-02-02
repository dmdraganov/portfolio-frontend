import { useData } from '@/shared/hooks/useData';
import { useConfig } from '@/shared/hooks/useConfig';
import { Work, WorkCollection } from '@/shared/types';
import { getWorkUrl } from '@/shared/utils/url';
import { useMemo } from 'react';

type JsonWork = Omit<Work, 'reportUrl'> & { path: string };

export const useLabs = () => {
  const { config, loading: configLoading, error: configError } = useConfig();
  const {
    data: worksCollection,
    loading: worksLoading,
    error: worksError,
  } = useData<WorkCollection<JsonWork>>('/data/labs.json');

  const labs = useMemo((): Work[] => {
    if (!worksCollection || !config) {
      return [];
    }
    return worksCollection.items.map((work) => ({
      ...work,
      reportUrl: getWorkUrl(
        config.worksRoot,
        worksCollection.basePath,
        work.path
      ),
    }));
  }, [worksCollection, config]);

  return {
    labs,
    loading: configLoading || worksLoading,
    error: configError || worksError,
  };
};
