import worksData from '../../../data/works.json';
import type { Work } from '../types';

export const useWorks = () => {
  return { works: worksData as Work[], loading: false, error: null };
};
