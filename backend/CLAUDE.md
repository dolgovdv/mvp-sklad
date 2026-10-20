# Backend Workspace Configuration

## Workspace Context
- Path: `./apps/backend` (npm workspace)
- Stack: TypeScript, Node.js (strictly Backend-only)
- Isolated context: Never read or index `./apps/frontend`.

## Token Saving Rules
- Be extremely concise. No conversational filler, greetings, or explanations.
- Output ONLY specific code changes (diffs). NEVER rewrite entire files or controllers.
- Do not write tests, mocks, or documentation unless explicitly requested.
- If creating new modules, generate files step-by-step; do not output large directory structures at once.

## Development Commands
- Run/Dev: `npm run dev -w apps/backend`
- Build: `npm run build -w apps/backend`
- Lint/Check: `npm run lint -w apps/backend`
- Database Migration (if applicable): Run specific scripts within workspace context.

## Code Style & Architecture
- Layered architecture: Keep clear separation (Controllers/Routes, Services, Models/Data Access).
- Strict type safety: Avoid `any`. Use exact interfaces/DTOs for payloads and data validation.
- Error handling: Use structured, explicit error responses. Do not print raw stack traces.
