// src/shared/types/index.ts

// 7.1 Работы (практические и лабораторные)
export type Work = {
  number: number;
  reportUrl: string;
};

// 7.2 Практические страницы
export type PracticalPage = {
  labNumber: number;
  url: string;
};

// 7.3 Сайты
export type SitePage = {
  name: string;
  url: string;
  references: string[]; // paths to images
};

export type Site = {
  name: string;
  repositoryUrl: string;
  figmaUrl: string;
  referenceColumns: string[];
  pages: SitePage[];
};

// 7.4 Курсовые работы
export type Coursework = {
  title: string;
  pdfUrl: string;
};

// Рефераты
export type Essay = {
  number: number;
  pdfUrl: string;
};

// Наработки
export type Draft = {
  title: string;
  url: string;
};

// Отработки
export type CompensatoryWork = {
  number: number;
  text: string;
  codeUrl: string;
};
