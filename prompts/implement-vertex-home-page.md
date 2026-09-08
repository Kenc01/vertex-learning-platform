# Implement Vertex Home Page

## Goal

Replace the current design-system specimen at `/` with the learner-facing Vertex home page shown in `design/design/vertex-home.png`.

## Skills and guidance consulted

- Repository guidance in `AGENTS.md` and `CLAUDE.md`.
- Existing Next.js App Router structure and Tailwind CSS v4 setup.
- The supplied home-page reference is the visual source of truth.

## Inspected code

- `app/page.tsx`: currently renders the unrelated design-system specimen and can be replaced.
- `app/globals.css`: currently contains specimen-sheet styles and should be replaced with home-page styles.
- `app/layout.tsx`: already loads Inter and Playfair Display; metadata currently describes the design system.
- `design/design/vertex-home.png`: reference image for the target desktop composition.
- `package.json`: Next 16, React 19, Tailwind 4; no icon package is installed.

## Decisions and assumptions

- Implement the supplied first viewport as a functional home route, using local data for the three course cards.
- Preserve the existing font setup and use CSS/semantic markup for the simple Vertex mark and line icons; do not add a dependency solely for icons.
- Use the reference as the visual source of truth: warm off-white page, centered hero, thin warm borders, editorial Playfair headings, restrained sans-serif metadata, orange accent, and the bottom bar-chart decoration.
- Make the header links and course actions real links/buttons with sensible destinations or focus behavior, but do not introduce backend features outside the reference.
- Keep the implementation focused in `app/page.tsx`, `app/globals.css`, and `app/layout.tsx`.

## Requirements

- Build the header with the Vertex mark/wordmark, Courses and My Learning navigation, notification icon, and circular profile image treatment.
- Build the hero with the `INTELLIGENT LEARNING` eyebrow, two-line heading, supporting copy, orange `Explore Courses` button, and large search field with search icon and `⌘ K` affordance.
- Build the `All Courses` section with the `View all courses` action and three cards: Next.js for Production, Docker Essentials, and TypeScript Deep Dive. Each card needs its course icon treatment, description, and metadata row for level, duration, and module count.
- Build the lower announcement row with the outlined star, copy, separator rules, and soft orange bar-chart decoration visible at the bottom of the reference.
- Keep the desktop layout close to the reference dimensions and spacing while making it responsive down to mobile without horizontal overflow or overlapping text.
- Use stable card, button, input, and header dimensions. Add accessible labels for icon-only controls and a real search input.
- Update metadata to `Vertex` and a learning-platform description.

## Security and accessibility

- No secrets, network calls, or user data.
- Use semantic `header`, `main`, `section`, `nav`, `article`, headings, links, buttons, and labels.
- Keep decorative marks aria-hidden and ensure keyboard focus states remain visible.

## Expected files

- `app/page.tsx`
- `app/globals.css`
- `app/layout.tsx`

## Acceptance criteria

- The root page visually reads as the attached Vertex home page rather than the design-system specimen.
- The header, hero, search field, course cards, announcement, and bottom decoration are all present.
- The page is readable and usable at desktop and mobile widths with no horizontal scrollbar.
- The page compiles without TypeScript errors and has no lint errors.
- `npm run build` succeeds.

## Checks

- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`
- Run the dev server and inspect `/` at desktop and mobile viewport widths.

## Manual test steps

1. Start the app with `npm run dev`.
2. Open the local root URL.
3. Compare the header, hero, search field, card row, announcement, colors, typography, and spacing with `design/design/vertex-home.png`.
4. Resize to a narrow mobile viewport and verify the navigation, hero, cards, and decorative footer stack or wrap cleanly without horizontal scrolling.
5. Tab through the page and verify links, buttons, and the search input have visible focus states.
