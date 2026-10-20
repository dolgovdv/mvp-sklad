
# Monorepo Map
- Frontend: `./frontend` (Next.js/Vite/FSD)
- Backend: `./backend` (Node.js/NestJS/Prisma)

## Архитектура и Стек
- Frontend: Next.js (App Router), React, Tailwind CSS, shadcn/ui, TanStack Form.
- Frontend Arch: Feature-Sliced Design (FSD). Слои: app, pages, widgets, features, entities, shared.
- Backend: NestJS, PostgreSQL, Prisma ORM.

## Правила кодогенерации
1. **FSD кунг-фу:** Никаких кросс-импортов между слайсами на одном слое. Импорты только через public API (`index.ts`).
2. **UI & Forms:** Для форм всегда используй TanStack Form в связке с компонентами shadcn/ui.
3. **Стили:** Только Tailwind CSS. Используй утилиту `cn()` для динамических классов.
4. **Backend/NestJS:** Строгая инкапсуляция в модули. Декораторы для валидации (class-validator). Инъекция зависимостей через constructor.
5. **Prisma:** Используй camelCase для полей моделей, snake_case для имен таблиц в БД (через @@map).

## Алгоритм работы (Workflow)
Перед написанием любого кода или созданием файлов ТЫ ОБЯЗАН выполнить два шага:

1. **Шаг 1 (Проектирование и План):** Проанализируй задачу и предоставь пошаговый архитектурный план реализации. План должен учитывать FSD-архитектуру, изменения в БД (Prisma), эндпоинты в NestJS и UI-компоненты (Next.js/shadcn).
2. **Шаг 2 (Остановка):** В конце плана явно напиши: *«Одобряете ли вы этот план? Если да, я приступлю к реализации шага 1».* СТОП. Никакого кода до явного согласия пользователя писать нельзя.

Реализуй код только ПОСЛЕ того, как пользователь напишет «Одобряю», «Давай» или даст уточнения. Реализовывай план пошагово, а не весь код за один раз.
# Token Constraints & Style
- Be extremely concise. Avoid explanations unless strictly requested.
- Never rewrite entire files. Output only specific code changes (diffs).
- Do not greet or use conversational filler.


## Commands
- Build active app only: `npm run build -w <app_name>` (never run root build)
- Test active app only: `npm run test -w <app_name>`

## Strict Token Constraints
- Never run global `npm install` without confirmation.
- Work within ONE workspace at a time (e.g., `./frontend` or `./backend`).
- Do not add comments, JSDoc, or write tests unless explicitly requested.
- Provide only strict diffs or filenames with specific changes. No full-file rewrites.