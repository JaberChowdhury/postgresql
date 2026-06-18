# Expense Tracker - Development Rules & Guidelines

To ensure consistent, high-quality, and premium development across the codebase, please adhere to the following rules:

## 1. Ecosystem & Component Library
- **Strict Mantine Usage**: All UI components must be built using the [Mantine](https://mantine.dev/) ecosystem. Do not introduce custom UI libraries (like Tailwind, MUI, or Radix) unless Mantine does not provide an equivalent feature.
- **Charts & Data Visualization**: Use `@mantine/charts` for all data visualizations. Do not write raw `recharts` implementations unless extending `@mantine/charts` capabilities is absolutely necessary.
- **Icons**: Use `@tabler/icons-react` for all iconography to maintain visual consistency with Mantine's defaults.
- **Animations**: Use `framer-motion` for entry animations, page transitions, and complex interactive feedback.

## 2. Formatting & Linting
- **Biome as Standard**: We use [Biome](https://biomejs.dev/) (`@biomejs/biome`) as our primary linter and formatter.
  - Run `bun run format` to automatically format your code before committing.
  - Indentation is strictly set to **2 spaces**.
  - JavaScript strings use **single quotes** (`'`), while JSX attributes use **double quotes** (`"`).
  - Semi-colons and trailing commas are enforced everywhere.

## 3. Theming & Styling
- **CSS Variables for Theming**: To prevent React Hydration Mismatch errors, never use ternary operators for theme evaluation in inline styles (e.g., `style={{ background: dark ? '#000' : '#fff' }}`). Instead, define a CSS variable in `globals.css` using the `:root[data-mantine-color-scheme='dark']` selector and reference it natively via `var(--my-variable)`.
- **Global Settings Context**: Any new, highly-customizable UI property (like spacing, button radii, base font sizes) must be hooked up to the `ThemeSettingsProvider` so it can be controlled dynamically via the application's Setting panel.

## 4. Routing & Architecture
- **Next.js App Router**: This application utilizes the Next.js `app/` directory architecture.
- **Route Groups**: The main application shell (Sidebar, Top Navigation) is isolated within the `(dashboard)` Route Group to avoid bleeding into isolated layouts like `/login` and `/signup`.
- **Layout via `AppShell`**: Use Mantine's `<AppShell>` component for all dashboard layout concerns (header, navbar, main content). Do not build custom flexbox shell layouts.
- **Navigation Progress**: Use `@mantine/nprogress` (`nprogress.start()` / `nprogress.complete()`) for route transition feedback. Do not build custom preloader components.

## 5. Design Aesthetics
- The aesthetic must always feel premium. Favor frosted glass effects, subtle borders, high contrast ratios, and minimalist negative space. If a design looks simple or basic, iterate on it until it feels luxurious.
