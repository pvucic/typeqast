## Install Node

Check node presence

```bash
node -v
```

If you node is installed then you will get information about node version. Otherwise please follow official installation guide for your OS

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
