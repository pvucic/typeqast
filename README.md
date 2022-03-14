## Install Node.js

Check the presence of Node.js

```bash
node -v
```
If Node.js is installed then you will get information about Node.js version (example v14.18.1)

Otherwise please follow the official installation guide for your Operating System on the link below,

[Install Node](https://nodejs.org/en/download/)

## Running tests

Clone the repository on your local machine and install packages:

```bash
git clone https://github.com/pvucic/typeqast_assignmen
cd typeqast_assignmen
npm install
```

After successful installation, tests can be run with the following command:

## Running tests from Terminal

```bash
npx cypress run
```

## Running tests from Cypress Test Runner

```bash
npx cypress open
```

## Test naming conventions

Following naming conventions is used to name tests:

`TC-RP-001`

- `TC` - Test Case
- `RP` - Registration Page
