# Architecture

## General approach
- SPA
- Feature-based архитектура. Каждый раздел инкапсулирует UI, логику и асинхронную загрузку данных.
- Отсутствие бекенда и API

## Data flow
JSON → fetch → feature hook → UI component

## Current project structure

public/
  data/
    config.json
    practices.json
    labs.json
    practical-pages.json
    sites.json
    courseworks.json
    essays.json
    drafts.json
    compensatory-works.json

src/
  app/
    router/
    layouts/
  features/
    works/
    practical-pages/
    sites/
    courseworks/
    essays/
    drafts/
    compensatory-works/
  shared/
    ui/
    hooks/
    types/

## Architecture project structure

public/
  data/

src/
  app/
    router/
    layouts/
    context/
    services/
  features/
    feature/
      components/
      hooks/
      utils/
      types/
    feature/
      components/
      hooks/
      utils/
      types/
  shared/
    ui/
    hooks/
    types/
    utils/
  assets/
    fonts/
    images/
    icons/
  constants/

# Constraints

- Без серверного рендеринга
- Без SEO-оптимизации
- Без мультиязычности
- Без авторизации
- Без API

## React rules

- Не используй React.FC для типизации компонентов

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

# Routes

## Main routes
- /practices — Практические работы
- /labs — Лабораторные работы
- /practical-pages — Практические страницы
- /sites — Сайты
- /courseworks — Курсовые работы
- /essays — Рефераты
- /drafts — Наработки
- /compensatory-works — Отработки

## Navigation rules
- Используется React Router DOM
- Детальные страницы для отдельных работ отсутствуют
- Материалы открываются:
  - либо как файл (PDF / Word)
  - либо как обычная страница сайта

# UI Guide

## Theme
- Dark theme
- Modern minimal style

## UI kit

### Typography

- H1: 48px Bold
- H2: 28px Semi Bold
- H3: 20px Semi Bold
- Main: 16px Regular

### Colors

Цвета указаны в переменных тем @theme (tailwind CSS v4) в src/index.

### Spacing

Все отступы обязаны быть кратны 4. Например: 4, 8, 12, 16, 20, 24, 28, 32, 36 и тд

### Icons 

Иконки располагаются в src/assets/icons/

## Styling
- Tailwind CSS
- Переиспользуемые компоненты

## Semantics
Обязательное использование:
- header, nav, main, section, article, footer
- ul / ol
- figure / figcaption
- корректная иерархия h1–h6

## Responsive
- Адаптивность закладывается на уровне базовых компонентов
