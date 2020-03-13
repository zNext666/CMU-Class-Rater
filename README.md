# CMU Class Rater
CMU Class Rater is a web-applicatetion project in software engineering course 2019

## Demo
[CMU Class Rater](https://www.cmuclassrater.engineer)

## Installation

Use the package manager [npm] to install dependencies.

### Install for React
```
cd frontend
npm install
```
will install all the dependencies for the React application
### Install for Express
```
/* Should be in root directory */
npm install
```

### Running Migrations

```
cd backend
npx sequelize-cli db:migrate
```

### Running Seeds
```
cd backend
npx sequelize-cli db:seed:all
```
This will execute that seed file and you will have a demo

Note: Seeders execution is not stored anywhere unlike migrations, which use the SequelizeMeta table. If you wish to override this please read Storage section
## How to run

### Server (Express)
```
npm start
``` 
will start the server and not reload after detecting any change
```
npm run server
```
will start the server, listen for any changes in the code, and hot reload the page on browser to reflect the change.
### Client(React)
```
npm run client
```
will run the React application without starting the server
### Both of them(React&Express) for dev
This command did not use nodemon 
```
npm run dev
```
will concurrently run the server and then run the client on your browser
## About us

