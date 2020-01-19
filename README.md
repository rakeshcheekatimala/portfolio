Description:
Simple Project that is created by create-react-app(CLI) that demonstrates the features of CI using Travis CI integration.

### Features:

- [x] Initial Skelton and Setup of React Application.
- [x] Implementation of SCSS & Node sass plugin to run SCSS
- [x] Initial Skelton for Components, folder structure of the application.
- [x] Jest Setup and Unit test Cases for the components used in the app.
- [x] Cypress Setup and e2e test cases for automation.
- [x] Adding PropType Validation
- [x] Implemented Docker files  and Travis CI Setup for kickstarter
- [x] Implemented StoryBook and Stories related to the components
- [x] Adding husky which runs the linter and formats the source code before commit 
- [x] Added scripts to run the code coverage
- [x] Added Visual Testing test-cases and scripts to run the visual testing
- [x] Setup for docker file & docker-compose.yml with volumes 

## Available Scripts: 

In the project directory, you can run:

### `npm run visual:testing`
Runs all the visual test cases using cypress and generates a snapshot,uploads it to the Percy to compare the differences for approval/rejection.

Steps: 
 * Create a acccount with https://percy.io
 * Create a project in percy
 * Explore more https://percy.io/

### `npm run coverage`
Runs all the test cases and generates a code coverage report under coverage folder

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run e2e`
To run the e2e test cases by using cypress. Cypress is used for EndtoEnd Testing.


### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
