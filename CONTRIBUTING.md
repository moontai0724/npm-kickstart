# Contributing to ts-kickstart

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## Development Setup

1. Fork and clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/npm-kickstart.git
cd npm-kickstart
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a new branch for your feature or bugfix:
```bash
git checkout -b feat/your-feature-name
# or
git checkout -b fix/your-bugfix-name
```

## Development Workflow

### Code Style

This project uses ESLint and Prettier for code quality and formatting:

```bash
# Check linting
pnpm run lint

# Fix linting issues automatically
pnpm run lint:fix

# Format code
pnpm run format

# Check formatting
pnpm run format:check
```

### Type Checking

```bash
pnpm run typecheck
```

### Building

```bash
# Build all outputs
pnpm run build

# Build only bundled version
pnpm run build:bundle

# Build only native files
pnpm run build:native

# Clean build artifacts
pnpm run clean
```

## Commit Messages

This project follows [Conventional Commits](https://www.conventionalcommits.org/) specification. Your commit messages should follow this format:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

- `feat:` - A new feature (triggers minor version bump)
- `fix:` - A bug fix (triggers patch version bump)
- `docs:` - Documentation only changes (triggers patch version bump)
- `style:` - Changes that don't affect code meaning (white-space, formatting)
- `refactor:` - Code change that neither fixes a bug nor adds a feature (triggers patch version bump)
- `perf:` - Performance improvement (triggers patch version bump)
- `test:` - Adding or correcting tests
- `build:` - Changes to build process or dependencies
- `ci:` - Changes to CI configuration
- `chore:` - Other changes that don't modify src or test files

### Breaking Changes

To trigger a major version bump, include `BREAKING CHANGE:` in the commit footer or add `!` after the type:

```
feat!: change API signature

BREAKING CHANGE: The greet function now requires two parameters
```

### Examples

```bash
feat: add subtract function
fix: correct multiplication logic
docs: update README with new examples
refactor: simplify add function implementation
feat!: change API to use object parameters
```

## Pull Request Process

1. Ensure your code passes all checks:
   ```bash
   pnpm run typecheck
   pnpm run lint
   pnpm run format:check
   pnpm run build
   pnpm test
   ```

2. Update documentation if needed

3. Create a Pull Request with a clear title and description

4. Link any related issues in the PR description

5. Wait for review and address any feedback

## Testing

Currently, this is a template project without tests. If you're adding tests:

1. Place test files next to source files with `.test.ts` or `.spec.ts` extension
2. Update the test script in `package.json`
3. Ensure tests pass before submitting PR

## Release Process

Releases are automated through semantic-release:

1. Commits to the `main` branch trigger the release workflow
2. Semantic-release analyzes commit messages
3. Version is bumped according to commit types
4. Changelog is generated automatically
5. GitHub release is created
6. Package is published to NPM

You don't need to manually update version numbers or create releases.

## Questions?

Feel free to open an issue for any questions or concerns!
