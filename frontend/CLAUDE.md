# Frontend Workspace (FSD + shadcn + Tailwind)

## Workspace Context
- Path: `./apps/frontend` (npm workspace)
- Stack: TypeScript, React, Tailwind CSS, shadcn/ui.
- Architecture: Feature-Sliced Design (FSD). Strictly enforce layer hierarchy (app, pages, widgets, features, entities, shared).
- Isolated context: Never read `./apps/backend` unless explicitly asked.

## Token Saving Rules
- Be concise. No conversational filler, greetings, or explanations.
- Output ONLY specific code changes (diffs). NEVER rewrite entire files or components.
- Do not create tests, stories, or TypeScript definitions unless explicitly requested.
- Use shadcn CLI or tailwind classes directly. Do not invent custom CSS files.

## FSD Boundaries (Critical for Context Isolation)
- Never create cross-imports within the same FSD slice level (e.g., feature importing another feature directly).
- Use strict public API (`index.ts`) exports for every slice. Claude must only import from the slice's public API.

## Development Commands
- Dev: `npm run dev -w apps/frontend`
- Build: `npm run build -w apps/frontend`
- Add shadcn component: `npx shadcn@latest add <component-name>` (execute inside frontend dir)

## Code Style
- Functional components, strict TypeScript (no `any`).
- Use Tailwind arbitrary values only if design requires; prefer standard tailwind scale.
