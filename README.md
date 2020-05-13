# Usage

```
yarn add @westrem/pretty_linty_typescripty --dev --exact
```

# [Prettier](https://prettier.io/docs/en/configuration.html)

## Install

```
yarn add prettier --dev --exact
# or globally
yarn global add prettier
```

```
npm install --save-dev --save-exact prettier
# or globally
npm install --global prettier
```

## Configuration

Copy file `.prettierrc.js`.
Copy file `.prettierignore`. Uses gitignore syntax.

## [Usage](https://prettier.io/docs/en/webstorm.html)

Use the Reformat with Prettier action (Alt-Shift-Cmd-P on macOS or Alt-Shift-Ctrl-P on Windows and Linux) to format the selected code, a file, or a whole directory.

To run Prettier on save in WebStorm 2020.1 or above, open Preferences | Languages & Frameworks | JavaScript | Prettier and enable the option Run on save for files.

By default, only JavaScript and TypeScript files will be formatted automatically. You can further configure what files will be updated using the [glob pattern](https://github.com/isaacs/node-glob#glob-primer).

# [EsLint](https://eslint.org/docs/user-guide/configuring)

## Install

```
yarn add eslint --dev
# or
npm install eslint --save-dev
```

```
yarn add --dev eslint-config-prettier
yarn add --dev eslint-plugin-prettier
yarn add --dev eslint-plugin-import
yarn add --dev eslint-plugin-security 
yarn add --dev eslint-plugin-jsdoc 
yarn add --dev eslint-plugin-unicorn 
yarn add --dev @typescript-eslint/parser 
yarn add --dev @typescript-eslint/eslint-plugin
```

## Usage

Copy file `.eslintrc.js`.
Copy file `.eslintignore`. Uses gitignore syntax.

# package.json scripts

```
"lint": "./node_modules/.bin/eslint --config .eslintrc.js --cache --cache-location .cache/eslint/",
"ts": "./node_modules/.bin/tsc --build tsconfig.json --pretty",
```