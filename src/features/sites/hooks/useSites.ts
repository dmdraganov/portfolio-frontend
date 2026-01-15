import sitesData from '../../../data/sites.json';
import type { Site } from '../types';

export const useSites = () => {
  return { sites: sitesData as Site[], loading: false, error: null };
};
