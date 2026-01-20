# Architecture

## General approach
- SPA
- Feature-based архитектура. Каждый раздел инкапсулирует UI, логику и асинхронную загрузку данных.
- Отсутствие бекенда и API

## Data flow
JSON → fetch → feature hook → UI component

## Project structure

public/
  data/
    config.json
    practices.json
    labs.json
    practical-pages.json
    sites.json
    courseworks.json
    essays.json

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
  shared/
    ui/
    hooks/
    types/
