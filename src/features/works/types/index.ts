export type Work = {
  id: number;
  title: string;
  workNumber: number;
  author: string;
  type: 'practice' | 'lab' | 'educational';
  description: string;
  images: string[];
  codeUrl?: string | null;
  reportUrl?: string | null;
};
