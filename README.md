<div align="center">
  <img src="https://res.cloudinary.com/adonisjs/image/upload/q_100/v1558612869/adonis-readme_zscycu.jpg" width="600px">
</div>

<br />

<div align="center">

[![npm-image]][npm-url] ![][typescript-image] [![license-image]][license-url] [![synk-image]][synk-url]

</div>

<br />


# Eslint plugin AdonisJS
> Eslint plugin for AdonisJS applications and packages.

This repo contains the config for eslint used by the core packages of AdonisJS and recommended for AdonisJS applications as well.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```sh
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-adonis`:

```sh
$ npm install eslint-plugin-adonis --save-dev
```

> **Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-adonis` globally.

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

<div align="center">
  <sub>Built with ❤︎ by <a href="https://github.com/thetutlage">Harminder Virk</a>
</div>

[npm-image]: https://img.shields.io/npm/v/eslint-plugin-adonis/latest.svg?style=for-the-badge&logo=npm
[npm-url]: https://www.npmjs.com/package/eslint-plugin-adonis/v/alpha "npm"

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript

[license-url]: LICENSE.md
[license-image]: https://img.shields.io/github/license/adonisjs-community/eslint-plugin-adonis?style=for-the-badge

[synk-image]: https://img.shields.io/snyk/vulnerabilities/github/adonisjs-community/eslint-plugin-adonis?label=Synk%20Vulnerabilities&style=for-the-badge
[synk-url]: https://snyk.io/test/github/adonisjs-community/eslint-plugin-adonis?targetFile=package.json "synk"
