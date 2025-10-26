# ts-kickstart

A modern TypeScript project template with ESLint, Prettier, and automated releases.

[![CI](https://github.com/moontai0724/npm-kickstart/actions/workflows/ci.yml/badge.svg)](https://github.com/moontai0724/npm-kickstart/actions/workflows/ci.yml)
[![Release](https://github.com/moontai0724/npm-kickstart/actions/workflows/release.yml/badge.svg)](https://github.com/moontai0724/npm-kickstart/actions/workflows/release.yml)
[![Documentation](https://github.com/moontai0724/npm-kickstart/actions/workflows/docs.yml/badge.svg)](https://github.com/moontai0724/npm-kickstart/actions/workflows/docs.yml)
[![codecov](https://codecov.io/gh/moontai0724/npm-kickstart/branch/main/graph/badge.svg)](https://codecov.io/gh/moontai0724/npm-kickstart)

## Features

- 🔷 **TypeScript 5.9+** - Modern TypeScript with strict type checking
- 🎨 **ESLint 9** - Latest ESLint with TypeScript support
- 💅 **Prettier 3** - Code formatting with Prettier integration
- ✅ **Vitest** - Fast unit and e2e testing with 100% code coverage
- 📦 **Dual Package** - Supports both ESM and CommonJS
- 🎯 **Multiple Build Outputs**:
  - Bundled JS files (minified) for production use
  - Native JS files (ESM and CJS) for flexible imports
- 🚀 **GitHub Actions** - Automated CI/CD pipeline
- 📝 **Semantic Release** - Automated versioning and changelog generation based on conventional commits
- 🔄 **Auto Publish** - Automatic NPM package publishing and GitHub releases
- 📚 **TypeDoc** - Automated API documentation generation and publishing to GitHub Pages

## Installation

```bash
npm install ts-kickstart
```

## Usage

### ESM (ES Modules)

```typescript
import { add, multiply, greet } from 'ts-kickstart';

console.log(add(2, 3)); // 5
console.log(multiply(4, 5)); // 20
console.log(greet('World')); // Hello, World!
```

### CommonJS

```javascript
const { add, multiply, greet } = require('ts-kickstart');

console.log(add(2, 3)); // 5
console.log(multiply(4, 5)); // 20
console.log(greet('World')); // Hello, World!
```

## Documentation

API documentation is automatically generated using [TypeDoc](https://typedoc.org/) and published to GitHub Pages.

- **View the latest documentation**: [GitHub Pages](https://moontai0724.github.io/npm-kickstart/)

### Generating Documentation Locally

```bash
# Generate documentation
pnpm run docs

# Clean documentation
pnpm run docs:clean
```

The generated documentation will be in the `docs/` directory. Open `docs/index.html` in your browser to view it.

### Documentation in PRs

When you create a pull request, the documentation preview workflow will automatically:
1. Generate documentation for your changes
2. Upload it as an artifact
3. Post a comment with a download link

This allows reviewers to see how your changes affect the API documentation before merging.

## Testing

This project uses [Vitest](https://vitest.dev/) for unit and end-to-end testing with 100% code coverage.

### Test Structure

- **Unit Tests** (`.spec.ts`): Located alongside source files in `src/`
  - Test individual functions and modules
  - Fast execution
  - Example: `src/add/index.spec.ts`, `src/utils.spec.ts`

- **E2E Tests** (`.test.ts`): Located in `tests/e2e/`
  - Test integration between multiple modules
  - Test complete user workflows
  - Example: `tests/e2e/integration.test.ts`

- **Test Utilities**: Located in `tests/utils/`
  - Shared test helpers and fixtures
  - Available for both unit and e2e tests
  - Example: `tests/utils/test-helpers.ts`

### Running Tests

```bash
# Run all tests once
pnpm test

# Run tests in watch mode (auto-rerun on changes)
pnpm run test:watch

# Run tests with interactive UI
pnpm run test:ui

# Run tests with coverage report
pnpm run test:coverage
```

### Coverage Reports

Coverage reports are automatically generated and uploaded to [Codecov](https://codecov.io/gh/moontai0724/npm-kickstart) on every CI run. You can view:
- Line coverage
- Branch coverage
- Function coverage
- File-by-file breakdown

## Development

### Prerequisites

- Node.js 20.x or higher
- pnpm (recommended) or npm

### Setup

```bash
# Install dependencies
pnpm install

# Type check
pnpm run typecheck

# Lint code
pnpm run lint

# Fix linting issues
pnpm run lint:fix

# Format code
pnpm run format

# Check formatting
pnpm run format:check

# Build the project
pnpm run build

# Run tests
pnpm test

# Run tests in watch mode
pnpm run test:watch

# Run tests with UI
pnpm run test:ui

# Run tests with coverage
pnpm run test:coverage

# Generate documentation
pnpm run docs

# Clean build artifacts
pnpm run clean
```

### Build Outputs

The project generates multiple build outputs:

1. **Bundled files** (`dist/bundle/`):
   - `index.js` - ESM bundle (minified)
   - `index.cjs` - CommonJS bundle (minified)
   - Type definitions included

2. **Native files** (`dist/esm/` and `dist/cjs/`):
   - Individual transpiled files maintaining source structure
   - Useful for tree-shaking and selective imports

## Project Structure

```
ts-kickstart/
├── .github/
│   └── workflows/
│       ├── ci.yml          # CI workflow with tests
│       ├── docs.yml        # Documentation publishing
│       ├── docs-preview.yml # PR documentation preview
│       └── release.yml     # Release and publish workflow
├── src/
│   ├── add/
│   │   ├── index.ts        # Add function
│   │   └── index.spec.ts   # Unit tests
│   ├── sum/
│   │   ├── index.ts        # Sum function
│   │   └── index.spec.ts   # Unit tests
│   ├── index.ts            # Main entry point
│   ├── utils.ts            # Utility functions
│   └── utils.spec.ts       # Unit tests
├── tests/
│   ├── utils/
│   │   └── test-helpers.ts # Shared test utilities
│   └── e2e/
│       └── integration.test.ts # E2E tests
├── .gitignore
├── .prettierignore
├── .prettierrc             # Prettier configuration
├── .releaserc.json         # Semantic-release configuration
├── eslint.config.mjs       # ESLint 9 flat config
├── tsconfig.json           # Base TypeScript config
├── tsconfig.esm.json       # ESM build config
├── tsconfig.cjs.json       # CommonJS build config
├── tsup.config.ts          # Bundler configuration
├── typedoc.json            # TypeDoc configuration
├── vitest.config.ts        # Vitest configuration
├── package.json
├── LICENSE
└── README.md
```

## Semantic Versioning

This project uses [semantic-release](https://github.com/semantic-release/semantic-release) with conventional commits:

- `feat:` - New feature (minor version bump)
- `fix:` - Bug fix (patch version bump)
- `perf:` - Performance improvement (patch version bump)
- `docs:` - Documentation changes (patch version bump)
- `refactor:` - Code refactoring (patch version bump)
- `BREAKING CHANGE:` - Breaking change (major version bump)

### Example Commit Messages

```bash
feat: add new calculation function
fix: resolve issue with greet function
docs: update README with examples
BREAKING CHANGE: change API signature
```

## CI/CD Pipeline

### Continuous Integration

The CI workflow runs on every push and pull request:

1. Type checking with TypeScript
2. Linting with ESLint
3. Format checking with Prettier
4. Building the project
5. Running tests with coverage
6. Uploading coverage to Codecov

Tested on Node.js versions: 20.x, 22.x

### Continuous Deployment

The Release workflow runs on pushes to the `main` branch:

1. Analyzes commits using conventional commit format
2. Determines version bump based on commit types
3. Generates changelog
4. Creates GitHub release
5. Publishes to NPM registry
6. Updates version in package.json

## Configuration

### NPM Publishing

To enable NPM publishing, add your NPM token as a secret in GitHub:

1. Go to repository Settings → Secrets and variables → Actions
2. Add a new secret named `NPM_TOKEN`
3. Value should be your NPM automation token

### GitHub Releases

GitHub releases are automatically created using the `GITHUB_TOKEN` provided by GitHub Actions.

## License

MIT © 月太げつたい🌸

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
