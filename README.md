# Jobly

A full-stack job search application that allows users to search for jobs and companies.

##### This repo contains the React front end, the backend can be found <a href="https://github.com/celestekilgore/jobly-backend">here</a>.

## Live Demo
- Here is a live demo of <a href="https://job-ly.surge.sh/">Jobly</a>. Jobly is hosted using a free service - please give the server a few minutes to warm up.  
- Demo login: testusername | password

## Technologies
- React
- Node.js
- Express
- Bootstrap
- PostgreSQL
- JSONSchema
- JSON Web Token
- bcrypt

## Features
- Users can login/logout. Established secure authentication and authorization using JWT and JSON Schema.
- Utilized localStorage and the useEffect hook to ensure a seamless user experience upon page refresh.
- Users can edit their profile information (name and email).
- Users can filter companies and jobs using the search feature.
- Users can click on a specific company to see jobs available at that company.

  
## Local setup instructions
Fork and clone the [backend](https://github.com/celestekilgore/jobly-backend)
```
cd [path_to_your_copy]
npm install
npm start
```
the backend will run locally on port 3001

Fork and clone the [frontend](https://github.com/celestekilgore/jobly-frontend)
```
cd [path_to_your_copy]
npm install
npm start
```
the frontend will run locally on port 3000
