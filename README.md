# Angular Quickstart App

This project is a quickstart template for Angular applications using modern tools. It includes a set of tools and configurations to help you get started with Angular development. The project is pre-configured with a modern build system, testing tools, and other useful features to help you build high-quality Angular applications.

## Features

- Angular 19 (with Node.js 20)
- TypeScript for type-checking
- SCSS for styling
- [esbuild](https://esbuild.github.io/) and [Vite](https://vitejs.dev/) for the build system (see more about the new build system [here](https://angular.dev/tools/cli/build-system-migration))
- [ESLint](https://eslint.org/) for code linting
- [Vitest](https://vitest.dev/) for unit testing
- [Angular Testing Library](https://testing-library.com/docs/angular-testing-library/intro) for testing Angular components
- [Playwright](https://playwright.dev/) for End-to-End (E2E) testing
- [Storybook](https://storybook.js.org/) for component-driven development
- [Compodoc](https://compodoc.app/) for generating documentation
- Pre-configured `.cursorrules` file to work with [Cursor IDE](https://cursor.com/)

## Folder Structure

The project structure is based on the [Angular File Structure Guide](https://angular.dev/reference/configs/file-structure) and [Fractal Design](https://hackernoon.com/fractal-a-react-app-structure-for-infinite-scale-4dab943092af).

## Requirements

- [Node.js](https://nodejs.org/) 20+ and npm
- [Angular CLI](https://angular.dev/guide/setup-local) 19+

## Getting Started

1. Clone this repository.
2. Run `npm install` to install the project dependencies.

## Running the Application

To start a local development server, run:

```bash
npm run start
# or
npm run dev
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building the Application

To build the project run:

```bash
npm run build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Testing the Application

### Unit testing

To execute unit tests with Vitest, use the following command:

```bash
npm run test
```

> To run the tests in watch mode, use `npm run test:watch`. 

To use all the available Vitest options, just run `vitest` command in the terminal:
- `npx vitest` to run the tests in watch mode (tests are run in watch mode by default)
- `npx vitest --coverage` to generate a coverage report
- `npx vitest --ui` to run the tests using Vitest UI Mode

### End-to-End (E2E) testing

To execute End-to-End (E2E) tests with Playwright, run the following command:

```bash
npx playwright install # install the browser binaries (only needed once)
npm run e2e
```

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Other Commands

### Linting

To lint your code, run:

```bash
npm run lint
```

### Storybook (Optional)

Storybook is a tool for developing UI components in isolation from your application. To start Storybook, run:

```bash
npm run storybook
```

Once the server is running, open your browser and navigate to `http://localhost:6006/`.

### Compodoc (Optional)

Compodoc is a documentation tool for Angular applications. To generate the documentation, run:

```bash
npm run compodoc:build
```

Once the documentation is generated, you can open it in your browser by running:

```bash
npm run compodoc:serve
```

> You can also simply run `npm run compodoc:build-and-serve` to generate and serve the documentation in one command.

## Recommendations

### IDEs

- [Cursor IDE](https://cursor.com/)
- [VSCode](https://code.visualstudio.com/)

### Libraries

- Icons: [Lucide Angular](https://lucide.dev/guide/packages/lucide-angular)

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

For more information about running tests with Vitest in Angular, visit the following [article](https://timdeschryver.dev/blog/angular-testing-library-with-vitest).

Other testing resources (applies Jest, similar API to Vitest): 
- https://timdeschryver.dev/blog/good-testing-practices-with-angular-testing-library
- https://timdeschryver.dev/blog/making-sure-youre-using-the-correct-query
- https://timdeschryver.dev/blog/getting-the-most-value-out-of-your-angular-component-tests
- To solve web component testing issues, see https://www.danywalls.com/how-to-test-custom-elements-with-angular-testing-library
