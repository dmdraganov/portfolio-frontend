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

## Data Models

### Work
Используется для практических и лабораторных работ.

{
  "number": number,
  "reportUrl": string
}

### PracticalPage

{
  "labNumber": number,
  "url": string
}

### Site

{
  "name": string, // Добавлено для идентификации
  "repositoryUrl": string,
  "figmaUrl": string,
  "referenceColumns": string[], // названия колонок
  "pages": [
    {
      "name": string,
      "url": string,
      "references": string[] // Пути к изображениям
    }
  ]
}

### Coursework

{
  "title": string, // Добавлено для отображения
  "pdfUrl": string
}

### Essay

{
  "number": number,
  "pdfUrl": string
}

### Config

{
  "label": string
}
