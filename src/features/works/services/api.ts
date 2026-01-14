import worksData from '../../../data/works.json';
import type { Work } from '../types';

export const getWorks = (): Promise<Work[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(worksData as Work[]);
    }, 500);
  });
};

export const getWorkById = (id: number): Promise<Work | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const work = (worksData as Work[]).find((w) => w.id === id);
      resolve(work);
    }, 500);
  });
};
