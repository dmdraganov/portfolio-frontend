import sitesData from '../../../data/sites.json';
import type { Site } from '../types';

export const getSites = (): Promise<Site[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(sitesData as Site[]);
    }, 500); // Simulate network delay
  });
};

export const getSiteById = (id: number): Promise<Site | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const site = (sitesData as Site[]).find((s) => s.id === id);
      resolve(site);
    }, 500);
  });
};
