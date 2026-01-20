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
    works/
      components/
      hooks/
      utils/
      types/
    practical-pages/
      components/
      hooks/
      utils/
      types/
    sites/
      components/
      hooks/
      utils/
      types/
    courseworks/
      components/
      hooks/
      utils/
      types/
    essays/
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