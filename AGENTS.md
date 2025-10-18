# Repository Guidelines

## Project Structure & Module Organization

This Next.js 13 portfolio keeps routed pages in `src/pages` (`_app.tsx`, `index.tsx`, and feature folders such as `projects`), shared UI in `src/components`, layout wrappers in `src/layouts`, and global styles in `src/styles/globals.css`. Static assets, fonts, and imagery sit under `public`, while environment typing lives in `src/env.mjs`. Colocate new modules with their feature, and mirror existing component patterns like `project.tsx` for reusable cards and `dynamic_link.tsx` for external anchors.

## Build, Test, and Development Commands

- `npm run dev` — start the Next.js dev server at http://localhost:3000 with hot reload.
- `npm run build` — produce the optimized production bundle; run before deployment or major refactors.
- `npm run start` — serve the build output locally (reads from `.next`).
- `npm run lint` — execute ESLint with auto-fix; must pass before opening a PR.

## Coding Style & Naming Conventions

TypeScript is the default; components stay in `PascalCase`, utilities and hooks in `camelCase`, and file names mirror the exported type. Prettier (with the Tailwind plugin) governs formatting and class ordering—run it through `npm run lint` instead of manual tweaks. Favor functional React components, Tailwind utility classes, and descriptive prop names. Keep configuration in TypeScript or `.cjs` files under repo root and avoid ad-hoc JSON overrides.

## Testing Guidelines

The repository does not yet ship a dedicated test runner. When adding behavior, provide manual verification steps in the PR and introduce Jest + React Testing Library tests where appropriate. Place specs in `src/__tests__` or alongside components as `*.test.tsx`, focusing on rendering-critical flows, accessibility, and data validation.

## Commit & Pull Request Guidelines

Git history favors short, present-tense subjects (`update current company`). Keep messages ≤72 characters, skip trailing punctuation, and add detail in the body if needed. Pull requests should include a concise summary, screenshots or recordings for UI changes, manual test notes, and links to related issues. Confirm `npm run lint` and a production `npm run build` succeed before requesting review.

## Environment & Configuration

Typed environment validation resides in `src/env.mjs` using Zod. Add new server variables to the `server` schema, expose client values by prefixing them with `NEXT_PUBLIC_`, and document required keys in the PR description. Never commit `.env` files or secrets; use Vercel or local overrides instead.

# Animations Guidelines

## Keep your animations fast

- Default to use `ease-out` for most animations.
- Animations should never be longer than 1s (unless it’s illustrative), most of them should be around 0.2s to 0.3s.

## Easing rules

- Don’t use built-in CSS easings unless it’s `ease` or `linear`.
- Use the following easings for their described use case:

  - **`ease-in`**: (Starts slow, speeds up) Should generally be avoided as it makes the UI feel slow.

    - `ease-in-quad`: `cubic-bezier(.55, .085, .68, .53)`
    - `ease-in-cubic`: `cubic-bezier(.550, .055, .675, .19)`
    - `ease-in-quart`: `cubic-bezier(.895, .03, .685, .22)`
    - `ease-in-quint`: `cubic-bezier(.755, .05, .855, .06)`
    - `ease-in-expo`: `cubic-bezier(.95, .05, .795, .035)`
    - `ease-in-circ`: `cubic-bezier(.6, .04, .98, .335)`

  - **`ease-out`**: (Starts fast, slows down) Best for elements entering the screen or user-initiated interactions.

    - `ease-out-quad`: `cubic-bezier(.25, .46, .45, .94)`
    - `ease-out-cubic`: `cubic-bezier(.215, .61, .355, 1)`
    - `ease-out-quart`: `cubic-bezier(.165, .84, .44, 1)`
    - `ease-out-quint`: `cubic-bezier(.23, 1, .32, 1)`
    - `ease-out-expo`: `cubic-bezier(.19, 1, .22, 1)`
    - `ease-out-circ`: `cubic-bezier(.075, .82, .165, 1)`

  - **`ease-in-out`**: (Smooth acceleration and deceleration) Perfect for elements moving within the screen.
    - `ease-in-out-quad`: `cubic-bezier(.455, .03, .515, .955)`
    - `ease-in-out-cubic`: `cubic-bezier(.645, .045, .355, 1)`
    - `ease-in-out-quart`: `cubic-bezier(.77, 0, .175, 1)`
    - `ease-in-out-quint`: `cubic-bezier(.86, 0, .07, 1)`
    - `ease-in-out-expo`: `cubic-bezier(1, 0, 0, 1)`
    - `ease-in-out-circ`: `cubic-bezier(.785, .135, .15, .86)`

## Hover transitions

- Use the built-in CSS `ease` with a duration of `200ms` for simple hover transitions like `color`, `background-color`, `opacity`.
- Fall back to easing rules for more complex hover transitions.
- Disable hover transitions on touch devices with the `@media (hover: hover) and (pointer: fine)` media query.

## Accessibility

- If `transform` is used in the animation, disable it in the `prefers-reduced-motion` media query.

## Origin-aware animations

- Elements should animate from the trigger. If you open a dropdown or a popover it should animate from the button. Change `transform-origin` according to the trigger position.

## Performance

- Stick to opacity and transforms when possible. Example: Animate using `transform` instead of `top`, `left`, etc. when trying to move an element.
- Do not animate drag gestures using CSS variables.
- Do not animate blur values higher than 20px.
- Use `will-change` to optimize your animation, but use it only for: `transform`, `opacity`, `clipPath`, `filter`.
- When using Motion/Framer Motion use `transform` instead of `x` or `y` if you need animations to be hardware accelerated.

## Spring animations

- Default to spring animations when using Framer Motion.
- Avoid using bouncy spring animations unless you are working with drag gestures.
