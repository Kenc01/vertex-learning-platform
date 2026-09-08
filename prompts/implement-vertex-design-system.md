# Implement Vertex Design System

## Goal

Replace the stock Next.js starter home page with a responsive implementation of the supplied Vertex design-system reference at `design/design/vertex-designsystem.png`.

## Skills and guidance consulted

- Repository guidance in `AGENTS.md` and `CLAUDE.md`.
- Existing Next.js App Router structure and Tailwind CSS v4 setup.
- The supplied design reference is the visual source of truth.

## Inspected code

- `app/page.tsx`: stock starter screen; safe to replace.
- `app/globals.css`: default Tailwind import and starter theme variables.
- `app/layout.tsx`: Geist font setup and starter metadata.
- `package.json`: Next 16, React 19, Tailwind 4; no icon package installed.

## Decisions and assumptions

- This request targets the design-system specimen page shown in the reference, not the future catalog/course/search surfaces.
- Implement the full visible sheet in one page with reusable local React components and data arrays for repeated swatches, type rows, spacing tokens, buttons, cards, and navigation examples.
- Use CSS/HTML for the specimen icons with accessible labels and lightweight inline SVG only where a familiar icon is necessary; do not add a dependency solely for icons.
- Use Playfair Display and Inter through `next/font/google`, with graceful CSS fallbacks.
- Preserve the existing app structure and avoid introducing Sanity, Clerk, or other product features that are outside this request.
- Keep all styling in `app/globals.css` and page composition/data in `app/page.tsx` unless a small layout metadata change is needed.

## Requirements

- Match the reference’s warm off-white canvas, thin warm borders, 4px spacing language, orange primary palette, charcoal neutral palette, typography hierarchy, radius/shadow examples, and dense specimen-sheet layout.
- Include sections 01 through 14: brand/colors, typography, type scale, spacing system, radius and shadows, icons, buttons, inputs, badges/tags, status/indicators, progress bar, cards, navigation, and principles.
- Make the page responsive: desktop keeps the multi-column sheet; narrow screens stack sections without horizontal overflow or clipped text.
- Use stable dimensions for swatches, controls, cards, and progress samples so content does not shift layout.
- Update metadata from the starter title/description to Vertex Design System.
- Keep visible labels and content aligned with the reference; avoid adding marketing copy or unrelated application functionality.

## Security and accessibility

- No secrets, network calls, or user data.
- Use semantic headings, labels, buttons/inputs where shown, `aria-hidden` for decorative icons, and sufficient contrast for body text.
- Decorative images are not needed; use the existing logo mark treatment as CSS/inline markup.

## Expected files

- `app/page.tsx`
- `app/globals.css`
- `app/layout.tsx`

## Acceptance criteria

- The root page visually reads as the Vertex design-system sheet and contains all 14 reference sections.
- The page compiles without TypeScript errors and has no lint errors.
- `npm run build` succeeds.
- At desktop width the grid and density resemble the reference; at mobile width every section remains readable with no horizontal scroll.
- The starter Next/Vercel content is gone.

## Checks

- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`
- Run the dev server and inspect `/` at desktop and mobile viewport widths.

## Manual test steps

1. Start the app with `npm run dev`.
2. Open the local root URL.
3. Verify the 14 numbered sections, color swatches, type samples, controls, badges, cards, navigation, and principles are present.
4. Resize to a narrow mobile viewport and verify sections stack, text wraps cleanly, and no horizontal scrollbar appears.
5. Compare spacing, palette, typography, and border treatment against `design/design/vertex-designsystem.png`.
