# Project Overview

This is a **React (v19) portfolio frontend application** bootstrapped with Vite. It is designed to showcase educational and practical work with a modular, scalable architecture.

# Project Documentation

A detailed project specification is available in the documentation file: `@docs/project-spec.md`.

This document contains critical information regarding:

- **Project Goals:** To create a centralized showcase for projects with easy navigation.
- **Architecture:** A modular, feature-based approach designed to scale from local JSON data to a full REST API.
- **Content Types:** Detailed descriptions of "Works" and "Sites" entities.
- **Data Schemas:** Conceptual data models for all main entities.
- **UI/UX Guidelines:** Dark theme, modern design, and semantic HTML.

**It is highly recommended to read this specification before making changes to the codebase.**

## Key Technologies

- **UI Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing:** [React Router v7](https://reactrouter.com/)
- **Linting:** [ESLint](https://eslint.org/)
- **Formatting:** [Prettier](https://prettier.io/)

## Project Structure

The project aims to follow a **feature-based architecture** as outlined in the project specification. The ideal structure is:

```
src/
 ├─ app/         # Core app setup (router, providers, layouts)
 ├─ features/    # Individual features (e.g., works, sites)
 ├─ entities/    # Business entities (e.g., author)
 ├─ shared/      # Reusable code (UI components, libs, config)
 ├─ data/        # Local data sources (e.g., works.json)
 └─ main.tsx     # Application entry point
```

The current structure is simpler and should be refactored towards this target architecture as the project grows.

# Building and Running

This project uses `npm` as the package manager.

## Available Scripts

- **`npm run dev`**: Starts the Vite development server with Hot Module Replacement (HMR) enabled. This is the primary command for development.
- **`npm run build`**: Compiles the TypeScript code and bundles the application for production into the `dist/` directory.
- **`npm run preview`**: Starts a local server to preview the production build from the `dist/` directory.
- **`npm run lint`**: Lints the entire project using ESLint to check for code quality and style issues.
- **`npm run format`**: Formats all project files using Prettier to ensure consistent code style.

# Development Conventions

## Code Style

- The project follows the rules defined in `.eslintrc` and `.prettierrc`.
- **Formatting**: Code is automatically formatted by Prettier. Key rules include single quotes, 2-space indentation, and trailing commas.
- **Linting**: ESLint is configured with recommended rules for JavaScript, TypeScript, and React.
