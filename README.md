# Uptime Monitor API

A Node.js-based RESTful API for for tracking the uptime of user-specified websites. It will allow a user to enter a URL that they want monitored and receive alerts when those resources go down or come back up. Functionality will be included for sending SMS alerts to a user rather than email alerts. Users will be able to sign up, sign in, sign out and make uptime checks.

For now, the application will use the filesystem as a key-value store of JSON docs instead of a proper database.

## Setup

Navigate to the root directory of the project and run `$ NODE_ENV=development node index.js` to set the environment to "development" and start the server on port 3333. If you run just `$ node index.js`, the server will default to running in the development environment.

If you'd like to run the server in production mode instead, simply run `$ NODE_ENV=production node index.js`.


## Specs
1. [ ] The API listens on a PORT and accepts incoming HTTP requests for POST, GET, PUT, DELETE and HEAD
2. [ ] The API allows a client to connect, create a new user, then edit and/or delete that user.
3. [ ] The API allows a user to "sign in" which gives them a token that they can use for subsequent authenticated requests.
4. [ ] The API allows the user to "sign out" which invalidates their token.
5. [ ] The API allows a signed-in user to use their token to create a new "check" -- a task for the system to check a given URL to see if it's "up" or "down" (and allow the user to define what "up" and "down" mean for a given resource).
6. [ ] The API allows a signed-in user to edit or delete any of their checks.
7. [ ] The API limits each user to a maximum of 5 checks.
8. [ ] In the background, workers perform all the checks at the appropriate times and send alerts to the users when a check changes its state from "up" to "down" or vice versa.
