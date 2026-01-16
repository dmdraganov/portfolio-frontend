import { useMemo } from 'react';
import { useData } from '@/shared/hooks/useData';
import { Work, WorksData } from '@/shared/types';

export const useWorks = () => {
  const {
    data: works,
    loading,
    error,
  } = useData<Work, WorksData>('/data/works.json', (data) => data.works);

  const practices = useMemo(
    () => (works ? works.filter((w) => w.type === 'practice') : []),
    [works]
  );
  const labs = useMemo(
    () => (works ? works.filter((w) => w.type === 'lab') : []),
    [works]
  );

  return { practices, labs, loading, error };
};
