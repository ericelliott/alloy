# Contributing to Alloy

Thank you for your interest in contributing to the Alloy Design System.

Alloy uses the [aidd framework](https://github.com/paralleldrive/aidd) for AI-assisted
development workflows. Most contributions are scaffolded through Parallax agents.

---

## Getting Started

### Requirements

- [Bun](https://bun.sh) 1.2+
- Node.js 20+ (for tooling compatibility)
- Git

### Setup

```bash
git clone https://github.com/paralleldrive/alloy.git
cd alloy
bun install
```

---

## Development Workflow

### Run Storybook locally

```bash
bun run --filter storybook dev
```

Storybook starts on [http://localhost:6006](http://localhost:6006).

### Lint and format

Alloy uses [Biome](https://biomejs.dev) for linting and formatting.

```bash
bun run lint        # lint + autofix
bun run format      # format only
bun run typecheck   # TypeScript type checking
```

### Test

```bash
bun run test        # vitest run + lint + typecheck
bun run test:unit   # unit tests only
```

---

## Monorepo Structure

```
packages/
  tokens/       — Design tokens (@paralleldrive/alloy-tokens)
  components/   — React component library (@paralleldrive/alloy-components)
  storybook/    — Storybook host and documentation
bin/
  invoke-agent.sh — Create GitHub agent-task issues
```

---

## Adding a New Component

1. Create `packages/components/src/<ComponentName>.tsx`
2. Export from `packages/components/src/index.ts`
3. Add a story at `packages/storybook/src/stories/<ComponentName>.stories.tsx`
4. Add unit tests at `packages/components/src/__tests__/<ComponentName>.test.tsx`
5. Run `bun run test` and ensure all checks pass

Or use Parallax to scaffold automatically:

```bash
./bin/invoke-agent.sh "Add a Button component with size and variant props"
```

---

## Adding New Tokens

1. Edit or create a token file in `packages/tokens/src/`
2. Export from `packages/tokens/src/index.ts`
3. Add tests in `packages/tokens/src/__tests__/tokens.test.ts`
4. The CSS injection in `packages/tokens/src/css/index.ts` will automatically
   pick up flattened tokens — verify output is correct

---

## Design Principles

All contributions must respect the Alloy design principles:

- **Surface over flatness** — depth through shadow, not color alone
- **Dark is the default** — dark-mode first, light mode as accommodation
- **Motion has weight** — no snapping; physical inertia in transitions
- **Restraint is luxury** — fewer colors, less decoration, more precision

---

## Pull Requests

- Keep PRs focused on a single concern
- Run `bun run test` before opening a PR
- Follow the existing code style (enforced by Biome)
- Update Storybook stories for any visual changes

---

## License

By contributing to Alloy, you agree that your contributions will be licensed
under the [MIT License](./LICENSE).
