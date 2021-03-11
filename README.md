# `eslint-plugin-maru`

This plugin helps you to pass correct dependency list to effective hooks of [Maru.js](https://github.com/jshan2017/maru-js).

Since this project is just small modifications to [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) **for now**, it would work for effective hooks of maru.js correctly as you expect them how they should work.

## Installation

```bash
npm i --save-dev eslint-plugin-maru
```

or using yarn,

```bash
yarn add -D eslint-plugin-maru
```

## Configuration

In eslint config file, set as below

```json
{
  // ...
  "plugins": ["maru", ...],
  "extends": ["plugin:maru/recommended", ...]
  // ...
}
```
