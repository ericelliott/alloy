# Alloy

[![Alloy Design System](https://img.shields.io/badge/⬡_Alloy_Design_System-black)](https://github.com/paralleldrive/alloy)[![Parallel Drive](https://img.shields.io/badge/🖤_Parallel_Drive-000000?style=flat)](https://paralleldrive.com)

[![Built with aidd](https://img.shields.io/badge/built%20with-aidd-black?style=flat-square)](https://github.com/paralleldrive/aidd)
[![Storybook](https://img.shields.io/badge/storybook-live-ff4785?style=flat-square&logo=storybook)](https://alloy.paralleldrive.com)
[![License: MIT](https://img.shields.io/badge/license-MIT-silver?style=flat-square)](./LICENSE)

> A luxury design system forged for [Forge](https://forgeproject.app).  
> Neomorphic. Dark-first. Precision-crafted.

---

## What is Alloy?

Alloy is the design system powering the Parallel Drive product family. It is built on a neomorphic surface
system: components with physical depth, material presence, and deliberate
weight. Dark mode first. Subtle motion. No noise.

The aesthetic draws from luxury automotive design: BMW's precision geometry,
Mercedes-Benz's material depth, the tactile quality of onyx, titanium, and
tempered glass.

---

## Packages

This is a monorepo. All packages live in [`packages/`](./packages) and are
published under the `@paralleldrive` namespace.

| Package | npm | Description |
|---|---|---|
| [`packages/tokens`](./packages/tokens) | `@paralleldrive/alloy-tokens` | Design tokens: color, typography, spacing, motion |
| [`packages/components`](./packages/components) | `@paralleldrive/alloy-components` | Core component library |
| [`packages/storybook`](./packages/storybook) | — | Storybook host and documentation |

---

## Design Principles

**Surface over flatness** — Every element exists on a physical plane.
Depth is expressed through shadow, not color contrast alone.

**Dark is the default** — Light mode is an accommodation, not the baseline.

**Motion has weight** — Transitions feel physical. Nothing snaps or jumps.
Everything has inertia.

**Restraint is luxury** — Fewer colors. Less decoration. More precision.

---

## Token System

Alloy's token layer defines the material system all components are built from.

```typescript
import { color, motion, spacing, typography } from '@paralleldrive/alloy-tokens'
```

Tokens are framework-agnostic TypeScript. They export to CSS custom properties,
JS objects, and (coming) Style Dictionary transforms.

---

## Quick Start

```bash
bun add @paralleldrive/alloy-tokens @paralleldrive/alloy-components
```

```typescript
import { Surface } from '@paralleldrive/alloy-components'
import '@paralleldrive/alloy-tokens/css'   // injects CSS custom properties

export const Card = () => (
  <Surface depth="raised">
    <p>Content</p>
  </Surface>
)
```

---

## Development

Parallax agents scaffold components, maintain token consistency, run visual
regression tests, and invoke Cursor cloud agents via the GitHub bridge.

### Requirements

- [Bun](https://bun.sh) 1.2+

### Run locally

```bash
bun install
bun run --filter storybook dev    # Storybook on :6006
```

### Lint and format

Alloy uses [Biome](https://biomejs.dev) for linting and formatting — the same
configuration as the aidd framework.

```bash
bun run lint        # lint + autofix
bun run format      # format only
bun run typecheck   # tsc --noEmit
```

### Test

```bash
bun run test        # vitest run + lint + typecheck
bun run test:unit   # unit tests only
```

### Invoke an agent task from Parallax

```bash
./bin/invoke-agent.sh "Add a Button component with size and variant props"
```

This opens a GitHub issue tagged `agent-task`. A Cursor cloud agent picks it
up, implements the change, and opens a PR.

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). Alloy uses the
[aidd framework](https://github.com/paralleldrive/aidd) for AI-assisted
development workflows.

---

## License

MIT © [ParallelDrive](https://github.com/paralleldrive)