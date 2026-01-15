import worksData from '../../../data/works.json';
import type { Work } from '../types';

export const useWork = (id: number) => {
  const work = (worksData as Work[]).find((w) => w.id === id);
  return { work, loading: false, error: null };
};
