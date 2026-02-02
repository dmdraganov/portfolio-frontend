import { useData } from '@/shared/hooks/useData';
import { useConfig } from '@/shared/hooks/useConfig';
import { CompensatoryWork, WorkCollection } from '@/shared/types';
import { getWorkUrl } from '@/shared/utils/url';
import { useMemo } from 'react';

type JsonCompensatoryWork = Omit<CompensatoryWork, 'codeUrl'> & {
  path: string;
};

export const useCompensatoryWorks = () => {
  const { config, loading: configLoading, error: configError } = useConfig();
  const {
    data: worksCollection,
    loading: worksLoading,
    error: worksError,
  } = useData<WorkCollection<JsonCompensatoryWork>>(
    '/data/compensatory-works.json'
  );

  const compensatoryWorks = useMemo((): CompensatoryWork[] => {
    if (!worksCollection || !config) {
      return [];
    }
    return worksCollection.items.map((work) => ({
      ...work,
      codeUrl: getWorkUrl(
        config.worksRoot,
        worksCollection.basePath,
        work.path
      ),
    }));
  }, [worksCollection, config]);

  return {
    compensatoryWorks,
    loading: configLoading || worksLoading,
    error: configError || worksError,
  };
};
