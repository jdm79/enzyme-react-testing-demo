# TDD using Enzyme and Jest

This small project works with a Create React App (CRA) and strips it bare, writes tests and adds the code accordingly. 

[Jest](https://jestjs.io/en/) and [Enzyme](https://airbnb.io/enzyme/) are JS testing suites for unit and integration tests. For end-to-end tests, we'd probably use something like [Selenium](https://www.seleniumhq.org/). Unit tests are usually testing small parts of the app, like functions, so are quite modular and flexible.

For the Jest tests, I'm using the inbuilt expect assertions which can be found [here](https://jestjs.io/docs/en/expect).

When testing, it's important to test the behaviour rather than the implemention - the how - as this can lead to brittle tests that will fail when you change/refactor your code to do the same thing. Ultimately we want to be testing that the data is passed from a to b, for example, rather than how it got from a to b. The aim is not to rewrite tests after a refactor.

# How to install

```
$ git clone git@github.com:jdm79/enzyme-react-testing-demo.git
$ cd enzyme-react-testing-demo
$ npm install
$ npm test
$ npm start (if you want to see the app running in the browser)
```