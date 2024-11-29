# React + TypeScript + Vite

This Template is an extended version from the React [Vite](https://vite.dev/) setup. 

It here to make it easier to set up a base Project structure with some (in my opinion) useful [packages](#-packages) you will likely need for your whole project 

## `🏗️` Installation

There are a few things I can't do for you inside this template, you will have to complete this list to fully set up the base project.

- First you will need to create a new Git Repository of my template
- Clone your Repository and run `npm i`
- [Setup ESLint and Prettier](#setup-eslint-and-prettier)
- Remove unwanted Files like the logo.svg (it's just for the favicon and project structure building)

Happy coding 😃

## `📟` Commands

```
# Start the project locally.
npm run dev

# Compiles / Builds the Project into the dist Folder.
npm run build

# If you have a built version in the dist, it runs a compiled version of the code.
npm run preview

# Runs ESLint over your Project files to check your code.
npm run lint-check

# Runs ESLint over your Project files and tries to fix the issue it can fix himself.
npm run lint-format

# Runs Prettier over your Project files to check your code style.
npm run prettier-check

# Runs Prettier over your Project files and fixes all bad code styles.
npm run prettier-format

# Runs a Typescript Compile check to warn of any TS incompadible code.
npm run tsc
```

## Setup ESLint and Prettier

ESLint:
- Most times there is an automatic configuration inside your code editor and choose the files you want ESLint to check.
- Good config for ESLint: `**/*.{js,ts,jsx,tsx}` or `src/**/*.{js,ts,jsx,tsx}`.

Prettier:
- First you will have to install the Prettier Plugin inside your Code Editor.
- I suggest to manually configure Prettier by fist selecting the prettier module inside the node_modules.
- Enable run Prettier on Reformat Code and on Save Code.
- Choose your files you want prettier to check if you want to check all of them use: `**/*`

## `📦` Packages

I have added a few dependencies to help you to get started.

- [ESLint](https://eslint.org/): A tool for identifying and fixing JavaScript and JSX code issues, helping maintain code quality.
- [Prettier](https://prettier.io/): A code formatter that ensures consistent styling across your codebase.
- [react-router-dom](https://www.npmjs.com/package/react-router-dom): A library for handling navigation and routing in React applications.
- [vite-plugin-svgr](https://www.npmjs.com/package/vite-plugin-svgr): A Vite plugin that allows you to import SVG files as React components.
- [js-cookie](https://www.npmjs.com/package/js-cookie): A simple library for handling browser cookies in JavaScript.
- [Sass / Scss](https://sass-lang.com/): A CSS preprocessor that adds features like variables and nesting for more efficient styling.

## `📧` Get in contact

If you have any more questions about / suggestions for the project you can:

- Message me via [mail](mailto:contact@fabian.li).
- Join my [Discord server](https://discord.com/) (not yet opened)

## `🛡️` License

This project was licensed under the CC0-1.0 License.
<br />
See [`License`](LICENSE) for details.

## `❤️` Support

Thanks for choosing my template to create your new React App.