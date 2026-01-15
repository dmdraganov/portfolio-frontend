export type Work = {
  id: number;
  workNumber: number;
  type: 'practice' | 'lab';
  images: string[];
  reportUrl?: string | null;
  pageUrl?: string | null;
};
