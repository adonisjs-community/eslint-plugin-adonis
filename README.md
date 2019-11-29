# Eslint plugin AdonisJS
> Eslint plugin for AdonisJS applications and packages.

This repo contains the config for eslint used by the core packages of AdonisJS and recommended for AdonisJS applications as well.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-adonis`:

```
$ npm install eslint-plugin-adonis --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-adonis` globally.

## Usage
Add `adonis` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

### For core or community packages
`adonis/typescriptPackage` must be extended when creating packages for AdonisJS.

```json
{
  "extends": [
    "plugin:adonis/typescriptPackage"
  ]
}
```

### For applications
`adonis/typescriptApp` must be extended when creating AdonisJS application written in Typescript.

```json
{
  "extends": [
    "plugin:adonis/typescriptApp"
  ]
}
```
