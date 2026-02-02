import { useData } from '@/shared/hooks/useData';
import { useConfig } from '@/shared/hooks/useConfig';
import { Essay, WorkCollection } from '@/shared/types';
import { getWorkUrl } from '@/shared/utils/url';
import { useMemo } from 'react';

type JsonEssay = Omit<Essay, 'pdfUrl'> & { path: string };

export const useEssays = () => {
  const { config, loading: configLoading, error: configError } = useConfig();
  const {
    data: worksCollection,
    loading: worksLoading,
    error: worksError,
  } = useData<WorkCollection<JsonEssay>>('/data/essays.json');

  const essays = useMemo((): Essay[] => {
    if (!worksCollection || !config) {
      return [];
    }
    return worksCollection.items.map((work) => ({
      ...work,
      pdfUrl: getWorkUrl(config.worksRoot, worksCollection.basePath, work.path),
    }));
  }, [worksCollection, config]);

  return {
    essays,
    loading: configLoading || worksLoading,
    error: configError || worksError,
  };
};
