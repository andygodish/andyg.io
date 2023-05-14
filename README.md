## What's in the stack

I guess you can call this a stack. I'm using this as a forkable template for use as a starting point on other projects.

It's a slimmed down version of the indie stack provided by remis. It currently contains the following:

- [GitHub Actions](https://github.com/features/actions) for deploy on merge to production and staging environments
- Database ORM with [Prisma](https://prisma.io)
- Styling with [Tailwind](https://tailwindcss.com/)
- End-to-end testing with [Cypress](https://cypress.io)
- Local third party request mocking with [MSW](https://mswjs.io)
- Unit testing with [Vitest](https://vitest.dev) and [Testing Library](https://testing-library.com)
- Code formatting with [Prettier](https://prettier.io)
- Linting with [ESLint](https://eslint.org)
- Static Types with [TypeScript](https://typescriptlang.org)


## Deployment

Come back to this. Deployment goals for the first iteration is to use Azure Container Instance to deploy the Docker image created with the Dockerfile found in the root directory of this repo. 

### GitHub Actions

### Type Checking

This project uses TypeScript. It's recommended to get TypeScript set up for your editor to get a really great in-editor experience with type checking and auto-complete. To run type checking across the whole project, run `npm run typecheck`.

### Linting

This project uses ESLint for linting. That is configured in `.eslintrc.js`.

### Formatting

We use [Prettier](https://prettier.io/) for auto-formatting in this project. It's recommended to install an editor plugin (like the [VSCode Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)) to get auto-formatting on save. There's also a `npm run format` script you can run to format all files in the project.

## CICD

### Semantic Versioning

The `release.yml` runs the `npx semantic-release` command and results in the creation of a new github tag based on the commit messages present since the last tag. 

Configuration for semantic-release is found in the release.config.js file in the root directory. The following plugins are being used: 

- commit-analyzer
- release-notes-generator
- npm (publishing disabled)
- git

The github plugin (recommended by the docs/tutorial) was removed, preventing the creation of a github release. Instead I opted to just create tags since I will be pushing docker images. 

Use the following prefixes to up the version:

- `fix:`                - ups the patch
- `feat:`               - ups the minor and resets the patch 
- `BREAKING CHANGE:`    - *follows two line breaks* ups the major and resets the minor and patch 

```
# example commit message:

feat: added new feature
# 1
# 2
BREAKING CHANGE: This will up the major version
```

#### Notes

- If semantic release cannot locate a previous tag, it uses v1.0.0 as the starting tag.
- removed plugins (github & npm), the former prevented the creation of an actual GH release