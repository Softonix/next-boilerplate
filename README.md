- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [FSD filesystem package](https://www.npmjs.com/package/@feature-sliced/filesystem)

# Project Guidelines

This document outlines the project structure and conventions for our **Next.js** application using the **Feature-Sliced Design** architecture.

Our goal is to maintain consistency and best practices across the project to ensure scalability and maintainability.

## Prerequisites

- Familiarity with the command line.
- Install Node.js version 20.0 or higher.

## Project Structure
```bash
dts/                                             # Definition files (TypeScript types)
│
public/                                          # Static assets
│
src
├── app/                                         # Next.js App Router
│   ├── [app router files]                       # Next.js App Router specific files
│
├── core/                                        # Core application logic layer (instead of FSD 'app')
│   ├── providers                                # ReactQueryProvider, AntConfigProvider etc.
│   ├── styles                                   # global styles, tailwind
│   ├── scripts                                  # additional app scripts
│   ├── layouts                                  # app core layouts
│
├── views/                                       # Page components layer (instead of FSD 'pages')
│   ├── home/ (ui, config, lib, model, api)      # Example view slice (home)
│   └── users/ (ui, config, lib, model, api)     # Example view slice (users)
│
├── widgets/                                     # Layer of large self-contained chunks of functionality
│   ├── sidebar/ (ui, config, lib, model, api)   # Example widget slice (sidebar)
│
├── features/                                    # Feature-level business logic layer
│   ├── auth/ (ui, config, lib, model, api)      # Example feature slice (authentication)
│
├── entities/                                    # Domain entities layer
│   ├── user/ (ui, config, lib, model, api)      # Example entity slice (user-related logic)
│
├── shared/                                      # Layer of reusable UI components and utilities
│   ├── api/                                     # request functions, data types, mappers, etc.
│   ├── config/                                  # configuration files and feature flags.
│   ├── lib/                                     # library code that other modules on this slice need
│   ├── model/                                   # schemas, interfaces, stores, and business logic
│   └── ui/                                      # shared components
└──
```

## Rules
- **Layers**: Layers are standardized across all FSD projects. You don't have to use all of the layers, but their names are important.
- **Slices**: Next up are slices, which partition the code by business domain. You're free to choose any names for them, and create as many as you wish. Slices make your codebase easier to navigate by keeping logically related modules close together.
Slices cannot use other slices on the same layer, and that helps with high cohesion and low coupling.
- **Segments**: Segment names are not constrained by the standard, but there are several conventional names for the most common purposes (ui, api, model, lib, config). Usually these segments are enough for most layers, you would only create your own segments in Shared or App, but this is not a rule.
- **Public API**: each slice should have `index.ts` file to re-export everything in that slice.
- **Imports**: Lower layers cannot import from higher layers. (e.g *entity* layer can't import from features, widgets, pages etc.). 

## Naming Conventions

- **Folder Naming**: Use kebab-case for folder names (e.g., `user-auth`).
- **Component Naming**: All files are written in kebab-case. (e.g., `user-profile.tsx`).
- **Other**: Hooks and services have suffixes appended .hook and .service. (e.g., `user.hook.ts`).
- **No Default Exports**: Avoid default exports. Use named exports for better clarity and tooling support.

## Best Practices

- **Modularization**: Follow the Feature-Sliced Design pattern to modularize your application into clear, understandable sections (entities, features, etc.).
- **Component Structure**: Components should be small, reusable, and follow the **Single Responsibility Principle**.
- **Style**: Use **Tailwind CSS** for styling components
- **Types**: Use TypeScript throughout the project to ensure type safety and scalability.
- **Linting**: Adhere to ESLint and Prettier configurations to maintain consistent code formatting and catch potential issues early.
- **Imports**: Please use relative imports within a slice and absolute between the layers.

