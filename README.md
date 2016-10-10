# Boilerplate

### Not another react/redux boilerplate… no, this one is mine!

This is my personal project boilerplate with React, Redux, React-Router and Nginx (in Docker) stitched together with webpack for local development.

## Installation

For local development set the `NODE_ENV` environment variable `export NODE_ENV=developent`

1. Add `development.local` (or change line 31 in the nginx-dev.conf file) to your hostfile with your local Docker ip address
2. Run `npm install` to install all packages
3. Run `webpack` to build the initial source
4. Run `docker-compose up` to create the development system
5. In a new terminal window run `web pack —watch` to build when changes are made
