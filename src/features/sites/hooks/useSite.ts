import sitesData from '../../../data/sites.json';
import type { Site } from '../types';

export const useSite = (id: number) => {
  const site = (sitesData as Site[]).find((s) => s.id === id);
  return { site, loading: false, error: null };
};
