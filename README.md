# testcafe-poc

This PoC aims to provide a better understanding of the advantages of using TestCafe as an E2E framework.

# Problem to solve
- Slow test execution
- No cross-browser testing
- No mobile testing

# Challenges to consider
- CI integration
- Cross-browser testing
- Parallelization of tests
- Cross-platform testing

# Running the tests

TestCafe is a Node.js based framework, so ensure that Node.js and npm are installed in your machine.
1. To install TestCafe:

    `npm install -g testcafe`

2. To run all tests considering the `testcaferc` configuration file:

    `npm test`

3. To run an specific test considering the `testcaferc` configuration file:

    `testcafe tests/tc-create-app.ts`

4. It's possible to ignore the configuration in `testcaferc` file and use different ones.
To run the tests with a different configuration:

- Different browser: `testcafe <browser> tests/tc-create-app.ts`

- Different concurrency number: `testcafe <--concurrency X> <path/to/test-file>`

- Headless mode: `testcafe "chrome:headless" <path/to/test-file>`

