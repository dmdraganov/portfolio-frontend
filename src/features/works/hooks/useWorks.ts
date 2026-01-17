import { useCallback, useMemo } from 'react';
import { useData } from '@/shared/hooks/useData';
import { Work, WorksData } from '@/shared/types';

export const useWorks = () => {
  const transform = useCallback((data: WorksData) => data.works, []);

  const {
    data: works = [],
    loading,
    error,
  } = useData<Work[], WorksData>('/data/works.json', transform);

  const { practices, labs } = useMemo(() => {
    const practices: Work[] = [];
    const labs: Work[] = [];

    for (const work of works) {
      if (work.type === 'practice') practices.push(work);
      else if (work.type === 'lab') labs.push(work);
    }

    return { practices, labs };
  }, [works]);

  return { practices, labs, loading, error };
};
