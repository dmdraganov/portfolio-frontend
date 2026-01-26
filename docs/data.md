# Data

## Data Source

## General rules
- Все данные загружаются из JSON-файлов
- JSON-файлы лежат в `public/data`
- Данные загружаются асинхронно через fetch
- API отсутствует

### JSON files
- config.json — глобальные настройки
- practices.json — практические работы
- labs.json — лабораторные работы
- practical-pages.json — практические страницы
- sites.json — сайты
- courseworks.json — курсовые работы
- essays.json — рефераты
- drafts.json — наработки
- compensatory-works.json — отработки

## Data Models

### Work
Используется для практических и лабораторных работ.

```ts
// 7.1 Работы (практические и лабораторные)
export type Work = {
  number: number;
  reportUrl: string;
};
```

### PracticalPage

```ts
// 7.2 Практические страницы
export type PracticalPage = {
  labNumber: number;
  url: string;
};
```

### Site

```ts
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
```

### Coursework

```ts
// 7.4 Курсовые работы
export type Coursework = {
  title: string;
  pdfUrl: string;
};
```

### Essay

```ts
// Рефераты
export type Essay = {
  number: number;
  pdfUrl: string;
};
```

### Draft

```ts
// Наработки
export type Draft = {
  title: string;
  url: string;
};
```

### Config

```ts
export type Config = {
  label: string;
};
```

### CompensatoryWork

```ts
// Отработки
export type CompensatoryWork = {
  number: number;
  text: string;
  codeUrl: string;
};
```
