export type Site = {
  id: number;
  title: string;
  pages: {
    name: string;
    url: string;
  }[];
  repositoryUrl: string;
  figmaUrl: string;
  references: string[];
};
