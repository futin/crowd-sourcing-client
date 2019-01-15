Table of Contents
=================

   * [Crowd Sourcing](#crowd-sourcing)
    * [Technology stack](#technology-stack)
    * [Install](#install)
    * [Code Style](#code-style)
        * [File template](#file-template)
        * [File structure](#file-structure)

#  Crowd Sourcing Client

> a frontend implementation of a crowd-sourcing app

## Technology stack

    - ReactJS
    - Babel
    - Webpack
    - SCSS
    - ReactRouter

## Install

Please run the "install" command first:

```sh
$ yarn install
```

This will install all of the required dependencies, as stated in `package.json`file.

To start the server, run:

```sh
$ yarn dev
```

which will start `webpack` server in DEV mode.

To build the project, run:

```sh
$ yarn start
```

This will build the project in dist/main.js.

## Code Style

> Some general notes on Code Style used for this project

### File template

Each component should be in the separate folder in src/components:

```js
src
    components
        componentFolder
            component.js
            component.scss
```

Component which are usualy reusable should go in src/common:

```js
src
    components
        commonFolder
```
