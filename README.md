## Install Node.js

Check the presence of Node.js

```bash
node -v
```
If Node.js is installed then you will get information about Node.js version.
Otherwise please follow the official installation guide for your Operating system on the link below,

[Install Node](https://nodejs.org/en/download/)

## Running tests

Clone the repository on your local machine and install packages:

```bash
git clone https://github.com/pvucic/typeqast_assignmen
cd typeqast_assignmen
npm install
```

After successful installation, tests can be run with following command:

### Running tests from terminal

```bash
npx cypress run
```

### Running tests from Cypress test runner

```bash
npx cypress open
```

## Test naming conventions

following naming conventions is used to name tests:

`tc-rp-001`

- `tc` - test case
- `rp` - registration page
