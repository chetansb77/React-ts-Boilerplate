# React Redux Template

- This project was bootstrapped with [Vite](https://vitejs.dev/).
- This project uses [Storybook](https://github.com/storybookjs/storybook), for creating, testing & showcasing stateless & statefull components
- This project uses [Tailwind](https://github.com/tailwindlabs/tailwindcss) library with SCSS for stying

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run storybook`

Runs the storybook.\
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

The page will reload if you make edits.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test:coverage` or `npm test --coverage`

Generates coverage reports in the `/coverage` folder

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Code Quality : Sonarqube

### Setup Steps

- Prerequisites
  - Docker
  - Docker-Compose
- Compose sonarqube : `npm run compose-up-sonarqube`
- Sonarqube client should be running on <http://localhost:9000/>
- Following steps are only for the first time
  - Login using the following creds
    - username - `admin`
    - password - `admin`
  - Update a new password
  - Click on `Add a project` on the dashboard
  - Provide a project key and project name
  - Update the names of the `projectName` and `projectKey` in `./sonarqube/sonarscan.js`
  - Generate a token
  - Copy the token and update the `token` key value in `./sonarqube/sonarscan.js`
  - Run Scan : `npm run sonarqube-scan`
  - Dashboard will be updated

### Available Sonarqube Scripts

- `npm run compose-up-sonarqube` : Docker compose starts a sonarqube container service

- `npm run compose-down-sonarqube` : Removes the sonarqube container service

- `npm run stop-sonarqube` : Stops the sonarqube container service

- `npm run sonarqube-scan` : For starting a new scan.
