<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `frontend/node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

All Next.js source code lives in `frontend/`. Run `npm` commands from inside `frontend/`, not the repo root.
<!-- END:nextjs-agent-rules -->

## Architecture map — read `brain.md` first

Before grepping or reading source to understand **how pages connect, what renders what, the data layer, or the styling/CSS system**, read [`brain.md`](brain.md) at the repo root — it's the maintained map of routes, page→component wiring, the dual styling architecture (inline styles + `globals.css` media queries vs. Tailwind), data exports, and the key gotchas. Only open the actual source for the specific file you're changing. **When you change structure, routing, data shape, or styling conventions, update `brain.md` in the same change.**
