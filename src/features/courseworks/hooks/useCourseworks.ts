import { useData } from '@/shared/hooks/useData';
import { useConfig } from '@/shared/hooks/useConfig';
import { Coursework, WorkCollection } from '@/shared/types';
import { getWorkUrl } from '@/shared/utils/url';
import { useMemo } from 'react';

type JsonCoursework = Omit<Coursework, 'pdfUrl'> & { path: string };

export const useCourseworks = () => {
  const { config, loading: configLoading, error: configError } = useConfig();
  const {
    data: worksCollection,
    loading: worksLoading,
    error: worksError,
  } = useData<WorkCollection<JsonCoursework>>('/data/courseworks.json');

  const courseworks = useMemo((): Coursework[] => {
    if (!worksCollection || !config) {
      return [];
    }
    return worksCollection.items.map((work) => ({
      ...work,
      pdfUrl: getWorkUrl(config.worksRoot, worksCollection.basePath, work.path),
    }));
  }, [worksCollection, config]);

  return {
    courseworks,
    loading: configLoading || worksLoading,
    error: configError || worksError,
  };
};
